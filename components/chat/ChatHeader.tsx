"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nutribotagent-logo.png";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 px-6 py-4 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-primary shadow-soft">
          <Image
            src={logo}
            alt="NutriAgent logo"
            fill
            className="object-contain p-2"
            sizes="48px"
            priority
          />
        </div>
        <div>
          <h1 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            NutriAgent
          </h1>
          <p className="text-2xl font-semibold text-foreground">Web Chat</p>
          <p className="text-sm text-muted-foreground">
            Track your nutrition with NutriAgent on the web.
          </p>
        </div>
      </div>
      <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
        <Link href="/" aria-label="Back to home">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="sm:hidden"
      >
        <Link href="/" aria-label="Back to home">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Button>
    </header>
  );
};

export default ChatHeader;

