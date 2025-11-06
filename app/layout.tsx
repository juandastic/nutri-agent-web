import type { Metadata } from 'next'
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

