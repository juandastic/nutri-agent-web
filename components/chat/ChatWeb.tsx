"use client";

import { useUser } from "@clerk/nextjs";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatComposer from "@/components/chat/ChatComposer";
import MessageList from "@/components/chat/MessageList";
import AuthOverlay from "@/components/chat/AuthOverlay";
import useChatWeb from "@/components/chat/useChatWeb";

const ChatWeb = () => {
  const { user, isLoaded } = useUser();
  const {
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
    handleSendShortcut,
  } = useChatWeb();

  const isAuthenticated = isLoaded && user !== null;

  return (
    <div className="flex h-screen flex-col bg-gradient-hero overflow-hidden">
      <div className="container mx-auto flex h-full max-w-5xl flex-col px-4 py-6 md:py-12">
        <div className="flex h-full flex-col gap-6">
          <ChatHeader />

          <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-primary/15 bg-white/80 shadow-medium backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-10 top-0 left-0 z-10 h-40 w-full bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

            {!isAuthenticated && <AuthOverlay />}

            <MessageList messages={messages} containerRef={chatContainerRef} />

            <ChatComposer
              pendingAttachments={pendingAttachments}
              isSending={isSending}
              inputValue={inputValue}
              fileInputRef={fileInputRef}
              textareaRef={textareaRef}
              onSubmit={handleSubmit}
              onSendShortcut={handleSendShortcut}
              onInputChange={handleInputChange}
              onFilesAdded={handleFilesAdded}
              onAttachClick={handleAttachClick}
              onRemoveAttachment={handleRemoveAttachment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWeb;

