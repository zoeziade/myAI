// Chatbot Settings

export const OWNER_NAME: string = `Farouk Charkas`;
export const OWNER_DESCRIPTION: string = `[OWNER DESCRIPTION]`;

export const AI_NAME: string = `[AI NAME]`;
export const AI_TONE: string = `[AI TONE]`;
export const AI_ROLE: string = `[AI ROLE]`;

export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

// Break Settings

export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;

// UI Settings

export const CHAT_HEADER: string = `[CHAT HEADER]`;
export const MESSAGE_PLACEHOLDER: string = `[MESSAGE PLACEHOLDER]`;
export const FOOTER_MESSAGE: string = `[FOOTER MESSAGE]`;
export const CLEAR_BUTTON_TEXT: string = `[CLEAR BUTTON TEXT]`;
export const PAGE_TITLE: string = `[PAGE TITLE]`;
export const PAGE_DESCRIPTION: string = `Chat with ${AI_NAME}, ${OWNER_NAME}'s AI assistant.`;

// Conversation Settings

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;

// Vector Database Settings

export const PINECONE_INDEX_NAME: string = `my-ai`;
