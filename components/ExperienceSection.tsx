"use client";

import { FaGraduationCap, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const education = [
  {
    degree: "Master 2 · Systèmes d’information et données",
    institution: "USTO-MB · Oran, Algérie",
    period: "2026 — aujourd’hui",
    details: "Classé 2e sur 122 étudiants en Master 1 ; orientation actuelle : systèmes d’information et données, Cloud et systèmes en réseau.",
  },
  {
    degree: "Licence · Systèmes d’information et génie logiciel",
    institution: "USTO-MB · Oran, Algérie",
    period: "2022 — 2025",
    details: "Classé 4e sur 184 étudiants ; le projet de fin d’études TripDzAir a reçu la note de 17,5/20.",
  },
];

const engagement = [
  { title: "AIESEC Oran", subtitle: "Responsabilités liées à l’expérience client et à l’organisation d’événements", period: "Engagement étudiant" },
  { title: "GDG on Campus USTO-MB", subtitle: "Membre de l’équipe cœur et contributeur aux événements techniques", period: "Communauté étudiante" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/45 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Formation &amp; engagement</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Fondation académique et <span className="text-primary">engagement communautaire</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">Les projets et engagements étudiants sont présentés avec transparence, sans les faire passer pour une expérience professionnelle non vérifiée.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-text-primary"><FaGraduationCap className="text-primary" /> Formation</h3>
            <div className="space-y-6 border-l-2 border-primary/30 pl-6">
              {education.map((item) => (
                <article key={item.degree} className="relative rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="absolute -left-[35px] top-6 h-4 w-4 rounded-full border-4 border-muted bg-primary" />
                  <h4 className="text-lg font-bold text-text-primary">{item.degree}</h4>
                  <p className="mt-1 font-medium text-primary">{item.institution}</p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary"><BsCalendar3 /> {item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.details}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-text-primary"><FaUsers className="text-primary" /> Engagement</h3>
            <div className="space-y-6 border-l-2 border-primary/30 pl-6">
              {engagement.map((item) => (
                <article key={item.title} className="relative rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="absolute -left-[35px] top-6 h-4 w-4 rounded-full border-4 border-muted bg-primary" />
                  <h4 className="text-lg font-bold text-text-primary">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.subtitle}</p>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary"><FaMapMarkerAlt /> {item.period} · Oran, Algérie</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
