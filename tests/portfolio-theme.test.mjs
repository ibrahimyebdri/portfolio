import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("le portfolio présente un profil informatique généraliste fondé sur des preuves", () => {
  const hero = read("../components/HeroSection.tsx");
  const about = read("../components/AboutSection.tsx");
  const projects = read("../components/ProjectsSection.tsx");
  const layout = read("../app/layout.tsx");
  assert.match(hero, /Étudiant en Master 2 Systèmes d/);
  assert.match(hero, /logiciel, web\/mobile, systèmes d/);
  assert.match(about, /Un socle informatique polyvalent/);
  assert.match(about, /Logiciel · Web\/mobile · Systèmes · Bases de données · Cloud · Data/);
  assert.match(projects, /logiciel, web, systèmes d/);
  assert.match(layout, /Informatique, logiciel & systèmes/);
  assert.match(about, /2e \/ 122 en Master 1/);
  assert.match(projects, /Data Quality Observatory/);
  assert.match(projects, /ETL Global Banks Pipeline/);
  assert.match(projects, /FiKhatri/);
  assert.doesNotMatch(projects, /GridSim Distributed Sorting/);
  assert.doesNotMatch(projects, /Ticleio/);
});

test("le sous-titre du hero affiche un rôle complet avant de démarrer son animation", () => {
  const hero = read("../components/HeroSection.tsx");
  assert.match(hero, /const roles = \["étudiant en informatique"/);
  assert.match(hero, /let characterIndex = roles\[roleIndex\]\.length/);
  assert.match(hero, /setTimeout\(\(\) => \{\s+removing = true;/);
  assert.match(hero, />\{roles\[0\]\}<\/span>/);
});

test("le thème vert et turquoise offre des jetons explicites pour les modes clair et sombre", () => {
  const styles = read("../app/globals.css");
  assert.match(styles, /:root/);
  assert.match(styles, /\.dark/);
  assert.match(styles, /--primary: #08785d/);
  assert.match(styles, /--primary: #35d3a2/);
});

test("l’en-tête contient un sélecteur soleil-lune accessible et persistant", () => {
  const navigation = read("../components/Navbar.tsx");
  const toggle = read("../components/ThemeToggle.tsx");
  assert.match(navigation, /ThemeToggle/);
  assert.match(toggle, /Sun/);
  assert.match(toggle, /Moon/);
  assert.match(toggle, /portfolio-theme/);
  assert.match(toggle, /aria-label/);
  assert.match(toggle, /Passer au mode clair/);
  assert.match(toggle, /Passer au mode sombre/);
});

test("le CV public en français est disponible dans la section de contact", () => {
  const contact = read("../components/ContactSection.tsx");
  assert.match(contact, /Ibrahim-Yebdri-CV\.pdf/);
  assert.match(contact, /Français · 1 page/);
});

test("les décorations du portrait restent centrées sur sa bordure sur mobile", () => {
  const hero = read("../components/HeroSection.tsx");
  assert.match(hero, /gap-16 md:grid-cols-2 md:gap-8/);
  assert.match(hero, /top-10 -right-4 block/);
  assert.match(hero, /top-1\/2 -left-4 block/);
  assert.match(hero, /-bottom-4 left-1\/2 block -translate-x-1\/2/);
  assert.doesNotMatch(hero, /Open to international opportunities/);
});
