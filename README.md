# NutriAgent Bot - Web Frontend

A modern Next.js web application for NutriAgent Bot, providing a beautiful landing page and interactive web chat interface. Built with Clerk integration for authentication and user management, users can track their nutrition through natural language conversations and image recognition directly in their browser. Connect your Google account to automatically record all your nutrition data in your own Google Sheets spreadsheet.

## 🎯 Project Goal

NutriAgent Web makes nutrition tracking accessible through a modern web interface. Instead of manually logging meals in apps, users can chat with the agent about what they ate (or send a photo), and it will intelligently extract and record the information in a spreadsheet they own and control.

## 💡 The Idea

Nutrition tracking shouldn't be complicated or require switching between multiple apps. NutriAgent Web provides a seamless web experience:

1. **Beautiful Landing Page**: Modern, responsive design showcasing the bot's features and benefits
2. **Web Chat Interface**: Interactive chat interface that connects to the NutriAgent API, allowing users to track nutrition directly in their browser
3. **Natural Language Processing**: Chat with the agent about your meals using everyday language or send photos
4. **AI-Powered Understanding**: The agent uses AI to understand what you ate from text or images, extract nutritional information, and ask clarifying questions when needed
5. **Your Data, Your Control**: Connect your Google account once, and the agent creates a new spreadsheet in your Google Drive to store all your nutrition data
6. **Own Your Spreadsheet**: Unlike other nutrition apps, your data lives in a Google Sheet you own and can access, edit, or extend anytime

### How It Works

**Web Chat:**

- Visit the web application and sign in with your account
- Navigate to the chat interface
- Share what you ate in two ways:
  - **Text messages**: Type "I had a grilled chicken salad with olive oil dressing for lunch"
  - **Images**: Upload a photo of your meal and the agent will detect ingredients and estimate nutritional information
  - **Refine estimations conversationally**: Add context to improve accuracy. For example, upload a picture of french fries but add a caption like "these weren't fried in oil, they were prepared in an air fryer" - the agent will adjust the nutritional estimation accordingly
- Connect your Google account through OAuth to enable automatic spreadsheet recording
- The agent creates a new Google Sheet and begins recording your meals automatically
- All your nutrition data is stored in your spreadsheet, which you can view, edit, or analyze however you want

**Landing Page:**

- Modern, responsive design showcasing NutriAgent Bot's features
- Information about how the service works
- Links to Terms and Conditions and Privacy Policy
- Call-to-action to start using the service

## ✨ Features

- **Modern Landing Page** - Beautiful, responsive design showcasing the bot's features
- **Interactive Web Chat** - Full-featured chat interface for tracking nutrition
- **Clerk Integration** - Complete authentication and user management solution with secure sign-up, sign-in, session management, and protected routes
- **User Authentication** - Secure authentication using Clerk with automatic session handling
- **User Management** - User profiles, account management, and user context throughout the application
- **Image Upload Support** - Upload photos of meals for AI-powered analysis
- **Natural Language Processing** - Chat with the agent using everyday language
- **Conversational Refinement** - Improve accuracy by adding context through conversation
- **Google Sheets Integration** - Connect your Google account to automatically record nutrition data
- **OAuth Authentication** - Secure Google account connection using OAuth 2.0
- **Conversation History** - View past messages and conversation context
- **Responsive Design** - Works seamlessly on mobile and desktop
- **Terms and Conditions** - Comprehensive terms suitable for Google OAuth approval
- **Privacy Policy** - Detailed privacy policy with GDPR and CCPA compliance
- **Next.js 15** - Built with the latest Next.js App Router
- **TypeScript** - Fully typed for better development experience
- **Tailwind CSS** - Modern utility-first CSS framework

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Clerk account (for authentication)
- Access to the NutriAgent API backend

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nutriAgentWeb
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables:

Create a `.env.local` file in the project root and add your values: 

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# NutriAgent API
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com

# Optional: Clerk configuration
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/chat
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/chat
```

### Running the Application

#### Development

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

#### Production

1. Build the application:

```bash
npm run build
# or
yarn build
```

2. Start the production server:

```bash
npm run start
# or
yarn start
```

Or deploy to a platform like Vercel, which will automatically build and deploy your application.

## 🔧 Development Setup

### Clerk Integration

This project uses [Clerk](https://clerk.com/) for authentication and user management. Clerk provides a complete authentication solution with:

- **User Authentication**: Secure sign-up and sign-in flows
- **User Management**: User profiles, sessions, and account management
- **Session Management**: Automatic session handling and refresh
- **Protected Routes**: Middleware-based route protection
- **User Context**: Easy access to user information throughout the application

**How it works:**

1. Users sign up or sign in using Clerk's authentication UI
2. Clerk manages user sessions and provides user context via React hooks
3. The chat interface uses Clerk's `useUser()` hook to get authenticated user information
4. User ID, email, and name are automatically passed to the NutriAgent API for conversation tracking
5. Protected routes are automatically handled by Clerk middleware

**Clerk Setup:**

1. Create a free account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file (see Environment Variables section)
5. Configure your sign-in/sign-up URLs in Clerk dashboard (optional, defaults are provided)

**Key Files:**

- `middleware.ts` - Clerk middleware for route protection
- `components/chat/AuthOverlay.tsx` - Authentication overlay component
- `components/chat/ChatWeb.tsx` - Uses Clerk's `useUser()` hook for user context

### Project Structure

The project uses Next.js App Router with the following structure:

- **Pages**: Located in `app/` directory
  - Landing page (`app/page.tsx`)
  - Chat interface (`app/chat/page.tsx`)
  - Terms and Conditions (`app/terms/page.tsx`)
  - Privacy Policy (`app/privacy/page.tsx`)
  - About page (`app/about/page.tsx`)

- **Components**: Reusable React components in `components/`
  - Chat components (`components/chat/`)
  - Landing page components (`components/`)
  - UI components (`components/ui/`)

- **API Integration**: API client code in `lib/chat/`
  - API configuration (`lib/chat/config.ts`)
  - API client functions (`lib/chat/api.ts`)
  - Type definitions (`lib/chat/api-types.ts`)

- **Styling**: Global styles in `app/globals.css` and Tailwind configuration

### Code Formatting

This project uses ESLint for code linting and formatting. The configuration follows Next.js best practices.

**Format and lint:**

```bash
npm run lint
# or
yarn lint
```

### Environment Variables

#### Required

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key (required for authentication)
- `CLERK_SECRET_KEY`: Your Clerk secret key (required for authentication)
- `NEXT_PUBLIC_API_BASE_URL`: Base URL for the NutriAgent API backend (defaults to `https://nutribot.juandago.dev` if not set)

#### Optional

- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Custom sign-in URL path (default: `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Custom sign-up URL path (default: `/sign-up`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: Redirect URL after sign-in (default: `/chat`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: Redirect URL after sign-up (default: `/chat`)

**Note:** Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Do not include sensitive secrets in these variables.

## 📁 Project Structure

```
nutriAgentWeb/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── chat/
│   │   └── page.tsx             # Chat interface page
│   ├── terms/
│   │   └── page.tsx             # Terms and Conditions page
│   └── privacy/
│       └── page.tsx             # Privacy Policy page
├── assets/                       # Static assets
│   ├── nutribot-logo.svg        # Logo SVG
│   └── nutribotagent-logo.png   # Logo PNG
├── components/                   # React components
│   ├── chat/                    # Chat-related components
│   │   ├── AuthOverlay.tsx      # Authentication overlay
│   │   ├── ChatComposer.tsx     # Message input component
│   │   ├── ChatHeader.tsx       # Chat header component
│   │   ├── ChatWeb.tsx          # Main chat component
│   │   ├── MessageBubble.tsx   # Individual message display
│   │   ├── MessageList.tsx      # Message list container
│   │   ├── markdown.tsx         # Markdown rendering component
│   │   ├── types.ts             # TypeScript types
│   │   ├── useChatWeb.ts        # Main chat hook
│   │   ├── useFileAttachments.ts # File attachment handling hook
│   │   ├── useHistoricalMessages.ts # Historical messages hook
│   │   └── useMessages.ts       # Messages state management hook
│   ├── ui/                      # UI components
│   │   └── button.tsx           # Button component
│   ├── AboutSummary.tsx         # About section component
│   ├── CTA.tsx                  # Call-to-action component
│   ├── Features.tsx             # Features section component
│   ├── Footer.tsx               # Footer component
│   ├── Hero.tsx                 # Hero section component
│   └── HowItWorks.tsx           # How it works section component
├── lib/                          # Utility libraries
│   └── chat/                     # Chat API integration
│       ├── api.ts                # API client functions
│       ├── api-types.ts          # API type definitions
│       ├── config.ts             # API configuration
│       └── utils.ts              # Utility functions
├── middleware.ts                 # Next.js middleware (Clerk auth)
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel's dashboard
4. Vercel will automatically detect Next.js and deploy

**Environment Variables in Vercel:**

Make sure to add all required environment variables in your Vercel project settings:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_API_BASE_URL`
- Any optional Clerk configuration variables

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Or any Node.js hosting service

**Note:** Make sure to set all required environment variables in your hosting platform's configuration.

## 🎨 Customization

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

### API Configuration

Update the API base URL in:
- `lib/chat/config.ts` - Default API endpoint configuration
- Environment variable `NEXT_PUBLIC_API_BASE_URL` - Runtime configuration

## 🛡️ Error Handling

The application includes proper error handling:

- Validates environment variables are set
- Handles API errors gracefully
- Displays user-friendly error messages
- Logs errors for debugging
- Handles authentication errors
- Manages file upload errors

## 📄 License

Copyright © 2025 NutriAgent Bot. All rights reserved.
