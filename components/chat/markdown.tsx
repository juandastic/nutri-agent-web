"use client";

import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  a({ className, ...props }) {
    return (
      <a
        {...props}
        className={`underline decoration-primary/60 underline-offset-4 hover:opacity-80 ${className ?? ""}`.trim()}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  },
  strong({ className, ...props }) {
    return (
      <strong
        {...props}
        className={`font-semibold text-inherit ${className ?? ""}`.trim()}
      />
    );
  },
  em({ className, ...props }) {
    return (
      <em
        {...props}
        className={`text-inherit opacity-90 ${className ?? ""}`.trim()}
      />
    );
  },
  p({ className, ...props }) {
    return (
      <p
        {...props}
        className={`text-inherit ${className ?? ""}`.trim()}
      />
    );
  },
  li({ className, ...props }) {
    return (
      <li
        {...props}
        className={`text-inherit ${className ?? ""}`.trim()}
      />
    );
  },
  code(componentProps) {
    const { className, children, ...rest } = componentProps;
    const { inline, ...props } = rest as typeof rest & { inline?: boolean };

    if (inline) {
      return (
        <code
          {...props}
          className={`rounded bg-black/10 px-1 py-0.5 font-mono text-xs text-inherit ${className ?? ""}`.trim()}
        >
          {children}
        </code>
      );
    }

    return (
      <code
        {...props}
        className={`block whitespace-pre-wrap rounded-2xl bg-black/10 p-3 font-mono text-xs text-inherit ${className ?? ""}`.trim()}
      >
        {children}
      </code>
    );
  },
  img({ className, ...props }) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        {...props}
        className={`mt-3 w-full rounded-xl border border-primary/20 shadow-soft ${className ?? ""}`.trim()}
      />
    );
  },
  ul({ className, ...props }) {
    return (
      <ul
        {...props}
        className={`list-disc space-y-1 pl-5 text-inherit ${className ?? ""}`.trim()}
      />
    );
  },
  ol({ className, ...props }) {
    return (
      <ol
        {...props}
        className={`list-decimal space-y-1 pl-5 text-inherit ${className ?? ""}`.trim()}
      />
    );
  },
};

