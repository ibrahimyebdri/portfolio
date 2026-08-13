# Portfolio d’Ibrahim Yebdri

Portfolio personnel développé avec **Next.js**, **React**, **TypeScript** et **Tailwind CSS**. Le site présente le profil, les compétences, l’expérience, les projets et les moyens de contact dans une interface responsive.

## Contenu du site

La page d’accueil est organisée autour de six sections : introduction, présentation, compétences, projets, expérience et contact. Les composants sont séparés afin de faciliter l’évolution du contenu et la maintenance de l’interface.

Les ressources visuelles du portfolio sont regroupées dans `public/`, notamment les aperçus de projets, l’avatar et les icônes utilisées par l’interface.

## Technologies

| Domaine | Technologies |
| --- | --- |
| Framework | Next.js 15 avec App Router |
| Interface | React 19, TypeScript, Tailwind CSS |
| Icônes et effets | Lucide React, React Icons, AOS |
| Outillage | ESLint, PostCSS, npm |
| Déploiement recommandé | Vercel ou toute plateforme compatible avec Next.js |

## Prérequis

Utilisez une version récente de Node.js et npm. Les dépendances sont verrouillées dans `package-lock.json` afin de rendre les installations reproductibles.

## Installation et développement

```bash
git clone https://github.com/ibrahimyebdri/portfolio.git
cd portfolio
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Commandes disponibles

```bash
npm run dev    # Serveur de développement avec Turbopack
npm run build  # Compilation de production
npm run start  # Démarrage de la version compilée
npm run lint   # Vérification ESLint configurée par le projet
```

## Organisation du projet

| Chemin | Responsabilité |
| --- | --- |
| `app/` | Layout global, page principale, styles et métadonnées Next.js. |
| `components/` | Sections réutilisables du portfolio. |
| `public/` | Images, icônes et ressources statiques. |
| `next.config.ts` | Configuration Next.js. |
| `eslint.config.mjs` | Règles de qualité JavaScript et TypeScript. |

## Déploiement

Après validation locale, construisez le projet avec `npm run build`. Le projet peut ensuite être déployé sur Vercel ou sur une plateforme prenant en charge les applications Next.js.

## Contribution

Pour proposer une amélioration, créez une branche dédiée, vérifiez la version mobile et desktop, lancez les commandes de qualité, puis ouvrez une pull request décrivant clairement le changement.

## Licence

Aucune licence open source n’est actuellement déclarée dans le dépôt. Les conditions de réutilisation doivent être précisées par le propriétaire du projet.
