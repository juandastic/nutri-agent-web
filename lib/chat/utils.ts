import type { HistoricalMessage } from "./api-types";
import type { ChatMessage } from "@/components/chat/types";

export const formatBytes = (bytes: number) => {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
};

export const createTimestamp = () =>
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

/**
 * Transforms a historical message from API format to ChatMessage format
 * @param msg - Historical message from API
 * @returns ChatMessage object
 */
export function transformHistoricalMessage(msg: HistoricalMessage): ChatMessage {
  const date = new Date(msg.created_at);
  const timestamp = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return {
    id: `historical-${msg.id}`,
    sender: msg.role === "user" ? "user" : "bot",
    text: msg.text || "",
    attachments: [],
    timestamp,
  };
}

/**
 * Extracts user email and name from Clerk User object
 * @param user - Clerk User object
 * @returns Object with email and name strings
 */
export function extractUserData(user: {
  primaryEmailAddress?: { emailAddress?: string } | null;
  emailAddresses?: Array<{ emailAddress?: string }>;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}): { email: string; name: string } {
  const email =
    user.primaryEmailAddress?.emailAddress ||
    user.emailAddresses?.[0]?.emailAddress ||
    "";

  const name =
    user.fullName ||
    `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
    "";

  return { email, name };
}

