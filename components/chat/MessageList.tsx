"use client";

import type { RefObject } from "react";
import MessageBubble from "@/components/chat/MessageBubble";
import type { ChatMessage } from "@/components/chat/types";

type MessageListProps = {
  messages: ChatMessage[];
  containerRef: RefObject<HTMLDivElement | null>;
};

const MessageList = ({ messages, containerRef }: MessageListProps) => (
  <div
    ref={containerRef}
    className="relative flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-8"
  >
    {messages.map((message) => (
      <MessageBubble key={message.id} message={message} />
    ))}
  </div>
);

export default MessageList;

