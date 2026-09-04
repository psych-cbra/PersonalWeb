# Personal Portfolio

A single-page personal portfolio site — a dark, glassmorphic layout presenting my background, projects, experience, hobbies, and contact details as one continuous scroll.

The page is a flat stack of sections rendered by `App.jsx`, with a fixed navbar overlaying it. There is no router: navigation is anchor links that smooth-scroll to each section.

## Tech Stack

| Technology | Version | Role |
| --- | --- | --- |
| [React](https://react.dev) | 19 | UI components and state |
| [Vite](https://vite.dev) | 8 | Dev server with HMR, production bundler |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling, via the `@tailwindcss/vite` plugin |
| [lucide-react](https://lucide.dev) | 1.x | Icon set |
| [ESLint](https://eslint.org) | 10 | Linting |

Written in plain JavaScript (JSX) — no TypeScript.

Tailwind v4 is configured **CSS-first**: there is no `tailwind.config.js`. The design tokens (colors, radius) live in the `@theme` block of `src/index.css` and become utility classes automatically, alongside the custom `.glass` / `.glass-strong` component classes.

## Project Structure

```
src/
├── App.jsx            # the page: an ordered stack of sections
├── main.jsx           # React entry point
├── index.css          # Tailwind import, @theme tokens, base + component layers
├── layout/            # chrome outside the section stack (Navbar)
├── Components/        # reusable UI primitives (Button)
├── Sections/          # one component per page section
└── assets/            # imported images
```

`@` is aliased to `src/`, so imports read `@/Components/Button`.

## Getting Started

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build to dist/
npm run preview  # serve the built output locally
npm run lint     # eslint over the repo
```

## Deployment

The site will be deployed to [**Vercel**](https://vercel.com), which suits this project well:

- **Zero configuration** — Vercel detects Vite automatically, running `npm run build` and serving `dist/`.
- **Git-based deploys** — every push to the main branch ships to production; pull requests get their own preview URL to check changes before merging.
- **Free tier and a global CDN** — enough for a static portfolio, with fast loads worldwide and HTTPS handled automatically.
- **Custom domain** — a personal domain can be attached once the site is live.

Planned steps: push the repository to GitHub, import it into Vercel, confirm the detected build settings, and deploy.
