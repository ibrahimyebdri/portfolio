import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("the public CV asset is available", () => {
  assert.equal(existsSync(new URL("../public/documents/Ibrahim-Yebdri-CV.pdf", import.meta.url)), true);
});

test("recruiter-facing navigation exposes a CV action and no placeholder links", () => {
  const navigation = read("components/Navbar.tsx");
  assert.match(navigation, /Ibrahim-Yebdri-CV\.pdf/);
  assert.doesNotMatch(navigation, /votre-username|votre-profile|votre@email/i);
});

test("portfolio project cards point to verified public repositories", () => {
  const projects = read("components/ProjectsSection.tsx");
  for (const repository of ["data-quality-observatory", "etl-global-banks-pipeline", "ticleio", "PFEL3"]) {
    assert.match(projects, new RegExp(`github\\.com/ibrahimyebdri/${repository}`));
  }
});
