import Link from "next/link";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    title: "Coming Up Next",
    description:
      "An anime analytics platform that analyzes MyAnimeList data to provide insights and recommendations.",
    longDescription:
      "A full-stack application that processes MAL XML exports, enriches data via the MAL API, and presents interactive dashboards for exploring viewing patterns. Features include sequel recommendations, genre/studio breakdowns, and a REST API for programmatic access.",
    technologies: ["Python", "FastAPI", "SQLite", "Plotly Dash", "Pandas", "Pydantic"],
    features: [
      "Parse and analyze MyAnimeList XML exports",
      "Enrich anime metadata via MAL API (OAuth2)",
      "Interactive dashboard with filtering and visualizations",
      "REST API with 22+ endpoints",
      "Sequel and recommendation engine",
      "Genre and studio analytics",
    ],
    github: "https://github.com/eshan/coming-up-next",
    live: "https://coming-up-next.up.railway.app",
    status: "in-progress",
  },
  // Add more projects here as you build them
];

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    completed: "bg-green-500/10 text-green-600 dark:text-green-400",
    "in-progress": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    planned: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  };

  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          A collection of projects I've built. Each one represents a learning
          journey and an attempt to solve a real problem, or do a deep dive 
          into an interest of mine. 
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-foreground/10 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <h2 className="text-2xl font-semibold">
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer"
                    className="hover:text-foreground/70 transition-colors">
                    {project.title}
                    </Link>
                ) : (
                  project.title
                )}
              </h2>
              <StatusBadge status={project.status} />
            </div>

            <p className="text-foreground/70 mb-6">{project.longDescription}</p>

            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-sm font-medium text-foreground/50 uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-foreground/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-medium text-foreground/50 uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground/70"
                    >
                      <span className="text-foreground/40 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-foreground/10">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    View Source
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}
