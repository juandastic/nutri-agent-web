"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatMessage, Sender, ChatAttachment } from "./types";
import { createTimestamp } from "@/lib/chat/utils";

const createInitialWelcomeMessage = (): ChatMessage => ({
  id: "welcome",
  sender: "bot",
  text: "Hi! I'm NutriAgent. Share your meals descriptions or photos and I'll help you track your nutrition.",
  attachments: [],
  timestamp: createTimestamp(),
});

/**
 * Custom hook for managing chat messages
 * Handles message state, welcome message initialization, and message addition
 */
export function useMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const welcomeMessageInitializedRef = useRef<boolean>(false);

  // Initialize welcome message on client side to avoid hydration mismatch
  useEffect(() => {
    if (!welcomeMessageInitializedRef.current && messages.length === 0) {
      welcomeMessageInitializedRef.current = true;
      setMessages([createInitialWelcomeMessage()]);
    }
  }, [messages.length]);

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

  const resetMessages = useCallback(() => {
    welcomeMessageInitializedRef.current = false;
    setMessages([createInitialWelcomeMessage()]);
  }, []);

  const setMessagesDirectly = useCallback((newMessages: ChatMessage[]) => {
    setMessages(newMessages);
  }, []);

  return {
    messages,
    addMessage,
    resetMessages,
    setMessages: setMessagesDirectly,
  };
}

