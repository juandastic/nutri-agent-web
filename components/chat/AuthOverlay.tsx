"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const AuthOverlay = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl">
      <div className="max-w-md mx-auto px-6 py-8 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-primary shadow-medium">
            <Lock className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          Sign in to continue
        </h2>

        <p className="mb-8 text-base text-muted-foreground leading-relaxed">
          The agent allows you to register your nutritional data and chat history.
          Create an account or sign in to chat with the agent.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <SignInButton mode="modal">
            <Button
              variant="outline"
              className="border-primary/30 bg-white/80 text-primary shadow-soft hover:bg-white min-w-[140px]"
            >
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="shadow-soft min-w-[140px]">
              Create account
            </Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;

