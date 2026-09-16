# Dheeraj Kumar Singh — Developer Portfolio

A modern, premium, fully responsive developer portfolio built with **Angular 21** (standalone components) and **TypeScript**, following enterprise-grade architecture: clean separation of concerns, reusable/typed content, accessible markup, and a small, fast production bundle (~58 KB gzipped).

---

## ✨ Features

- **Design system** — CSS custom-property tokens for color, type, radius, motion; dark and light themes share the same tokens so nothing is duplicated.
- **Dark / light mode** — persisted to `localStorage`, falls back to the OS `prefers-color-scheme`, toggled via `ThemeService` (a single `signal`).
- **Profile image section** — a gradient-ringed portrait in the hero that tilts toward the pointer, with floating credential chips, a glass name plate, and the same photo reused in the navbar and contact card. Swap one file to change it everywhere.
- **Premium visual layer** — ambient aurora + grid backdrop, glassmorphism surfaces, pointer-following spotlight on every card, sheen-sweep buttons, gradient headline text, branded scrollbar.
- **Animated stat counters** — `CountUpDirective` eases numbers up from zero the first time they enter the viewport.
- **Reading progress bar** — a gradient bar under the navbar tracks scroll depth; a floating back-to-top button appears past the first screen.
- **Tech ticker** — an infinite, pause-on-hover marquee of the stack.
- **Self-typing code block** — a TypeScript snippet in About that literally defines the developer as an object; respects `prefers-reduced-motion`.
- **Scroll-spy navigation** — one shared `IntersectionObserver` (via `ScrollSpyService`) highlights the section currently in view.
- **Scroll-reveal animations** — a single reusable `RevealDirective` (`appReveal`) drives fade/slide-in for any element; disabled automatically for reduced-motion users.
- **Fully responsive** — mobile-first breakpoints from 360px phones to ultra-wide desktops; a dedicated mobile nav drawer.
- **Accessible** — semantic landmarks, visible focus rings, `aria-label`s on icon-only controls, decorative icons marked `aria-hidden`, inline form-error messages.
- **SEO-ready** — meta description/keywords, Open Graph tags, and JSON-LD `Person` structured data in `index.html`.
- **Contact form** — real client-side validation (Angular Reactive Forms); since there's no backend, submitting composes a pre-filled `mailto:` link.
- **Resume download** — the PDF in `public/assets/resume/` is served statically and linked from the navbar and hero.
- **No icon-library / animation-library dependency** — icons are inline SVG (`Icon` component), animations are CSS + `IntersectionObserver`. Keeps the bundle small and avoids network requests for icons.

---

## 🗂️ Project structure

```
src/app/
├── core/
│   ├── data/portfolio.data.ts      # single source of truth for all content (edit this to update the site)
│   ├── models/portfolio.models.ts  # TypeScript interfaces describing the content shape
│   └── services/
│       ├── theme.service.ts        # dark/light mode state + persistence
│       └── scroll-spy.service.ts   # tracks which section is in view
├── shared/
│   ├── components/icon/icon.ts     # inline-SVG icon set
│   └── directives/
│       ├── reveal.directive.ts     # scroll-triggered reveal animation
│       ├── spotlight.directive.ts  # pointer-following radial highlight on cards
│       ├── tilt.directive.ts       # subtle 3D tilt for the profile portrait
│       ├── count-up.directive.ts   # animated number counters
│       └── spy-section.directive.ts# registers a <section> with ScrollSpyService
├── components/
│   ├── navbar/       # sticky nav, scroll-spy highlight, theme toggle, mobile menu
│   ├── hero/         # intro, profile portrait, stat counters, tech ticker
│   ├── about/        # summary, quick facts, certifications, typed code panel, principles
│   ├── experience/   # vertical timeline of roles
│   ├── projects/     # project cards with GitHub links
│   ├── skills/       # grouped skill tags
│   ├── contact/      # validated contact form
│   ├── footer/       # closing CTA + socials
│   └── scroll-top/   # floating back-to-top button
├── app.ts / app.html # composes all sections
└── app.config.ts
src/styles/
├── _tokens.scss       # design tokens (colors, type, radii, motion) for both themes
└── _base.scss          # reset, layout utilities, shared component classes
```

**Why this shape:** content (`core/data`) is fully separated from presentation (`components/*`), so updating your resume details never touches template code. Cross-cutting behaviour (theme, scroll-spy, reveal animation) lives in `core/services` and `shared/directives` as small, focused, reusable units instead of being duplicated per component.

---

## 🚀 Getting started

```bash
npm install
npm start          # ng serve — http://localhost:4200
```

### Production build

```bash
npm run build       # outputs to dist/dheeraj-portfolio/browser
```

Deploy the contents of `dist/dheeraj-portfolio/browser` to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

---

## ✏️ Editing content

Everything visible on the site — name, summary, experience, projects, skills, socials, resume link — lives in one file:

```
src/app/core/data/portfolio.data.ts
```

Update the values there; every component re-renders automatically because they all read from `PORTFOLIO_DATA`. To swap the résumé PDF, replace the file in `public/assets/resume/` and update `resumeUrl` if the filename changes.

### 📸 Changing the profile photo

The site currently ships a **placeholder** image. To use your own:

1. Replace `public/assets/img/profile.png` with your photo.
2. Use a **square** image (800×800 or larger) — it is cropped with `object-fit: cover`.
3. That's it. The hero portrait, navbar avatar, contact card and social preview image all read from the same `profile` entry in `portfolio.data.ts`.

If you prefer a different filename or format (e.g. `profile.webp`), just update `profile.src` in `portfolio.data.ts` and the `og:image` / preload tags in `src/index.html`.

## 🎨 Editing the theme

Colors, fonts, radii and motion timing are all CSS variables in `src/styles/_tokens.scss`. Change a value once and it propagates through every component automatically, in both dark and light mode.

---

## ♿ Accessibility & performance notes

- Keyboard focus is always visible (`:focus-visible`), and interactive icon-only buttons have `aria-label`s.
- All motion (typing effect, reveal-on-scroll, scroll indicator) is skipped when the OS-level "reduce motion" setting is on.
- No external icon font or animation library — icons are inline SVG, animations are CSS transitions — keeping the initial bundle around 58 KB gzipped.
- Decorative elements are marked `aria-hidden`; the page uses semantic landmarks (`header`, `main`, `footer`) and a single `h1`.
