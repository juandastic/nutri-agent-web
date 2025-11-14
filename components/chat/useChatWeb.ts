"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { sendMessageToAgent } from "@/lib/chat/api";
import { extractUserData } from "@/lib/chat/utils";
import { useMessages } from "./useMessages";
import { useFileAttachments } from "./useFileAttachments";
import { useHistoricalMessages } from "./useHistoricalMessages";
import type { ChatAttachment } from "./types";

/**
 * Main hook for chat functionality
 * Composes smaller hooks and handles form submission and API integration
 */
const useChatWeb = () => {
  const { user, isLoaded } = useUser();
  const userId = user?.id;

  // Compose smaller hooks
  const { messages, addMessage, resetMessages, setMessages } = useMessages();
  const {
    pendingAttachments,
    fileInputRef,
    attachmentFilesRef,
    handleFilesAdded,
    handleAttachClick,
    handleRemoveAttachment,
    clearAttachments,
    clearPendingAttachmentsUI,
    cleanupAttachments,
  } = useFileAttachments();

  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Load historical messages when user is authenticated
  useHistoricalMessages({
    isLoaded,
    user,
    userId,
    setMessages,
    resetMessages,
  });

  // Auto-scroll to bottom when messages change
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

  // Auto-resize textarea based on content
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

  /**
   * Calls the agent API with the message and attachments
   */
  const callAgentAPI = useCallback(
    async (messageText: string, attachments: ChatAttachment[]): Promise<void> => {
      if (!user || !userId) {
        throw new Error("User must be authenticated");
      }

      const { email, name } = extractUserData(user);

      try {
        const response = await sendMessageToAgent({
          userId,
          userEmail: email,
          userName: name,
          messageText,
          attachments,
          attachmentFiles: attachmentFilesRef.current,
        });

        addMessage("bot", response.response_text);
        setError(null);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to get response from agent. Please try again.";
        setError(errorMessage);
        addMessage(
          "bot",
          "Sorry, I'm having trouble connecting right now. Please try again in a moment."
        );
      } finally {
        setIsSending(false);
        // Clean up attachment files and preview URLs after API call completes
        cleanupAttachments(attachments);
      }
    },
    [user, userId, addMessage, attachmentFilesRef, cleanupAttachments]
  );

  /**
   * Handles message submission
   */
  const submitMessage = useCallback(() => {
    const trimmed = inputValue.trim();

    if (!trimmed && pendingAttachments.length === 0) {
      return;
    }

    // Require user to be authenticated
    if (!isLoaded || !user) {
      return;
    }

    const attachmentsToSend = [...pendingAttachments];

    // Add user message to chat
    addMessage("user", trimmed, attachmentsToSend);

    // Clear input and UI state (but keep files in attachmentFilesRef for API call)
    setInputValue("");
    clearPendingAttachmentsUI();
    setError(null);

    // Send message to agent
    setIsSending(true);
    void callAgentAPI(trimmed, attachmentsToSend);
  }, [
    inputValue,
    pendingAttachments,
    isLoaded,
    user,
    addMessage,
    clearPendingAttachmentsUI,
    callAgentAPI,
  ]);

  const handleSubmit = useCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      submitMessage();
    },
    [submitMessage]
  );

  const handleSendShortcut = useCallback(() => {
    submitMessage();
  }, [submitMessage]);

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return {
    messages,
    inputValue,
    pendingAttachments,
    isSending,
    error,
    fileInputRef,
    textareaRef,
    chatContainerRef,
    handleInputChange,
    handleSubmit,
    handleSendShortcut,
    handleFilesAdded,
    handleAttachClick,
    handleRemoveAttachment,
  };
};

export default useChatWeb;
