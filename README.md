# Sriram Abburi — Developer Portfolio

A production-ready, fully responsive portfolio built with React, TypeScript,
Vite, and Tailwind CSS.

## Tech Stack

React · TypeScript · Vite · Tailwind CSS · React Router · Framer Motion ·
React Helmet Async · React Hook Form · Lucide React · Axios

## Project Structure

```
src/
  assets/          Static assets bundled by Vite
  components/
    ui/            Reusable primitives (Button, Card, Badge, Container, ...)
    layout/        Navbar, Footer, MobileMenu, BackToTop, Seo
    sections/      Page sections (Hero, About, Skills, Projects, ...)
  pages/           Route-level components (Home, ProjectDetails, NotFound)
  hooks/           useTheme, useActiveSection, useScrollProgress, useGithubProfile
  services/        Axios instances + GitHub/contact API calls
  constants/       Site metadata, socials, nav items
  types/           Shared TypeScript types
  utils/           cn (classnames), scroll helpers
  data/            Content: projects.ts, skills.ts, education.ts, achievements.ts
  styles/          Tailwind entry + global CSS
  App.tsx          Router + layout shell
  main.tsx         App bootstrap
public/
  projects/        Project cover images (SVG placeholders — replace anytime)
  resume.pdf       Replace with your real resume
  robots.txt, sitemap.xml, favicon.svg
```

## Editing Content

Everything content-related lives in `src/data/` and `src/constants/site.ts` —
you generally never need to touch component code to update:

- **Projects** — `src/data/projects.ts`
- **Skills** — `src/data/skills.ts`
- **Education** — `src/data/education.ts`
- **Achievements** — `src/data/achievements.ts`
- **Name, tagline, resume path, email** — `src/constants/site.ts`
- **GitHub username used for the live stats section** — `src/constants/site.ts`
  (`GITHUB_USERNAME`)
- **Resume file** — replace `public/resume.pdf` with your actual PDF (same
  filename, or update `SITE.resumePath`)

## Installation

Requires Node.js 18+.

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite dev server (default: http://localhost:5173) with hot reload.

## Build

```bash
npm run build
```

Type-checks the project and outputs an optimized production build to `dist/`.

```bash
npm run preview
```

Serves the production build locally to sanity-check before deploying.

## Linting & Formatting

```bash
npm run lint
npm run format
```

## Deployment

The app is a static SPA and deploys cleanly to Vercel, Netlify, GitHub Pages,
or any static host:

1. Build with `npm run build`.
2. Deploy the `dist/` folder.
3. Configure the host to rewrite all routes to `index.html` (required for
   React Router's client-side routes, e.g. `/projects/:id`):
   - **Vercel**: add a `vercel.json` with a catch-all rewrite, or use the
     built-in SPA fallback.
   - **Netlify**: add a `_redirects` file in `public/` with `/* /index.html 200`.
4. Update `SITE.url` in `src/constants/site.ts` and the URLs in
   `public/sitemap.xml` / `public/robots.txt` to your real domain once deployed.

## Contact Form

The contact form (`src/components/sections/Contact.tsx`) is validated with
React Hook Form and currently posts to `src/services/contact.service.ts`,
which calls a placeholder `/api/contact` endpoint. To go live, either:

- Swap `submitContactForm` to call `emailjs.send(...)` (EmailJS), or
- Point `backendApi` (in `src/services/api.ts`) at a real backend and keep the
  same function signature.

No other component needs to change either way.

## Future Improvements

- Wire the contact form to EmailJS or a real backend endpoint.
- Add a genuine contribution-heatmap to the GitHub section (requires a
  token-backed serverless function, since the public API doesn't expose it).
- Add hackathon entries and certifications to `src/data/achievements.ts` as
  they happen.
- Add unit tests (Vitest + React Testing Library) for interactive components
  (Contact form, Navbar section highlighting).
- Add an `og-image.png` in `public/` for richer social link previews.
# portfolio
