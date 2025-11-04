import { MessageCircle, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdulrehman@example.com");
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/923001234567", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            Hello, I'm Abdul Rehman
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Frontend Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I build responsive, scalable, and performance-focused web applications
            using modern technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="min-w-[200px] font-heading font-semibold text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCopyEmail}
              className="min-w-[200px] font-heading font-semibold text-base border-2"
            >
              <Mail className="mr-2 h-5 w-5" />
              Copy Email
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
