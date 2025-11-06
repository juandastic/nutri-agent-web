# NutriAgent Bot - Landing Page

A modern Next.js landing page for NutriAgent Bot, a Telegram bot that helps users track nutrition through natural language conversations and image recognition.

## Features

- **Landing Page** - Modern, responsive design showcasing the bot's features
- **Terms and Conditions** - Comprehensive terms suitable for Google OAuth approval
- **Privacy Policy** - Detailed privacy policy with GDPR and CCPA compliance
- **Next.js 14** - Built with the latest Next.js App Router
- **TypeScript** - Fully typed for better development experience
- **Responsive Design** - Works seamlessly on mobile and desktop

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

```
nutriAgentWeb/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── terms/
│   │   └── page.tsx        # Terms and Conditions page
│   └── privacy/
│       └── page.tsx        # Privacy Policy page
├── components/
│   └── Footer.tsx          # Reusable footer component
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Or any Node.js hosting service

## Customization

### Colors

The color palette is defined in `app/globals.css` using CSS variables:
- `--bright-blue`: #4A90E2
- `--lime-green`: #7ED321
- `--dark-green`: #2E7D32
- `--light-green`: #A8E063

You can modify these variables to change the color scheme throughout the site.

### Bot Handle

Update the bot handle `@nutri_agent_bot` throughout the codebase:
- `app/page.tsx` - Landing page links
- `app/terms/page.tsx` - Terms contact info
- `app/privacy/page.tsx` - Privacy contact info
- `components/Footer.tsx` - Footer links

## License

Copyright © 2024 NutriAgent Bot. All rights reserved.

# nutri-agent-web
