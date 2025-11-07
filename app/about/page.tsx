import type { Metadata } from 'next'
import Link from 'next/link'
import { Linkedin, Twitter, Github, ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About - NutriAgent Bot',
  description: 'Learn about the story behind NutriAgent Bot, an open-source AI-powered nutrition tracking solution built to solve real problems.',
}

export default function AboutPage() {
  return (
    <>
      <div className="legal-page">
        <Link href="/" className="back-link">← Back to Home</Link>

        <h1>About NutriAgent Bot</h1>

        <section>
          <h2>The Story</h2>
          <p>
            Like many people, I struggled with tracking my nutrition. I wanted to understand what I was eating,
            monitor my macros, and see how my diet correlated with my training performance. However, most nutrition
            tracking apps had a fundamental problem: <strong>I didn't own my data</strong>.
          </p>
          <p>
            I needed a solution where I could:
          </p>
          <ul>
            <li>Own and control my nutrition data completely</li>
            <li>Build custom reports and visualizations</li>
            <li>Cross-reference my nutrition data with other tools, like my training data</li>
            <li>Have the flexibility to export, analyze, and integrate my data however I wanted</li>
          </ul>
          <p>
            That's why I built NutriAgent Bot. It combines the convenience of Telegram messaging with the power of AI
            to make nutrition tracking effortless, while ensuring all your data is stored in your own Google Sheets—data
            you own and control.
          </p>
        </section>

        <section>
          <h2>Open Source</h2>
          <p>
            NutriAgent Bot is an open-source project. I built it not just to solve my own problem, but also to train
            my development skills with AI by building a fully featured AI agent. The project demonstrates:
          </p>
          <ul>
            <li>Natural language processing for meal understanding</li>
            <li>Image recognition for food identification</li>
            <li>AI agent orchestration with LangChain</li>
            <li>Integration with external APIs (Telegram, Google Sheets)</li>
            <li>OAuth authentication flows</li>
          </ul>
          <p>
            You can view the source code, contribute, or use it as a learning resource:
          </p>
          <p>
            <a
              href="https://github.com/juandastic/nutri-agent-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </p>
        </section>

        <section>
          <h2>Connect</h2>
          <p>
            I'm always interested in connecting with fellow developers, nutrition enthusiasts, and anyone working on
            interesting projects. Feel free to reach out:
          </p>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/juandastic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/juandastic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
              >
                <Twitter className="h-5 w-5" />
                X (Twitter)
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/juandastic/nutri-agent-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>License</h2>
          <p>
            This project is licensed under the MIT License, making it free to use, modify, and distribute.
            See the <a
              href="https://github.com/juandastic/nutri-agent-bot/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >LICENSE</a> file for details.
          </p>
        </section>
      </div>

      <Footer />
    </>
  )
}