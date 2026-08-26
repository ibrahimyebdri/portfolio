import { Award, BookOpenCheck, MapPin, Target } from "lucide-react";

const facts = [
  { icon: BookOpenCheck, label: "Current degree", value: "Master 2 · Information Systems and Data" },
  { icon: Award, label: "Academic record", value: "1st / 122 in Master 1 · 4th / 184 in Licence" },
  { icon: MapPin, label: "Location", value: "Oran, Algeria · international mobility" },
  { icon: Target, label: "Target", value: "Data Engineering · Cloud · reliable systems" },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-border/70 bg-muted/35 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">PROFILE</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">A student profile built around evidence, not inflated titles.</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-text-secondary">
            I am developing my data engineering and cloud foundation through hands-on repositories: a browser-based data-quality observatory, a Python ETL pipeline and academic information-system projects. My academic record includes first place in Master 1 and fourth place in the Licence cohort. My current focus is on reproducible data workflows and robust software practice.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-border bg-background/70 p-4">
                <Icon className="h-4 w-4 text-primary" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
                <p className="mt-1 text-sm font-medium text-text-primary">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
