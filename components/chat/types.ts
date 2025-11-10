export type Sender = "user" | "bot";

export type ChatAttachment = {
  id: string;
  name: string;
  sizeLabel: string;
  previewUrl: string;
};

export type ChatMessage = {
  id: string;
  sender: Sender;
  text: string;
  attachments: ChatAttachment[];
  timestamp: string;
};

