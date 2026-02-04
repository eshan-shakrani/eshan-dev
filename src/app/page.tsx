import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hi, I'm Eshan
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            A data scientist who turns raw data into insights and builds the
            tools to deliver them. Working toward understanding the full
            lifecycle of data products — from pipelines to dashboards to APIs.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-foreground/20 font-medium rounded-lg hover:bg-foreground/5 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold mb-8">Featured Project</h2>

        <div className="group relative rounded-xl border border-foreground/10 p-6 hover:border-foreground/20 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Coming Up Next</h3>
              <p className="text-foreground/70 max-w-lg">
                An anime analytics platform that analyzes MyAnimeList data to
                provide insights, visualizations, and personalized recommendations
                about viewing habits.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "SQL", "Pandas", "Plotly Dash"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-foreground/5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors shrink-0"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 border-t border-foreground/10">
        <h2 className="text-2xl font-semibold mb-8">What I Work With</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-medium">Languages</h3>
            <p className="text-foreground/70">Python, SQL, R, JavaScript</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Data & Analytics</h3>
            <p className="text-foreground/70">Pandas, SQLite, PostgreSQL, Data Modeling</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Dashboarding</h3>
            <p className="text-foreground/70">Tableau, Looker, Power BI, Plotly Dash</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Tools</h3>
            <p className="text-foreground/70">Git, VS Code, Linux, Docker</p>
          </div>
        </div>
      </section>
    </div>
  );
}
