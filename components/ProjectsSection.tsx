import { ArrowUpRight, Github, LineChart, Network, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Data Quality Observatory",
    summary: "Browser-based CSV profiling with deterministic quality checks, local reports and JSON export.",
    tags: ["TypeScript", "Data quality", "Testing"],
    repository: "https://github.com/ibrahimyebdri/data-quality-observatory",
    live: "https://ibrahimyebdri.github.io/data-quality-observatory/",
    icon: ShieldCheck,
    label: "Featured case study",
  },
  {
    title: "ETL Global Banks Pipeline",
    summary: "Python pipeline that extracts, transforms and loads banking data into CSV and SQLite outputs.",
    tags: ["Python", "ETL", "SQLite"],
    repository: "https://github.com/ibrahimyebdri/etl-global-banks-pipeline",
    icon: LineChart,
    label: "Data pipeline",
  },
  {
    title: "Ticleio — School Management",
    summary: "Academic information-system project applying Python and SQL to structured school-management workflows.",
    tags: ["Python", "SQL", "Information systems"],
    repository: "https://github.com/ibrahimyebdri/ticleio",
    icon: Network,
    label: "Systems foundations",
  },
  {
    title: "TripDzAir",
    summary: "Final-year platform for tourism discovery and booking in Algeria, built with Next.js and Supabase.",
    tags: ["Next.js", "PostgreSQL", "Supabase"],
    repository: "https://github.com/ibrahimyebdri/PFEL3",
    live: "https://tripdzair.vercel.app",
    icon: ArrowUpRight,
    label: "Academic project",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border/70 bg-muted/35 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary">SELECTED WORK</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Projects that make the direction concrete.</h2>
          </div>
          <a href="https://github.com/ibrahimyebdri" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#5dd6c7]">View all repositories <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map(({ title, summary, tags, repository, live, icon: Icon, label }) => (
            <article key={title} className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-black/15">
              <div className="flex items-start justify-between gap-6">
                <div className="rounded-xl bg-primary/10 p-3"><Icon className="h-5 w-5 text-primary" /></div>
                <span className="text-xs font-medium text-text-secondary">{label}</span>
              </div>
              <h3 className="mt-7 text-xl font-semibold text-text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-text-secondary">{tag}</span>)}</div>
              <div className="mt-7 flex items-center gap-4 text-sm font-semibold">
                <a href={repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-text-primary hover:text-primary"><Github className="h-4 w-4" /> Repository</a>
                {live && <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-[#5dd6c7]">Live demo <ArrowUpRight className="h-4 w-4" /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
