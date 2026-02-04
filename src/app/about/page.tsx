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
              I'm a data scientist with a strong foundation in statistical analysis,
              machine learning, and turning raw data into actionable insights. I enjoy
              the challenge of extracting meaning from complex datasets and communicating
              findings through clear visualizations and dashboards.
            </p>
            <p>
              While my core strengths lie in analytics and data engineering, I'm working
              toward becoming an all-around engineer who understands the full lifecycle
              of data products — from data collection and pipeline development, through
              modeling and analysis, to building the APIs and interfaces that deliver
              insights to end users. I believe the best data professionals are those who
              can bridge the gap between analysis and production.
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
                { name: "SQL", level: "advanced" },
                { name: "R", level: "advanced" },
                { name: "JavaScript/TypeScript", level: "intermediate" },
                { name: "HTML/CSS", level: "beginner" },
              ]}
            />

            <SkillCategory
              title="Data & Databases"
              skills={[
                { name: "SQLite", level: "advanced" },
                { name: "PostgreSQL", level: "intermediate" },
                { name: "Pandas / NumPy", level: "advanced" },
                { name: "Data Modeling", level: "intermediate" },
              ]}
            />

            <SkillCategory
              title="Dashboarding & BI"
              skills={[
                { name: "Tableau", level: "intermediate" },
                { name: "Looker", level: "intermediate" },
                { name: "Power BI", level: "intermediate" },
                { name: "Plotly / Dash", level: "intermediate" },
              ]}
            />

            <SkillCategory
              title="Backend & APIs"
              skills={[
                { name: "FastAPI", level: "beginner" },
                { name: "REST API Design", level: "beginner" },
                { name: "OAuth2 / Authentication", level: "intermediate" },
              ]}
            />

            <SkillCategory
              title="Frontend"
              skills={[
                { name: "React", level: "beginner" },
                { name: "Next.js", level: "beginner" },
                { name: "Tailwind CSS", level: "beginner" },
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
              Outside of work, I enjoy watching anime (hence the analytics project!),
              exploring new technologies, and continuously learning. I'm always looking
              for opportunities to apply data skills to personal interests — whether
              that's analyzing viewing habits or building tools that scratch my own itch.
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
