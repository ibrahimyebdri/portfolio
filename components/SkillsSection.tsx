"use client";

import { BsCloud, BsDatabase, BsDiagram3, BsGear, BsTerminal } from "react-icons/bs";
import { FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDatabricks, SiPandas, SiPostgresql, SiTypescript } from "react-icons/si";

const skills = [
  { icon: <BsDatabase className="h-8 w-8 text-primary" />, title: "Data Engineering", description: "Profilage, transformation et chargement de données au moyen d’étapes explicites et vérifiables.", technologies: ["Python", "PySpark", "Pandas", "ETL", "SQLite"] },
  { icon: <BsCloud className="h-8 w-8 text-primary" />, title: "Fondamentaux Cloud", description: "Concepts Cloud appliqués à travers l’apprentissage AWS Academy et la pratique du déploiement.", technologies: ["AWS S3", "RDS", "IAM", "Databricks", "Supabase"] },
  { icon: <BsDiagram3 className="h-8 w-8 text-primary" />, title: "Systèmes", description: "Travaux académiques en coordination distribuée, simulation et applications réseau.", technologies: ["Java", "C", "UDP", "GridSim", "Linux"] },
  { icon: <BsTerminal className="h-8 w-8 text-primary" />, title: "Bases de données & API", description: "Fondamentaux de stockage structuré et d’intégration pour des systèmes concrets.", technologies: ["PostgreSQL", "Oracle DB", "REST", "Firebase", "SQL"] },
  { icon: <BsGear className="h-8 w-8 text-primary" />, title: "Applications", description: "Interfaces et outils utilisés pour démontrer et communiquer un travail technique.", technologies: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"] },
  { icon: <FaGitAlt className="h-8 w-8 text-primary" />, title: "Pratiques d’ingénierie", description: "Gestion de versions, documentation et vérification continue pour des dépôts lisibles.", technologies: ["Git", "GitHub Actions", "Tests", "README", "CI"] },
];

const iconFor = (technology: string) => {
  const commonClass = "inline-block mr-1";
  if (technology === "Python") return <FaPython className={commonClass} />;
  if (technology === "PySpark") return <BsDatabase className={commonClass} />;
  if (technology === "Pandas") return <SiPandas className={commonClass} />;
  if (technology.startsWith("AWS")) return <SiAmazonwebservices className={commonClass} />;
  if (technology === "Databricks") return <SiDatabricks className={commonClass} />;
  if (technology === "PostgreSQL") return <SiPostgresql className={commonClass} />;
  if (technology === "TypeScript") return <SiTypescript className={commonClass} />;
  if (technology === "Java") return <FaJava className={commonClass} />;
  return null;
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/45 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Compétences</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Un socle technique polyvalent pour les <span className="text-primary">applications et systèmes informatiques</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">Les technologies sont regroupées selon les domaines qu&apos;elles soutiennent : logiciel, web/mobile, systèmes, bases de données, Cloud et data.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary">{skill.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-text-secondary">{skill.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span key={technology} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{iconFor(technology)}{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
