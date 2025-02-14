import { RESPOND_TO_QUESTION_SYSTEM_PROMPT } from "@/prompts";
import {
  Chat,
  Chunk,
  chunkSchema,
  CoreMessage,
  DisplayMessage,
  Source,
} from "@/types";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod.mjs";
import { z } from "zod";

export function stripMessagesOfCitations(
  messages: DisplayMessage[]
): DisplayMessage[] {
  return messages.map((msg) => ({
    ...msg,
    content: msg.content.replace(/\[\d+\]/g, ""),
  }));
}

export function convertToCoreMessages(
  messages: DisplayMessage[]
): CoreMessage[] {
  return messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));
}

export function addSystemMessage(
  messages: CoreMessage[],
  systemMessage: string
): CoreMessage[] {
  return [{ role: "system", content: systemMessage }, ...messages];
}

export async function embedHypotheticalData(
  value: string,
  openai: OpenAI
): Promise<{ embedding: number[] }> {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: value,
  });

  return { embedding: embedding.data[0].embedding };
}

// Hypothetical Document Embedding (HyDe)
export async function generateHypotheticalData(
  chat: Chat,
  openai: OpenAI
): Promise<string> {
  const { messages } = chat;
  const mostRecentMessages = messages.slice(-3);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: await convertToCoreMessages([
      {
        role: "system",
        content:
          "You are an AI assistant responsible for generating hypothetical textx excerpts from Dr. Daniel Ringel. You're given the conversation history. Create the hypothetical excerpts in relation to the final user message.",
        links: [],
      },
      ...mostRecentMessages,
    ]),
  });

  return response.choices[0].message.content ?? "";
}

export async function searchForChunksUsingEmbedding(
  embedding: number[],
  pineconeIndex: any
): Promise<Chunk[]> {
  const { matches } = await pineconeIndex.query({
    vector: embedding,
    topK: 7,
    includeMetadata: true,
  });

  return matches.map((match: any) =>
    chunkSchema.parse({
      text: match.metadata?.text ?? "",
      pre_context: match.metadata?.pre_context ?? "",
      post_context: match.metadata?.post_context ?? "",
      source_url: match.metadata?.source_url ?? "",
      source_description: match.metadata?.source_description ?? "",
      order: match.metadata?.order ?? 0,
    })
  );
}

export function aggregateSources(chunks: Chunk[]): Source[] {
  const sourceMap = new Map<string, Source>();

  chunks.forEach((chunk) => {
    if (!sourceMap.has(chunk.source_url)) {
      sourceMap.set(chunk.source_url, {
        chunks: [],
        source_url: chunk.source_url,
        source_description: chunk.source_description,
      });
    }
    sourceMap.get(chunk.source_url)!.chunks.push(chunk);
  });

  return Array.from(sourceMap.values());
}

export function sortChunksInSourceByOrder(source: Source): Source {
  source.chunks.sort((a, b) => a.order - b.order);
  return source;
}

export function getSourcesFromChunks(chunks: Chunk[]): Source[] {
  const sources = aggregateSources(chunks);
  return sources.map((source) => sortChunksInSourceByOrder(source));
}

export function buildContextFromOrderedChunks(
  chunks: Chunk[],
  citationNumber: number
): string {
  let context = "";
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    context += chunk.pre_context;
    context += " " + chunk.text + ` [${citationNumber}] `;
    if (
      i === chunks.length - 1 ||
      chunk.post_context !== chunks[i + 1].pre_context
    ) {
      context += chunk.post_context;
    }
    if (i < chunks.length - 1) {
      context += "\n\n";
    }
  }
  return context.trim();
}

export function getContextFromSource(
  source: Source,
  citationNumber: number
): string {
  return `
    <excerpt-from-dr-daniel-ringel-source>
    Source Description: ${source.source_description}
    Source Citation: [${citationNumber}]
    Excerpt from Source [${citationNumber}]:
    ${buildContextFromOrderedChunks(source.chunks, citationNumber)}
    </excerpt-from-dr-daniel-ringel-source>
  `;
}

export function getContextFromSources(sources: Source[]): string {
  return sources
    .map((source, index) => getContextFromSource(source, index + 1))
    .join("\n\n\n");
}

export function buildPromptFromContext(context: string): string {
  // TODO: yes, this is redundant
  return RESPOND_TO_QUESTION_SYSTEM_PROMPT(context);
}

export function getLinksFromChunks(chunks: Chunk[]): string[] {
  return chunks.map((chunk) => chunk.source_url);
}
