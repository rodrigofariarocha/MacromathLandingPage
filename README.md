<!-- ╭──────────────────────────────────────────────╮
     │  MacroMath — Landing Page · README             │
     ╰──────────────────────────────────────────────╯ -->

<div align="center">

<br />

<!-- Apple mark -->
<img src="public/images/brand/logo-mark.png" alt="MacroMath" width="96" />

<!-- Orange wordmark, below the mark -->
<br />
<img src=".github/assets/title.svg" alt="MacroMath" width="260" />

<br /><br />

<!-- Stack badges -->
<img src="https://img.shields.io/badge/Astro-FF5A1F?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
&nbsp;
<img src="https://img.shields.io/badge/Poppins-111111?style=flat-square&logo=googlefonts&logoColor=white" alt="Poppins" />

<br />

<!-- Repo stats -->
<img src="https://img.shields.io/github/last-commit/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Last commit" />
&nbsp;
<img src="https://img.shields.io/github/languages/top/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Top language" />
&nbsp;
<img src="https://img.shields.io/github/repo-size/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Repo size" />
&nbsp;
<img src="https://img.shields.io/badge/i18n-PT_·_EN_·_ES-FF8A3D?style=flat-square" alt="i18n" />
&nbsp;
<img src="https://img.shields.io/badge/Theme-Light_·_Dark-111111?style=flat-square" alt="Theme" />

<br />

</div>

<!-- ░░ Orange wave divider ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=70&section=header" width="100%" />

<div align="center">

> **AI-powered nutrition tracking** — the official website for the MacroMath app:
> count calories and macros, plan meals, and manage your pantry.

</div>

## &nbsp;Table of Contents

- ▸ [**Overview**](#-overview) — what this project is
- ▸ [**Features**](#-features) — what the landing page offers
- ▸ [**Stack**](#-stack) — technologies used
- ▸ [**Page Sections**](#-page-sections) — every block on the landing page
- ▸ [**Design System**](#-design-system) — colors, typography and tokens
- ▸ [**Structure**](#-structure) — folder organization
- ▸ [**Getting Started**](#-getting-started) — install and run locally
- ▸ [**Commands**](#-commands) — available scripts
- ▸ [**Internationalization**](#-internationalization) — how i18n works
- ▸ [**Deploy**](#-deploy) — go live
- ▸ [**License**](#-license)

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ✨ &nbsp;Overview

**MacroMath Landing Page** is the official website for the **MacroMath** app — a fast, polished and accessible landing page built to showcase the product, explain its features and convert visitors into downloads.

- ▸ **Goal** → present the app and drive downloads (iOS & Android).
- ▸ **Principles** → lightweight, responsive and true to the app's visual identity.
- ▸ **Nature** → **100% static site** (no backend), generated with Astro.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🚀 &nbsp;Features

| Module | Description |
| :-- | :-- |
| ▸ **Static & fast** | Built with [Astro](https://astro.build) — pure HTML, zero unnecessary JavaScript, CDN-ready. |
| ▸ **Light / dark theme** | Toggleable and **persistent** via `localStorage`, applied before paint (no flash). |
| ▸ **Multilingual** | Portuguese · English · Spanish, translated client-side via a central dictionary. |
| ▸ **Scroll animations** | Smooth reveal animations that re-trigger on scroll up and down via `IntersectionObserver`. |
| ▸ **Responsive** | Mobile-first design with dedicated navigation and CTA for small screens. |
| ▸ **Custom design system** | Brand orange palette, **Poppins** typography and CSS design tokens. |
| ▸ **SEO & social** | Open Graph / Twitter meta tags, `theme-color` and per-page descriptions. |
| ▸ **Accessible** | Semantic markup and full respect for `prefers-reduced-motion`. |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧱 &nbsp;Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=astro,html,css,js,vercel" alt="Stack" />

</div>

| Layer | Technology |
| :-- | :-- |
| ▸ **Framework** | Astro 6 _(static output)_ |
| ▸ **Styles** | Plain CSS + design tokens |
| ▸ **Interaction** | Vanilla JavaScript (theme, i18n, menu, scroll reveal) |
| ▸ **i18n** | JS dictionary applied client-side |
| ▸ **Typography** | Poppins _(Google Fonts)_ |
| ▸ **Deploy** | Any static host (Vercel, Netlify, …) |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧩 &nbsp;Page Sections

> Top-to-bottom order as defined in [`src/pages/index.astro`](src/pages/index.astro):

| # | Section | Description |
| :-: | :-- | :-- |
| 1 | ▸ **Navbar** | Fixed navigation with language switcher, theme toggle and download CTA. |
| 2 | ▸ **Hero** | Headline, phone mockup and primary call-to-action. |
| 3 | ▸ **TrustBar** | Key feature highlights strip. |
| 4 | ▸ **Features** | Feature grid with detail modal. |
| 5 | ▸ **HowItWorks** | Step-by-step app walkthrough. |
| 6 | ▸ **AppShowcase** | Spotlight on **MacroAI**, the AI assistant. |
| 7 | ▸ **Mission** | Product mission and method. |
| 8 | ▸ **Testimonials** | User testimonials. |
| 9 | ▸ **FAQ** | Frequently asked questions in an accordion. |
| 10 | ▸ **CTA** | Final conversion block. |
| 11 | ▸ **Footer** | Links, social media and legal. |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🎨 &nbsp;Design System

> Defined in [`src/styles/global.css`](src/styles/global.css) via CSS custom properties.

**Brand palette**

| Token | Color | Hex |
| :-- | :-- | :-- |
| ▸ `--brand` | ![](https://img.shields.io/badge/_-FF5A1F?style=flat-square&color=FF5A1F) | `#FF5A1F` |
| ▸ `--brand-strong` | ![](https://img.shields.io/badge/_-F03E0E?style=flat-square&color=F03E0E) | `#F03E0E` |
| ▸ `--brand-soft` | ![](https://img.shields.io/badge/_-FF8A4C?style=flat-square&color=FF8A4C) | `#FF8A4C` |

**Macro colors**

| Macro | Color | Hex |
| :-- | :-- | :-- |
| ▸ Protein | ![](https://img.shields.io/badge/_-EF4444?style=flat-square&color=EF4444) | `#EF4444` |
| ▸ Carbs | ![](https://img.shields.io/badge/_-F5B70A?style=flat-square&color=F5B70A) | `#F5B70A` |
| ▸ Fat | ![](https://img.shields.io/badge/_-22C55E?style=flat-square&color=22C55E) | `#22C55E` |
| ▸ Water | ![](https://img.shields.io/badge/_-3B82F6?style=flat-square&color=3B82F6) | `#3B82F6` |

**Other tokens** → `Poppins` typography · border radii `--r-sm` to `--r-full` · shadows `--shadow-sm/md/lg/brand` · motion `--ease` + `--t-fast/base/slow`.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📁 &nbsp;Structure

```text
macromath_website/
│
├── public/                  → static assets served as-is
│   ├── images/              → logos, mockups and app screenshots
│   └── favicon.svg
│
├── src/
│   ├── components/          → landing sections (Hero, Features, …)
│   ├── layouts/             → Layout.astro (head, theme, i18n, scripts)
│   ├── pages/               → routes: index · privacy · terms
│   ├── i18n/                → dict.js (PT/EN/ES dictionary)
│   └── styles/              → global.css (design tokens & base styles)
│
├── scripts/                 → utilities (mockup generation)
├── .github/assets/          → README wordmark
├── astro.config.mjs         → Astro configuration
└── package.json
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ⚡ &nbsp;Getting Started

**Requirements**

- ▸ **Node.js** ≥ `22.12`
- ▸ **npm** (bundled with Node)

**Installation**

```bash
# 1 › clone the repository
git clone https://github.com/rodrigofariarocha/MacromathLandingPage.git
cd MacromathLandingPage

# 2 › install dependencies
npm install

# 3 › start the development server
npm run dev          # → http://localhost:4321
```

> Production: `npm run build` outputs the site to `./dist`; `npm run preview` serves that build locally.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📜 &nbsp;Commands

| Command | Action |
| :-- | :-- |
| ▸ `npm install` | Install dependencies |
| ▸ `npm run dev` | Local dev server at `localhost:4321` |
| ▸ `npm run build` | Build the site to `./dist/` |
| ▸ `npm run preview` | Preview the production build locally |
| ▸ `npm run astro` | Astro CLI (`astro add`, `astro check`, …) |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🌐 &nbsp;Internationalization

> Three languages: **Portuguese · English · Spanish**, applied client-side.

- ▸ Translations live in [`src/i18n/dict.js`](src/i18n/dict.js), organized by key.
- ▸ Each translatable element uses `data-i18n="key"` (or `data-i18n-html` for HTML content).
- ▸ Language is **auto-detected** from the browser and **saved** to `localStorage`.

```js
// src/i18n/dict.js — add an entry
'hero.cta1': { pt: 'Descarregar grátis', en: 'Download free', es: 'Descargar gratis' },
```

```html
<!-- use in a component -->
<span data-i18n="hero.cta1">Download free</span>
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ☁️ &nbsp;Deploy

`npm run build` produces a **100% static** site in `./dist` — ready for any host:

- ▸ **Vercel** → import the repository, zero config.
- ▸ **Netlify** → build command `npm run build`, publish directory `dist`.
- ▸ **Cloudflare Pages** → same build configuration.
- ▸ **GitHub Pages** → publish the contents of `dist`.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📄 &nbsp;License

All rights reserved © Rodrigo Faria Rocha.

<br />

<div align="center">

<sub>Official website for the MacroMath app</sub>

</div>

<!-- ░░ Orange footer wave ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=120&section=footer" width="100%" />
