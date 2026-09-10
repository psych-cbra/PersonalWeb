# Personal Portfolio

A single-page personal portfolio site.

A dark, glassmorphic layout presenting my background, upcoming projects, experience, and a way to get in touch, as one continuous scroll.

The page is a flat stack of sections rendered by `App.jsx`, with a fixed navbar overlaying it and a footer beneath it. There is no router: navigation is anchor links that smooth-scroll to each section.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Intro, tagline, CTA buttons, and a marquee of technologies |
| About | Background summary and a grid of highlights |
| Projects | Placeholder "coming soon" card — real project write-ups land here later |
| Experience | A timeline of roles, each with its own accent color |
| Contact | A form that emails me directly (via EmailJS), plus contact info and availability status |

## Tech Stack

| Technology | Version | Role |
| --- | --- | --- |
| [React](https://react.dev) | 19 | UI components and state |
| [Vite](https://vite.dev) | 8 | Dev server with HMR, production bundler |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling, via the `@tailwindcss/vite` plugin |
| [lucide-react](https://lucide.dev) | 1.x | Icon set |
| [react-icons](https://react-icons.github.io/react-icons) | 5.x | Brand icons (GitHub, LinkedIn, X) not covered by lucide |
| [EmailJS](https://www.emailjs.com) | 4.x (`@emailjs/browser`) | Sends the contact form without a backend |
| [ESLint](https://eslint.org) | 10 | Linting |

Written in plain JavaScript (JSX) — no TypeScript.

Tailwind v4 is configured **CSS-first**: there is no `tailwind.config.js`. The design tokens (colors, radius) live in the `@theme` block of `src/index.css` and become utility classes automatically, alongside custom component classes like `.glass` / `.glass-strong` and the ambient `.particle-overlay` / `.particle-dot` background effect reused across sections.

## Project Structure

```
src/
├── App.jsx            # the page: an ordered stack of sections
├── main.jsx           # React entry point
├── index.css          # Tailwind import, @theme tokens, base + component layers
├── layout/             # chrome outside the section stack (Navbar, Footer)
├── Components/         # reusable UI primitives (Button, AnimatedBorderButton)
├── Sections/            # one component per page section
└── assets/              # imported images

public/
└── Pictures/            # images served at a stable URL (profile photo, backgrounds)
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

## Environment Variables

The contact form sends email via [EmailJS](https://www.emailjs.com) and needs a `.env` file at the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from an EmailJS account (Email Services and Email Templates). The template must define `from_name`, `from_email`, `subject`, and `message` variables to match what the form sends. Without these variables set, the form shows a configuration error instead of submitting.

`.env` is git-ignored and should never be committed.

## Deployment

The site will be deployed to [**Vercel**](https://vercel.com), which suits this project well:

- **Zero configuration** — Vercel detects Vite automatically, running `npm run build` and serving `dist/`.
- **Git-based deploys** — every push to the main branch ships to production; pull requests get their own preview URL to check changes before merging.
- **Free tier and a global CDN** — enough for a static portfolio, with fast loads worldwide and HTTPS handled automatically.
- **Custom domain** — a personal domain can be attached once the site is live.

Planned steps: push the repository to GitHub, import it into Vercel, add the EmailJS environment variables in the Vercel project settings, confirm the detected build settings, and deploy.
