import { Braces, Cloud, Database, GitBranch, Server, TerminalSquare } from "lucide-react";

const skills = [
  { icon: Database, title: "Data engineering", description: "Profiling and transforming data with transparent validation rules.", tools: ["Python", "SQL", "PySpark", "Pandas", "ETL"] },
  { icon: Cloud, title: "Cloud foundations", description: "Cloud concepts applied through AWS Academy learning and deployment practice.", tools: ["S3", "RDS", "IAM", "Databricks", "Supabase"] },
  { icon: Server, title: "Systems", description: "Academic work in sockets, distributed coordination and simulation.", tools: ["Java", "C", "UDP", "GridSim", "Linux"] },
  { icon: Braces, title: "Applications", description: "Interfaces and tools used to demonstrate and communicate technical work.", tools: ["TypeScript", "React", "Next.js", "React Native"] },
  { icon: GitBranch, title: "Engineering practice", description: "Version control, documentation and continuous verification.", tools: ["Git", "GitHub Actions", "Testing", "README"] },
  { icon: TerminalSquare, title: "Database & APIs", description: "Structured storage and integration foundations for practical projects.", tools: ["PostgreSQL", "Oracle DB", "SQLite", "REST", "Firebase"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">CAPABILITIES</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">A focused toolkit for data and software systems.</h2>
          <p className="mt-4 leading-7 text-text-secondary">Tools are grouped by the type of problem they support rather than presented as an unstructured technology list.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, description, tools }) => (
            <article key={title} className="rounded-2xl border border-border bg-muted/45 p-6 transition-colors hover:border-primary/50">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => <span key={tool} className="rounded-md border border-border bg-background px-2 py-1 text-xs text-text-secondary">{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
