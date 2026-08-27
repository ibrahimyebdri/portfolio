"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    category: "Étude de cas principale",
    title: "Data Quality Observatory",
    description: "Profilage de fichiers CSV dans le navigateur, contrôles de qualité déterministes, rapports locaux et export JSON.",
    technologies: ["TypeScript", "Qualité des données", "Tests"],
    repository: "https://github.com/ibrahimyebdri/data-quality-observatory",
    demo: "https://ibrahimyebdri.github.io/data-quality-observatory/",
  },
  {
    category: "Pipeline de données",
    title: "ETL Global Banks Pipeline",
    description: "Pipeline Python qui extrait, transforme et charge des données bancaires vers des sorties CSV et SQLite.",
    technologies: ["Python", "ETL", "SQLite"],
    repository: "https://github.com/ibrahimyebdri/etl-global-banks-pipeline",
  },
  {
    category: "Ingénierie produit",
    title: "FiKhatri",
    description: "Marketplace pour cuisiniers à domicile, avec un Evidence Ledger transparent utilisant SHA-256 pour assurer la traçabilité des enregistrements système.",
    technologies: ["TypeScript", "Marketplace", "Evidence Ledger"],
    repository: "https://github.com/ibrahimyebdri/fikhatri-web",
    demo: "https://fikhatri-web.vercel.app",
  },
  {
    category: "Projet de fin d’études",
    title: "TripDzAir",
    description: "Plateforme de découverte et de réservation touristique en Algérie, développée avec Next.js et Supabase pour le projet de fin d’études (17,5/20).",
    technologies: ["Next.js", "PostgreSQL", "Supabase"],
    repository: "https://github.com/ibrahimyebdri/PFEL3",
    demo: "https://tripdzair.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Projets sélectionnés</p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Des projets qui rendent le parcours <span className="text-primary">concret</span>.</h2>
            <p className="mt-4 text-text-secondary">Ces projets illustrent des réalisations en logiciel, web, systèmes d&apos;information, bases de données et data. Chaque carte renvoie vers son dépôt public.</p>
          </div>
          <a href="https://github.com/ibrahimyebdri" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary">
            Voir tous les dépôts <FaGithub aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute right-5 top-4 text-5xl font-bold leading-none text-primary/10" aria-hidden="true">0{index + 1}</div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{project.category}</p>
              <h3 className="mt-3 pr-10 text-xl font-bold text-text-primary">{project.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-relaxed text-text-secondary">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <span key={technology} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-text-secondary">{technology}</span>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-text-primary transition-colors hover:text-primary"><FaGithub /> Dépôt</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-text-primary transition-colors hover:text-primary"><FaExternalLinkAlt className="h-3.5 w-3.5" /> Démo en ligne</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
