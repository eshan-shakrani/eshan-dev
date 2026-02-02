export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          A bit more about who I am and what I do.
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              I'm a software developer with a passion for building applications
              that are both functional and enjoyable to use. I believe in writing
              clean, maintainable code and always learning new technologies.
            </p>
            <p>
              My current focus is on full-stack development, combining Python
              backends with modern frontend frameworks. I enjoy the entire process
              from designing APIs to crafting user interfaces.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>

          <div className="grid gap-8">
            <SkillCategory
              title="Languages"
              skills={[
                { name: "Python", level: "advanced" },
                { name: "JavaScript/TypeScript", level: "intermediate" },
                { name: "SQL", level: "intermediate" },
                { name: "HTML/CSS", level: "intermediate" },
              ]}
            />

            <SkillCategory
              title="Backend Development"
              skills={[
                { name: "FastAPI", level: "advanced" },
                { name: "REST API Design", level: "advanced" },
                { name: "PostgreSQL", level: "intermediate" },
                { name: "SQLite", level: "advanced" },
                { name: "OAuth2 / Authentication", level: "intermediate" },
              ]}
            />

            <SkillCategory
              title="Frontend Development"
              skills={[
                { name: "React", level: "intermediate" },
                { name: "Next.js", level: "beginner" },
                { name: "Tailwind CSS", level: "intermediate" },
                { name: "Plotly / Dash", level: "advanced" },
              ]}
            />

            <SkillCategory
              title="Tools & Practices"
              skills={[
                { name: "Git / GitHub", level: "advanced" },
                { name: "VS Code", level: "advanced" },
                { name: "Linux / CLI", level: "intermediate" },
                { name: "Docker", level: "beginner" },
              ]}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Outside of coding, I enjoy watching anime (hence the analytics project!),
              exploring new technologies, and continuously learning. I believe that
              the best developers are those who stay curious and never stop improving.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              I'm always open to discussing new projects, opportunities, or just
              chatting about technology. Feel free to reach out through any of the
              links in the footer.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  const levelColors = {
    beginner: "bg-blue-500",
    intermediate: "bg-yellow-500",
    advanced: "bg-green-500",
  };

  const levelWidths = {
    beginner: "w-1/3",
    intermediate: "w-2/3",
    advanced: "w-full",
  };

  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span className="text-foreground/50 capitalize">{skill.level}</span>
            </div>
            <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${levelColors[skill.level]} ${levelWidths[skill.level]}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
