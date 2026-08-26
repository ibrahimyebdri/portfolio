# Ibrahim Yebdri — Portfolio

> Portfolio for **Data Engineering, Cloud and reliable software systems** opportunities.

This is the personal portfolio of Ibrahim Yebdri, a Master&apos;s student in Information Systems and Data. It presents a fact-based academic profile, selected repositories and a one-page professional CV in English.

## Public portfolio and CV

| Resource | Link |
| --- | --- |
| Portfolio | `https://ibrahimyebdri.github.io/portfolio/` |
| Professional CV | `https://ibrahimyebdri.github.io/portfolio/documents/Ibrahim-Yebdri-CV.pdf` |
| GitHub profile | `https://github.com/ibrahimyebdri` |

The site is exported statically and deployed by GitHub Actions to GitHub Pages. The contact form is the only runtime network interaction.

## Technical stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 15 with App Router and static export |
| UI | React 19, TypeScript and Tailwind CSS 4 |
| Icons | Lucide React |
| Quality | ESLint, Node test runner and TypeScript checks |
| Deployment | GitHub Actions and GitHub Pages |

## Local development

```bash
git clone https://github.com/ibrahimyebdri/portfolio.git
cd portfolio
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm test
npx tsc --noEmit
NODE_ENV=production GITHUB_ACTIONS=true npm run build
```

The final command creates the static `out/` directory used by the GitHub Pages workflow. The automated tests verify the CV asset, its visible navigation entry point and the repository links shown in the selected-projects section.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js layout, page and global styling |
| `components/` | Portfolio sections and interactions |
| `public/documents/` | Public one-page CV PDF |
| `cv/` | Source project for the CV PDF |
| `tests/` | Regression checks for recruiter-facing content |
| `.github/workflows/pages.yml` | Static build and GitHub Pages deployment |

## Licence

All rights reserved. The code and personal portfolio content may not be reused without the author&apos;s permission.
