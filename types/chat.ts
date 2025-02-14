import { z } from "zod";

export const displayMessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  links: z.array(z.string()).default([]),
});
export type DisplayMessage = z.infer<typeof displayMessageSchema>;


export const chatSchema = z.object({
  messages: z.array(displayMessageSchema),
});
export type Chat = z.infer<typeof chatSchema>;


export const indicatorIconTypeSchema = z.enum([
  'thinking',
  'searching',
  'understanding',
  'documents',
  'none'
]);
export type IndicatorIconType = z.infer<typeof indicatorIconTypeSchema>;


export const loadingIndicatorSchema = z.object({
  status: z.string(),
  icon: indicatorIconTypeSchema
});
export type LoadingIndicator = z.infer<typeof loadingIndicatorSchema>;
