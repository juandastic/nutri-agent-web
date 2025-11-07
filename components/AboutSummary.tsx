import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AboutSummary = () => {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About NutriAgent Bot
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built out of a personal need to track nutrition while owning my data. NutriAgent Bot is an open-source project
            that combines AI-powered meal tracking with complete data ownership. All your nutrition data is stored in your own
            Google Sheets, giving you the freedom to build custom reports, cross-reference with training data, and integrate
            with any tool you choose.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Learn more about the project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSummary
