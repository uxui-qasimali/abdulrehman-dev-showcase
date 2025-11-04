import { Code, Smartphone, Wrench, Plug, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that work seamlessly across all devices.",
    },
    {
      icon: Wrench,
      title: "Custom Frontend Solutions",
      description: "Tailored frontend solutions to meet your specific business needs.",
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamless integration with third-party APIs and backend services.",
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for your business.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Sites",
      description: "Full-featured online stores with secure payment integration.",
    },
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Helping startups and individuals grow through clean web development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-border group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="ghost" className="text-primary hover:text-primary font-medium p-0">
                    Learn More →
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
