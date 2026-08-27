"use client";

import { BsCloud, BsDatabase, BsDiagram3, BsGear, BsTerminal } from "react-icons/bs";
import { FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDatabricks, SiPandas, SiPostgresql, SiTypescript } from "react-icons/si";

const skills = [
  { icon: <BsDatabase className="h-8 w-8 text-primary" />, title: "Data Engineering", description: "Profiling, transforming and loading data through explicit, reviewable steps.", technologies: ["Python", "PySpark", "Pandas", "ETL", "SQLite"] },
  { icon: <BsCloud className="h-8 w-8 text-primary" />, title: "Cloud foundations", description: "Cloud concepts applied through AWS Academy learning and deployment practice.", technologies: ["AWS S3", "RDS", "IAM", "Databricks", "Supabase"] },
  { icon: <BsDiagram3 className="h-8 w-8 text-primary" />, title: "Systems", description: "Academic work in distributed coordination, simulation and networked applications.", technologies: ["Java", "C", "UDP", "GridSim", "Linux"] },
  { icon: <BsTerminal className="h-8 w-8 text-primary" />, title: "Databases & APIs", description: "Structured storage and integration foundations for practical systems.", technologies: ["PostgreSQL", "Oracle DB", "REST", "Firebase", "SQL"] },
  { icon: <BsGear className="h-8 w-8 text-primary" />, title: "Applications", description: "Interfaces and tools used to demonstrate and communicate technical work.", technologies: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"] },
  { icon: <FaGitAlt className="h-8 w-8 text-primary" />, title: "Engineering practice", description: "Version control, documentation and continuous verification for readable repositories.", technologies: ["Git", "GitHub Actions", "Testing", "README", "CI"] },
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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Capabilities</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">A focused toolkit for <span className="text-primary">data and software systems</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">Tools are grouped by the problem they support, rather than shown as an unstructured technology list.</p>
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
