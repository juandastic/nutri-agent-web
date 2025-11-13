import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import './globals.css'

export const metadata: Metadata = {
  title: 'NutriAgent Bot - AI-Powered Nutrition Tracking on Telegram',
  description: 'Track your nutrition effortlessly with NutriAgent Bot on Telegram. Send photos or chat about meals, and let AI record everything in your Google Sheets automatically.',
  authors: [{ name: 'NutriAgent Bot' }],
  keywords: ['nutrition tracking', 'telegram bot', 'AI nutrition', 'calorie counter', 'meal tracker', 'google sheets integration', 'food diary'],
  openGraph: {
    title: 'NutriAgent Bot - AI-Powered Nutrition Tracking',
    description: 'Track your nutrition through natural conversation on Telegram. AI-powered meal analysis with automatic Google Sheets integration.',
    type: 'website',
    images: [
      {
        url: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b1b45bf-1931-48d6-8917-b8082646af92/id-preview-60d81a6f--e121f7e9-48be-40ee-b547-5f8c2e6341ad.lovable.app-1762406096625.png',
        width: 1200,
        height: 630,
        alt: 'NutriAgent Bot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Lovable',
    images: ['https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4b1b45bf-1931-48d6-8917-b8082646af92/id-preview-60d81a6f--e121f7e9-48be-40ee-b547-5f8c2e6341ad.lovable.app-1762406096625.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative min-h-screen bg-background text-foreground">
          <header className="fixed top-6 right-6 z-50">
            <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-medium backdrop-blur-md">
              <SignedOut>
                <div className="flex items-center gap-2">
                  <SignInButton mode="modal">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 bg-white/80 text-primary shadow-soft hover:bg-white"
                    >
                      Log in
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="shadow-soft">
                      Create account
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-3">
                  <span className="hidden text-sm font-medium text-muted-foreground md:inline">
                    Welcome back!
                  </span>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox:
                          'border-2 border-primary/40 shadow-soft',
                        userButtonOuterIdentifier:
                          'text-sm text-muted-foreground',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </header>
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

