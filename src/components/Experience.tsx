const Experience = () => {
  const experiences = [
    {
      role: "React Developer",
      company: "Visqode",
      period: "2025 – Present",
      description:
        "Building responsive web apps with React, Tailwind, and modern JavaScript frameworks.",
    },
    {
      role: "Frontend Developer",
      company: "Abbas Tech Solutions",
      period: "2022 – 2025",
      description:
        "Developed scalable frontend applications and improved UX performance.",
    },
    {
      role: "Intern Software Engineer",
      company: "Startup Hub",
      period: "2020 – 2022",
      description:
        "Worked on REST API integrations and learned agile workflows.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            My professional journey so far
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                  {/* Content card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card p-6 rounded-xl shadow-lg card-hover border border-border">
                      <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        @ {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
