import { Code2, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Frontend Developer",
      description: "Skilled in modern JavaScript frameworks & UI integration.",
    },
    {
      icon: Target,
      title: "Code Perfectionist",
      description: "Focused on writing scalable, optimized, maintainable code.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Loves debugging, fixing issues, and improving performance.",
    },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Who I Am
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Passionate about crafting clean code and reliable digital solutions
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-border"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
