"use client";

import { Upload, Send, Loader2 } from "lucide-react";
import type { RefObject } from "react";
import type { ChatAttachment } from "@/components/chat/types";

type ChatComposerProps = {
  pendingAttachments: ChatAttachment[];
  isSending: boolean;
  inputValue: string;
  fileInputRef: RefObject<HTMLInputElement | null>;
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (value: string) => void;
  onFilesAdded: (files: FileList | null) => void;
  onAttachClick: () => void;
  onRemoveAttachment: (id: string) => void;
};

const ChatComposer = ({
  pendingAttachments,
  isSending,
  inputValue,
  fileInputRef,
  textareaRef,
  onSubmit,
  onInputChange,
  onFilesAdded,
  onAttachClick,
  onRemoveAttachment,
}: ChatComposerProps) => (
  <form
    onSubmit={onSubmit}
    className="shrink-0 border-t border-primary/15 bg-white/70 p-6 backdrop-blur-xl"
  >
    {pendingAttachments.length > 0 && (
      <div className="mb-4 flex flex-wrap gap-3">
        {pendingAttachments.map((attachment) => (
          <div
            key={attachment.id}
            className="group relative flex items-center gap-3 rounded-2xl border border-primary/20 bg-white/80 px-3 py-2 text-sm text-muted-foreground shadow-soft"
          >
            <div className="flex flex-col">
              <span className="max-w-[160px] truncate font-medium text-foreground">
                {attachment.name}
              </span>
              <span className="text-xs text-muted-foreground/70">
                {attachment.sizeLabel}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onRemoveAttachment(attachment.id)}
              className="rounded-full bg-foreground/10 px-2 py-1 text-xs text-foreground transition hover:bg-foreground/20"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}

    <div className="flex flex-col gap-3">
      <div className="flex items-end gap-3">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(event) => onFilesAdded(event.target.files)}
          className="hidden"
        />
        <button
          type="button"
          onClick={onAttachClick}
          className="flex h-12 w-12 items-center justify-center self-end rounded-full border border-primary/20 bg-white/80 text-primary shadow-soft transition hover:bg-primary/10"
          title="Attach images"
        >
          <Upload className="h-5 w-5" />
        </button>
        <div className="relative flex-1 rounded-3xl border border-primary/20 bg-white/80 shadow-soft focus-within:border-primary/60">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="Describe your meal or upload a photo..."
            rows={1}
            className="w-full resize-none rounded-3xl bg-transparent px-5 py-3 text-sm text-foreground focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-medium transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          aria-label={isSending ? "Sending" : "Send message"}
        >
          {isSending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  </form>
);

export default ChatComposer;

