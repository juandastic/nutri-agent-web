const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Start the Conversation",
      description: "Open Telegram and start chatting with @nutri_agent_bot"
    },
    {
      number: "02",
      title: "Share Your Meals",
      description: "Send photos or describe what you ate in natural language"
    },
    {
      number: "03",
      title: "Connect Google Account",
      description: "One-time secure OAuth connection to your Google account"
    },
    {
      number: "04",
      title: "Track Automatically",
      description: "Your nutrition data is saved to your own Google Sheet instantly"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes—no complicated setup required
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="space-y-4">
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent opacity-20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 text-primary/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

