import { MESSAGES_API_ENDPOINT, API_ENDPOINT } from "./config";
import type { AgentResponse, MessagesResponse, HistoricalMessage } from "./api-types";
import type { ChatMessage, ChatAttachment } from "@/components/chat/types";
import { transformHistoricalMessage } from "./utils";

export interface SendMessageParams {
  userId: string;
  userEmail: string;
  userName: string;
  messageText: string;
  attachments: ChatAttachment[];
  attachmentFiles: Map<string, File>;
}

/**
 * Fetches historical messages for a given user ID
 * @param userId - The external user ID
 * @returns Promise resolving to an array of ChatMessage objects
 * @throws Error if the API request fails
 */
export async function fetchHistoricalMessages(
  userId: string
): Promise<ChatMessage[]> {
  const response = await fetch(
    `${MESSAGES_API_ENDPOINT}?external_user_id=${encodeURIComponent(userId)}`
  );

  if (!response.ok) {
    throw new Error(`Failed to load messages: ${response.status}`);
  }

  const data = (await response.json()) as MessagesResponse;

  if (data.success && data.messages && data.messages.length > 0) {
    return data.messages.map(transformHistoricalMessage);
  }

  return [];
}

/**
 * Sends a message to the agent API
 * @param params - Parameters including user info, message text, and attachments
 * @returns Promise resolving to the AgentResponse
 * @throws Error if the API request fails or response is invalid
 */
export async function sendMessageToAgent(
  params: SendMessageParams
): Promise<AgentResponse> {
  const { userId, userEmail, userName, messageText, attachments, attachmentFiles } = params;

  const formData = new FormData();
  formData.append("external_user_id", userId);
  formData.append("username", userEmail);
  formData.append("name", userName);
  formData.append("message_text", messageText);

  // Add images as an array to FormData
  attachments.forEach((attachment) => {
    const file = attachmentFiles.get(attachment.id);
    if (file) {
      formData.append("images", file);
    }
  });

  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = (await response.json()) as AgentResponse;

  if (!data.success || !data.response_text) {
    throw new Error("Invalid response from API");
  }

  return data;
}

