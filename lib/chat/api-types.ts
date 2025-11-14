export interface AgentResponse {
  success: boolean;
  response_text: string;
  user_id: number;
  chat_id: number;
  external_chat_id: string;
  bot_message_id: number;
  timestamp: string;
}

export interface HistoricalMessage {
  id: number;
  role: "user" | "bot";
  message_type: string;
  text: string;
  from_user_id: number | null;
  created_at: string;
  updated_at: string | null;
}

export interface MessagesResponse {
  success: boolean;
  user_id: number;
  chat_id: number;
  external_chat_id: string;
  messages: HistoricalMessage[];
}

