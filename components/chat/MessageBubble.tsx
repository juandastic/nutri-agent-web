"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/chat/markdown";
import type { ChatAttachment, ChatMessage } from "@/components/chat/types";

type MessageBubbleProps = {
  message: ChatMessage;
};

const AttachmentPreview = ({ attachment }: { attachment: ChatAttachment }) => (
  <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={attachment.previewUrl}
      alt={attachment.name}
      className="max-h-48 w-full object-cover"
    />
    <div className="flex items-center justify-between px-3 py-2 text-xs text-muted-foreground">
      <span className="truncate">{attachment.name}</span>
      <span>{attachment.sizeLabel}</span>
    </div>
  </div>
);

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[90%] md:max-w-[70%] rounded-3xl border px-4 sm:px-5 py-3 sm:py-4 shadow-soft transition-all ${
          isUser
            ? "bg-gradient-primary text-primary-foreground rounded-br-lg border-primary/40"
            : "bg-white text-foreground rounded-bl-lg border-primary/15"
        }`}
      >
        <div className="mb-2 text-xs uppercase tracking-widest opacity-70">
          {isUser ? "You" : "NutriAgent"}
        </div>
        {message.text && (
          <div
            className={`space-y-3 text-sm leading-relaxed ${
              isUser ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {message.text}
            </ReactMarkdown>
          </div>
        )}
        {message.attachments.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.attachments.map((attachment) => (
              <AttachmentPreview key={attachment.id} attachment={attachment} />
            ))}
          </div>
        )}
        <div
          className={`mt-3 text-right text-[11px] uppercase tracking-widest ${
            isUser ? "text-primary-foreground/80" : "text-muted-foreground/80"
          }`}
        >
          {message.timestamp}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;

