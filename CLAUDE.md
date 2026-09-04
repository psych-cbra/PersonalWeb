# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio single-page site. React 19 + Vite 8 + Tailwind CSS v4, plain JavaScript (JSX, no TypeScript). Early scaffold stage: most section components are still empty placeholders.

`README.md` is the unmodified `create-vite` React template readme — it is not a description of this project, ignore it as a source of truth.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the built dist/
npm run lint     # eslint over the repo
```

There is no test framework configured — no test runner, no test files. Don't invent test commands; if tests are needed, ask before adding a runner.

`npm run build` passes. `npm run lint` reports 1 pre-existing error (see below) — baseline before assuming you caused it.

## Architecture

- `src/main.jsx` → `src/App.jsx` → a flat, ordered stack of section components under `src/Sections/`. `App.jsx` is the whole page structure; there is no router. Adding a page section means creating `src/Sections/<Name>.jsx` and inserting it into the `<main>` stack in the intended scroll order.
- Sections export **named** components (`export const Hero = () => …`), not default exports. Match that convention.
- `src/layout/` holds chrome that sits outside the section stack (currently only `Navbar.jsx`).
- `@` is aliased to `src/` (`vite.config.js`). Existing imports mix `@/Sections/...` and `./Sections/...`; prefer the `@` alias for new code.

## Styling

Tailwind v4 via the `@tailwindcss/vite` plugin — **no `tailwind.config.js` and no PostCSS config**; all configuration is CSS-first in `src/index.css`.

- The design tokens live in the `@theme` block in `src/index.css` (dark palette: `background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `border`, `highlight`, `surface`, plus `--radius`). These become utilities automatically — `bg-background`, `text-primary`, `border-border`, etc. Add or change colors there, never in a JS config.
- `.glass` (translucent surface + backdrop blur) is a custom component class in the same file; reuse it rather than re-deriving the effect inline.
- Fonts assumed: Inter for body, Merriweather behind `.font-serif` — neither is currently loaded by `index.html`, so they fall back to system fonts until a font link/import is added.

## Assets

- `public/icons.svg` is an SVG sprite of `<symbol>`s (`bluesky-icon`, `discord-icon`, `documentation-icon`, `github-icon`, `social-icon`, `x-icon`). Reference them with `<svg><use href="/icons.svg#github-icon" /></svg>` rather than inlining new copies.
- `src/assets/` holds imported images (e.g. `hero.png`); `public/` holds files served at a stable URL.

## Known lint wart

`vite.config.js:11` uses `__dirname`, which lints as `no-undef` in this ESM package. It works at runtime because Vite pre-bundles the config, so this is lint-only — switch to `import.meta.dirname` if you want a clean run.
