import { GraduationCap, Network, UsersRound } from "lucide-react";

const academicEntries = [
  { period: "2026 — Present", title: "Master 2 · Information Systems and Data", subtitle: "USTO-MB · Oran, Algeria", detail: "Ranked 1st out of 122 students in Master 1; focus on Data Engineering, Data Science, Cloud and networked systems." },
  { period: "2022 — 2025", title: "Licence · Information Systems and Software Engineering", subtitle: "USTO-MB · Oran, Algeria", detail: "Ranked 4th out of 184 students; final-year project: TripDzAir (17.5/20)." },
];

const engagementEntries = [
  { title: "AIESEC Oran", detail: "Customer Experience Manager and event-organization responsibilities.", icon: UsersRound },
  { title: "GDG on Campus USTO-MB", detail: "Core-team member and technical-event contributor.", icon: Network },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">EDUCATION</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary">Academic foundation.</h2>
          <div className="mt-8 border-l border-primary/40 pl-6">
            {academicEntries.map((entry) => (
              <article key={entry.title} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                <p className="text-xs font-semibold text-primary">{entry.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{entry.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{entry.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-muted/45 p-7 sm:p-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-primary">ENGAGEMENT</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary">Learning in teams and communities.</h2>
          <div className="mt-8 space-y-5">
            {engagementEntries.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="flex gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><h3 className="font-semibold text-text-primary">{title}</h3><p className="mt-1 text-sm leading-6 text-text-secondary">{detail}</p></div>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm leading-6 text-text-secondary">I present student projects as projects—not as unverified job titles—so recruiters can assess the work directly in the repositories.</p>
        </div>
      </div>
    </section>
  );
}
