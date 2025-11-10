"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createTimestamp, formatBytes } from "@/lib/chat/utils";
import type {
  ChatAttachment,
  ChatMessage,
  Sender,
} from "@/components/chat/types";

const initialWelcomeMessage: ChatMessage = {
  id: "welcome",
  sender: "bot",
  text: "Hi! I'm NutriAgent. Share your meals and I'll help you track your nutrition.",
  attachments: [],
  timestamp: createTimestamp(),
};

const BOT_RESPONSE = "hello world";

const useChatWeb = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialWelcomeMessage]);
  const [inputValue, setInputValue] = useState("");
  const [pendingAttachments, setPendingAttachments] = useState<ChatAttachment[]>(
    []
  );
  const [isSending, setIsSending] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const attachmentUrlsRef = useRef<Set<string>>(new Set());
  const botReplyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      const container = chatContainerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    return () => {
      attachmentUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      attachmentUrlsRef.current.clear();
      if (botReplyTimeoutRef.current) {
        clearTimeout(botReplyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const maxHeight = 160;
    textarea.style.height = "auto";
    const nextHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [inputValue]);

  const handleFilesAdded = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newAttachments = Array.from(files).map((file) => {
      const previewUrl = URL.createObjectURL(file);
      attachmentUrlsRef.current.add(previewUrl);

      return {
        id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`,
        name: file.name,
        sizeLabel: formatBytes(file.size),
        previewUrl,
      };
    });

    setPendingAttachments((prev) => [...prev, ...newAttachments]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const handleAttachClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleRemoveAttachment = useCallback((attachmentId: string) => {
    setPendingAttachments((prev) => {
      const attachment = prev.find((item) => item.id === attachmentId);
      if (attachment) {
        URL.revokeObjectURL(attachment.previewUrl);
        attachmentUrlsRef.current.delete(attachment.previewUrl);
      }
      return prev.filter((item) => item.id !== attachmentId);
    });
  }, []);

  const addMessage = useCallback(
    (sender: Sender, text: string, attachments: ChatAttachment[] = []) => {
      const newMessage: ChatMessage = {
        id: `${Date.now()}-${sender}`,
        sender,
        text,
        attachments,
        timestamp: createTimestamp(),
      };

      setMessages((prev) => [...prev, newMessage]);
    },
    []
  );

  const handleSubmit = useCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      const trimmed = inputValue.trim();

      if (!trimmed && pendingAttachments.length === 0) {
        return;
      }

      addMessage("user", trimmed, pendingAttachments);

      setInputValue("");
      setPendingAttachments([]);
      setIsSending(true);

      botReplyTimeoutRef.current = setTimeout(() => {
        addMessage("bot", BOT_RESPONSE);
        setIsSending(false);
      }, 900);
    },
    [addMessage, inputValue, pendingAttachments]
  );

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return {
    messages,
    inputValue,
    pendingAttachments,
    isSending,
    fileInputRef,
    textareaRef,
    chatContainerRef,
    handleInputChange,
    handleSubmit,
    handleFilesAdded,
    handleAttachClick,
    handleRemoveAttachment,
  };
};

export default useChatWeb;

