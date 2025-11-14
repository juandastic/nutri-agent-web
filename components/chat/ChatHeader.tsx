"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nutribotagent-logo.png";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between gap-2 sm:gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 px-3 sm:px-6 py-3 sm:py-4 shadow-soft">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-primary shadow-soft">
          <Image
            src={logo}
            alt="NutriAgent logo"
            fill
            className="object-contain p-2"
            sizes="48px"
            priority
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary/80 truncate">
            NutriAgent
          </h1>
          <p className="text-lg sm:text-2xl font-semibold text-foreground truncate">Web Chat</p>
          <p className="text-sm text-muted-foreground">
            Track your nutrition with NutriAgent on the web.
          </p>
        </div>
      </div>
      <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex flex-shrink-0">
        <Link href="/" aria-label="Back to home">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="sm:hidden flex-shrink-0"
      >
        <Link href="/" aria-label="Back to home">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Button>
    </header>
  );
};

export default ChatHeader;

