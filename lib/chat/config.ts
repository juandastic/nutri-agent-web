// Get API base URL from environment variable, fallback to default
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://nutribot.juandago.dev";

export const API_ENDPOINT = `${API_BASE_URL}/api/answer`;
export const MESSAGES_API_ENDPOINT = `${API_BASE_URL}/api/messages`;

