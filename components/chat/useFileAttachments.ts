"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatAttachment } from "./types";
import { formatBytes } from "@/lib/chat/utils";

/**
 * Custom hook for managing file attachments in the chat
 * Handles file selection, preview URLs, and cleanup
 */
export function useFileAttachments() {
  const [pendingAttachments, setPendingAttachments] = useState<ChatAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const attachmentUrlsRef = useRef<Set<string>>(new Set());
  const attachmentFilesRef = useRef<Map<string, File>>(new Map());

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      attachmentUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      attachmentUrlsRef.current.clear();
      attachmentFilesRef.current.clear();
    };
  }, []);

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

  const clearAttachments = useCallback(() => {
    setPendingAttachments((prev) => {
      prev.forEach((attachment) => {
        URL.revokeObjectURL(attachment.previewUrl);
        attachmentUrlsRef.current.delete(attachment.previewUrl);
        attachmentFilesRef.current.delete(attachment.id);
      });
      return [];
    });
  }, []);

  /**
   * Clears only the UI state (pendingAttachments) without removing files from attachmentFilesRef.
   * Use this when you need to clear the UI immediately but keep files available for async operations.
   */
  const clearPendingAttachmentsUI = useCallback(() => {
    setPendingAttachments([]);
  }, []);

  /**
   * Cleans up specific attachments (files and preview URLs).
   * Use this after async operations complete to clean up resources.
   * @param attachments - Array of attachments to clean up (must include id and previewUrl)
   */
  const cleanupAttachments = useCallback((attachments: Array<{ id: string; previewUrl?: string }>) => {
    attachments.forEach((attachment) => {
      // Clean up preview URL if provided
      if (attachment.previewUrl) {
        URL.revokeObjectURL(attachment.previewUrl);
        attachmentUrlsRef.current.delete(attachment.previewUrl);
      }
      // Remove file from ref
      attachmentFilesRef.current.delete(attachment.id);
    });
  }, []);

  return {
    pendingAttachments,
    fileInputRef,
    attachmentFilesRef,
    handleFilesAdded,
    handleAttachClick,
    handleRemoveAttachment,
    clearAttachments,
    clearPendingAttachmentsUI,
    cleanupAttachments,
  };
}

