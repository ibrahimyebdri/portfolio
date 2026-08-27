"use client";

const profileFacts = [
  { label: "Current degree", value: "Master 2 · Information Systems and Data" },
  { label: "Academic record", value: "2nd / 122 in Master 1 · 4th / 184 in Licence" },
  { label: "Location", value: "Oran, Algeria · international mobility" },
  { label: "Direction", value: "Data Engineering · Cloud · reliable systems" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
      <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Profile</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">A student profile built around <span className="text-primary">evidence</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">Projects, academic results and learning milestones—not inflated job titles.</p>
        </div>

        <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">Data Engineering &amp; Cloud foundations</h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                <p>I am developing my data engineering and cloud foundation through hands-on repositories: a browser-based data-quality observatory, a Python ETL pipeline and academic information-system projects.</p>
                <p>My academic record includes <strong className="font-semibold text-primary">second place in Master 1</strong> and <strong className="font-semibold text-primary">fourth place in the Licence cohort</strong>. I focus on reproducible data workflows, transparent validation and robust software practice.</p>
              </div>
              <div className="mt-7 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h4 className="font-semibold text-text-primary">How I work</h4>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li><span className="mr-2 text-primary">✓</span>Make the data flow and quality rules explicit.</li>
                  <li><span className="mr-2 text-primary">✓</span>Document decisions so a reviewer can follow the system.</li>
                  <li><span className="mr-2 text-primary">✓</span>Use projects to turn academic learning into evidence.</li>
                </ul>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-background/70 p-5 sm:p-6">
              <h4 className="text-lg font-semibold text-text-primary">At a glance</h4>
              <dl className="mt-5 space-y-5">
                {profileFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-bold uppercase tracking-wider text-primary">{fact.label}</dt>
                    <dd className="mt-1 text-sm font-medium leading-relaxed text-text-primary">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
