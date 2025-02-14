import OpenAI from "openai";
import {
  CoreMessage,
  StreamedLoading,
  StreamedMessage,
  IndicatorIconType,
  StreamedDone,
  AIProviders,
  ProviderName,
} from "@/types";
import Anthropic from "@anthropic-ai/sdk";

export interface QueueAssistantResponseParams {
  controller: ReadableStreamDefaultController;
  providers: AIProviders;
  providerName: ProviderName;
  messages: CoreMessage[];
  model_name: string;
  systemPrompt: string;
  links: string[];
  error_message: string;
}

export async function handleOpenAIStream({
  controller,
  providers,
  providerName,
  messages,
  model_name,
  systemPrompt,
  links,
}: QueueAssistantResponseParams) {
  let client: OpenAI = providers.openai;
  if (providerName === "fireworks") {
    client = providers.fireworks;
  }
  const streamedResponse = await client.chat.completions.create({
    model: model_name,
    messages: [{ role: "system", content: systemPrompt }, ...messages],
    stream: true,
  });
  if (!streamedResponse) {
    throw new Error("No stream response");
  }
  let responseBuffer: string = "";

  for await (const chunk of streamedResponse) {
    responseBuffer += chunk.choices[0]?.delta.content ?? "";
    const streamedMessage: StreamedMessage = {
      type: "message",
      message: {
        role: "assistant",
        content: responseBuffer,
        links: links,
      },
    };
    controller.enqueue(
      new TextEncoder().encode(JSON.stringify(streamedMessage) + "\n")
    );
  }
  const donePayload: StreamedDone = {
    type: "done",
    final_message: responseBuffer,
  };
  controller.enqueue(
    new TextEncoder().encode(JSON.stringify(donePayload) + "\n")
  );
  controller.close();
}

export async function handleAnthropicStream({
  controller,
  providers,
  messages,
  model_name,
  systemPrompt,
  links,
}: QueueAssistantResponseParams) {
  let anthropicClient: Anthropic = providers.anthropic;
  let anthropicMessages: Anthropic.Messages.MessageParam[] = messages.map(
    (msg) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.content,
    })
  );
  let responseBuffer: string = "";
  await anthropicClient.messages
    .stream({
      messages: anthropicMessages,
      model: model_name,
      system: systemPrompt,
      max_tokens: 4096,
    })
    .on("text", (textDelta) => {
      responseBuffer += textDelta;
      const streamedMessage: StreamedMessage = {
        type: "message",
        message: {
          role: "assistant",
          content: responseBuffer,
          links: links,
        },
      };
      controller.enqueue(
        new TextEncoder().encode(JSON.stringify(streamedMessage) + "\n")
      );
    })
    .on("end", () => {
      const donePayload: StreamedDone = {
        type: "done",
        final_message: responseBuffer,
      };
      controller.enqueue(
        new TextEncoder().encode(JSON.stringify(donePayload) + "\n")
      );
      controller.close();
    });
}

export async function queueAssistantResponse({
  controller,
  providers,
  providerName,
  messages,
  model_name,
  systemPrompt,
  links,
  error_message,
}: QueueAssistantResponseParams) {
  if (providerName === "openai" || providerName === "fireworks") {
    console.log(providerName);
    await handleOpenAIStream({
      controller,
      providers,
      providerName,
      messages,
      model_name,
      systemPrompt,
      links,
      error_message,
    });
  } else if (providerName === "anthropic") {
    await handleAnthropicStream({
      controller,
      providers,
      providerName,
      messages,
      model_name,
      systemPrompt,
      links,
      error_message,
    });
  }
}

export interface QueueLoadingParams {
  controller: ReadableStreamDefaultController;
  status: string;
  icon: IndicatorIconType;
}

export async function queueIndicator({
  controller,
  status,
  icon,
}: QueueLoadingParams) {
  const loadingPayload: StreamedLoading = {
    type: "loading",
    indicator: {
      status: status,
      icon: icon,
    },
  };
  controller.enqueue(
    new TextEncoder().encode(JSON.stringify(loadingPayload) + "\n")
  );
}
