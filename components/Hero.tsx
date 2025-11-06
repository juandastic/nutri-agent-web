import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";
import nutriLogo from "@/assets/nutribotagent-logo.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Track Your Nutrition,
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Naturally
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chat with NutriAgent Bot on Telegram. Send photos or describe your meals, 
              and let AI track everything in your own Google Sheets—effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all shadow-medium"
                asChild
              >
                <a href="https://t.me/nutri_agent_bot" target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-5 w-5" />
                  Start on Telegram
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2"
                asChild
              >
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-float">
            <Image 
              src={nutriLogo} 
              alt="NutriAgent Bot Logo" 
              className="w-full max-w-md drop-shadow-2xl"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;

