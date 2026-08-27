import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("the portfolio presents the current Data Engineering and Cloud profile", () => {
  const hero = read("../components/HeroSection.tsx");
  const about = read("../components/AboutSection.tsx");
  const projects = read("../components/ProjectsSection.tsx");
  assert.match(hero, /Master 2 student in Information Systems and Data/);
  assert.match(about, /1st \/ 122 in Master 1/);
  assert.match(projects, /Data Quality Observatory/);
  assert.match(projects, /ETL Global Banks Pipeline/);
  assert.match(projects, /GridSim Distributed Sorting/);
  assert.doesNotMatch(projects, /Ticleio/);
});

test("the green teal theme offers explicit light and dark tokens", () => {
  const styles = read("../app/globals.css");
  assert.match(styles, /:root/);
  assert.match(styles, /\.dark/);
  assert.match(styles, /--primary: #08785d/);
  assert.match(styles, /--primary: #35d3a2/);
});

test("the header includes a persistent accessible sun moon theme switch", () => {
  const navigation = read("../components/Navbar.tsx");
  const toggle = read("../components/ThemeToggle.tsx");
  assert.match(navigation, /ThemeToggle/);
  assert.match(toggle, /Sun/);
  assert.match(toggle, /Moon/);
  assert.match(toggle, /portfolio-theme/);
  assert.match(toggle, /aria-label/);
});

test("the public CV is available through the professional contact section", () => {
  const contact = read("../components/ContactSection.tsx");
  assert.match(contact, /Ibrahim-Yebdri-CV\.pdf/);
});

test("portrait decorations stay outside the portrait on mobile", () => {
  const hero = read("../components/HeroSection.tsx");
  assert.match(hero, /top-12 -right-12/);
  assert.match(hero, /top-1\/2 -left-12/);
  assert.match(hero, /-bottom-12 left-1\/2 -translate-x-1\/2/);
  assert.match(hero, /sm:top-16 sm:right-0/);
});
