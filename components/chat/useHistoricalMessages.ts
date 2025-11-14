"use client";

import { useEffect, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { fetchHistoricalMessages } from "@/lib/chat/api";
import type { ChatMessage } from "./types";

interface UseHistoricalMessagesParams {
  isLoaded: boolean;
  user: ReturnType<typeof useUser>["user"];
  userId: string | undefined;
  setMessages: (messages: ChatMessage[]) => void;
  resetMessages: () => void;
}

/**
 * Custom hook for loading historical messages when user is authenticated
 * Handles loading state and user change detection
 */
export function useHistoricalMessages({
  isLoaded,
  user,
  userId,
  setMessages,
  resetMessages,
}: UseHistoricalMessagesParams) {
  const historyLoadedRef = useRef<string | null>(null);

  // Reset history loaded flag when user changes
  useEffect(() => {
    if (!isLoaded || !user || !userId) {
      historyLoadedRef.current = null;
      // Reset to welcome message when user logs out
      resetMessages();
    }
  }, [isLoaded, user, userId, resetMessages]);

  // Load historical messages when user is authenticated
  useEffect(() => {
    const loadHistoricalMessages = async () => {
      // Only load if user is loaded and authenticated
      if (!isLoaded || !user || !userId) {
        return;
      }

      // Prevent loading multiple times for the same user
      if (historyLoadedRef.current === userId) {
        return;
      }

      historyLoadedRef.current = userId;

      try {
        const historicalMessages = await fetchHistoricalMessages(userId);

        if (historicalMessages.length > 0) {
          // Replace messages with historical ones
          setMessages(historicalMessages);
        } else {
          // No historical messages, keep welcome message
          resetMessages();
        }
      } catch (err) {
        console.error("Failed to load historical messages:", err);
        // On error, keep the welcome message
        resetMessages();
        historyLoadedRef.current = null; // Allow retry on error
      }
    };

    void loadHistoricalMessages();
  }, [isLoaded, user, userId, setMessages, resetMessages]);
}

