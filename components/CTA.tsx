import { Send, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-medium">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Experience NutriAgent on the Web
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Prueba nuestra demo web y comienza a registrar tus comidas ahora mismo. ¿Prefieres el móvil? Siempre puedes continuar en Telegram.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 shadow-lg font-semibold"
                asChild
              >
                <Link href="/chat">
                  <Send className="mr-2 h-5 w-5" />
                  Try it now
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white/95 text-foreground hover:bg-white shadow-lg font-semibold border-2 border-white/20"
                asChild
              >
                <a
                  href="https://t.me/nutri_agent_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Use on Telegram
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

