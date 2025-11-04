const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "jQuery", icon: "📘" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: "🌊" },
    { name: "HTML", icon: "📄" },
    { name: "Linux", icon: "🐧" },
    { name: "Git", icon: "🔀" },
    { name: "Redux", icon: "🔄" },
    { name: "API", icon: "🔌" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Tech Stack
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-xl border border-border card-hover flex flex-col items-center justify-center gap-3"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                <span className="text-4xl">{skill.icon}</span>
                <span className="font-heading font-semibold text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
