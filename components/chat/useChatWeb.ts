"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";
import { createTimestamp, formatBytes } from "@/lib/chat/utils";
import type {
  ChatAttachment,
  ChatMessage,
  Sender,
} from "@/components/chat/types";

const API_ENDPOINT = "https://nutribot.juandago.dev/api/answer";
const MESSAGES_API_ENDPOINT = "https://nutribot.juandago.dev/api/messages";

const createInitialWelcomeMessage = (): ChatMessage => ({
  id: "welcome",
  sender: "bot",
  text: "Hi! I'm NutriAgent. Share your meals and I'll help you track your nutrition.",
  attachments: [],
  timestamp: createTimestamp(),
});

interface AgentResponse {
  success: boolean;
  response_text: string;
  user_id: number;
  chat_id: number;
  external_chat_id: string;
  bot_message_id: number;
  timestamp: string;
}

interface HistoricalMessage {
  id: number;
  role: "user" | "bot";
  message_type: string;
  text: string;
  from_user_id: number | null;
  created_at: string;
  updated_at: string | null;
}

interface MessagesResponse {
  success: boolean;
  user_id: number;
  chat_id: number;
  external_chat_id: string;
  messages: HistoricalMessage[];
}

const signInCommands = new Set(["login", "log in", "sign in"]);
const signUpCommands = new Set([
  "signup",
  "sign up",
  "sign-up",
  "register",
]);

type AuthIntent = "signIn" | "signUp";

const detectAuthIntent = (value: string): AuthIntent | null => {
  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    return null;
  }

  if (signInCommands.has(normalized)) {
    return "signIn";
  }

  if (signUpCommands.has(normalized)) {
    return "signUp";
  }

  return null;
};

const useChatWeb = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { user, isLoaded } = useUser();
  const userId = user?.id;
  const userEmail = user?.primaryEmailAddress?.emailAddress || user?.emailAddresses[0]?.emailAddress || "";
  const userName = user?.fullName || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "";

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [pendingAttachments, setPendingAttachments] = useState<ChatAttachment[]>(
    []
  );
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const attachmentUrlsRef = useRef<Set<string>>(new Set());
  const attachmentFilesRef = useRef<Map<string, File>>(new Map());
  const historyLoadedRef = useRef<string | null>(null);
  const welcomeMessageInitializedRef = useRef<boolean>(false);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      const container = chatContainerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    });
  }, []);

  // Initialize welcome message on client side to avoid hydration mismatch
  useEffect(() => {
    if (!welcomeMessageInitializedRef.current && messages.length === 0) {
      welcomeMessageInitializedRef.current = true;
      setMessages([createInitialWelcomeMessage()]);
    }
  }, [messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Reset history loaded flag when user changes
  useEffect(() => {
    if (!isLoaded || !user || !userId) {
      historyLoadedRef.current = null;
      // Reset to welcome message when user logs out
      setMessages([createInitialWelcomeMessage()]);
    }
  }, [isLoaded, user, userId]);

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
        const response = await fetch(
          `${MESSAGES_API_ENDPOINT}?external_user_id=${encodeURIComponent(userId)}`
        );

        if (!response.ok) {
          throw new Error(`Failed to load messages: ${response.status}`);
        }

        const data = (await response.json()) as MessagesResponse;

        if (data.success && data.messages && data.messages.length > 0) {
          // Transform historical messages to ChatMessage format
          const historicalMessages: ChatMessage[] = data.messages.map((msg) => {
            // Convert ISO timestamp to the same format as createTimestamp
            const date = new Date(msg.created_at);
            const timestamp = new Intl.DateTimeFormat("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(date);

            return {
              id: `historical-${msg.id}`,
              sender: msg.role === "user" ? "user" : "bot",
              text: msg.text || "",
              attachments: [],
              timestamp,
            };
          });

          // Replace messages with historical ones
          setMessages(historicalMessages);
        } else {
          // No historical messages, keep welcome message
          setMessages([createInitialWelcomeMessage()]);
        }
      } catch (err) {
        console.error("Failed to load historical messages:", err);
        // On error, keep the welcome message
        setMessages([createInitialWelcomeMessage()]);
        historyLoadedRef.current = null; // Allow retry on error
      }
    };

    void loadHistoricalMessages();
  }, [isLoaded, user, userId]);

  useEffect(() => {
    return () => {
      attachmentUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      attachmentUrlsRef.current.clear();
      attachmentFilesRef.current.clear();
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
      const attachmentId = `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`;

      // Store the File object for later use in API call
      attachmentFilesRef.current.set(attachmentId, file);

      return {
        id: attachmentId,
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
        attachmentFilesRef.current.delete(attachmentId);
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

  const callAgentAPI = useCallback(
    async (messageText: string, attachments: ChatAttachment[]): Promise<void> => {
      if (!user || !userId) {
        throw new Error("User must be authenticated");
      }

      const formData = new FormData();
      formData.append("external_user_id", userId);
      formData.append("username", userEmail);
      formData.append("name", userName);
      formData.append("message_text", messageText);

      // Add images as an array to FormData
      attachments.forEach((attachment) => {
        const file = attachmentFilesRef.current.get(attachment.id);
        if (file) {
          formData.append("images", file);
        }
      });

      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = (await response.json()) as AgentResponse;

        if (data.success && data.response_text) {
          addMessage("bot", data.response_text);
          setError(null);
        } else {
          throw new Error("Invalid response from API");
        }
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
        // Clean up attachment files after API call completes
        attachments.forEach((attachment) => {
          attachmentFilesRef.current.delete(attachment.id);
        });
      }
    },
    [user, userId, userEmail, userName, addMessage]
  );

  const submitMessage = useCallback(() => {
    const trimmed = inputValue.trim();

    if (!trimmed && pendingAttachments.length === 0) {
      return;
    }

    // Check if user is authenticated
    if (!isLoaded || !user) {
      const authIntent = detectAuthIntent(trimmed);
      if (authIntent && pendingAttachments.length === 0) {
        if (authIntent === "signIn") {
          void openSignIn();
        } else {
          void openSignUp();
        }
      }
      return;
    }

    const authIntent = detectAuthIntent(trimmed);

    const attachmentsToSend = [...pendingAttachments];
    addMessage("user", trimmed, attachmentsToSend);

    setInputValue("");
    setPendingAttachments([]);
    setError(null);

    if (authIntent && attachmentsToSend.length === 0) {
      if (authIntent === "signIn") {
        void openSignIn();
      } else {
        void openSignUp();
      }
      setIsSending(false);
      return;
    }

    setIsSending(true);
    void callAgentAPI(trimmed, attachmentsToSend);
  }, [
    addMessage,
    inputValue,
    openSignIn,
    openSignUp,
    pendingAttachments,
    isLoaded,
    user,
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

