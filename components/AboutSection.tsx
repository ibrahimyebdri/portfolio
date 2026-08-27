"use client";

const profileFacts = [
  { label: "Formation actuelle", value: "Master 2 · Systèmes d’information et données" },
  { label: "Parcours académique", value: "2e / 122 en Master 1 · 4e / 184 en Licence" },
  { label: "Localisation", value: "Oran, Algérie · mobilité internationale" },
  { label: "Orientation", value: "Data Engineering · Cloud · systèmes fiables" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
      <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Profil</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Un profil étudiant construit autour de <span className="text-primary">preuves concrètes</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">Des projets, des résultats académiques et des acquis vérifiables — sans intitulés de postes exagérés.</p>
        </div>

        <div className="relative rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">Fondamentaux en Data Engineering et Cloud</h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
                <p>Je développe mes compétences en Data Engineering et Cloud à travers des dépôts concrets : un observatoire de qualité des données dans le navigateur, un pipeline ETL Python et des projets académiques en systèmes d&apos;information.</p>
                <p>Mon parcours académique comprend la <strong className="font-semibold text-primary">2e place en Master 1</strong> et la <strong className="font-semibold text-primary">4e place de la promotion de Licence</strong>. Je privilégie des flux de données reproductibles, une validation transparente et des pratiques logicielles robustes.</p>
              </div>
              <div className="mt-7 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h4 className="font-semibold text-text-primary">Ma méthode de travail</h4>
                <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                  <li><span className="mr-2 text-primary">✓</span>Rendre explicites les flux de données et les règles de qualité.</li>
                  <li><span className="mr-2 text-primary">✓</span>Documenter les décisions pour faciliter la lecture du système.</li>
                  <li><span className="mr-2 text-primary">✓</span>Transformer les acquis académiques en preuves par les projets.</li>
                </ul>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-background/70 p-5 sm:p-6">
              <h4 className="text-lg font-semibold text-text-primary">En bref</h4>
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
