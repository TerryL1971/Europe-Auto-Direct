<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/brand/logo-primary-reverse.png">
  <img src="docs/brand/logo-primary.png" alt="Europe Auto Direct" width="420">
</picture>

<br><br>

### Your car. Your country. No complications.

**Transparent, VAT‑inclusive car buying for the international community across Germany &amp; Luxembourg.**

<br>

[![Astro](https://img.shields.io/badge/built_with-Astro-0F172A?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/islands-React_19-0F172A?style=for-the-badge&logo=react&logoColor=00A3E0)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/styling-Tailwind_v4-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=00A3E0)](https://tailwindcss.com)

![Last commit](https://img.shields.io/github/last-commit/TerryL1971/Europe-Auto-Direct?style=flat-square&color=00A3E0&labelColor=0F172A)
![Top language](https://img.shields.io/github/languages/top/TerryL1971/Europe-Auto-Direct?style=flat-square&color=00A3E0&labelColor=0F172A)
![Code size](https://img.shields.io/github/languages/code-size/TerryL1971/Europe-Auto-Direct?style=flat-square&color=00A3E0&labelColor=0F172A)
![Languages](https://img.shields.io/github/languages/count/TerryL1971/Europe-Auto-Direct?style=flat-square&label=langs&color=00A3E0&labelColor=0F172A)

[**Concept**](#-the-concept) · [**Highlights**](#-highlights) · [**Multilingual**](#-multilingual-by-design) · [**Stack**](#-tech-stack) · [**Run it**](#-run-it)

</div>

<br>

<div align="center">
  <img src="docs/screenshots/hero.png" alt="Europe Auto Direct — hero" width="880">
</div>

---

## 💡 The concept

**Europe Auto Direct** is a concept pitch site for a proposed car‑buying brand aimed at
relocating professionals and expats — people for whom the paperwork, the language and the
pricing norms of a new country are the real friction, not the car.

Every price on the site follows one rule:

> **The number you see is the number you pay.**

- 🇪🇺 **EU‑spec vehicles only** — no imports, no single‑vehicle approval, no grey‑market surprises
- 🧾 **VAT itemised, never buried** — base price `+` VAT `=` total, on every card (German *Preisangabenverordnung*)
- 🤝 **No German credit history required** — guidance through registration, insurance and TÜV
- 🌍 **Support in your language** — English / German / French, first question to number plate

<div align="center">

| Full page | Same page, `DE` toggle |
|:---:|:---:|
| <img src="docs/screenshots/full-page.png" width="420"> | <img src="docs/screenshots/german.png" width="420"> |

</div>

---

## ✨ Highlights

| | |
|---|---|
| 🏎️ **Filterable inventory** | 12 mock EU‑spec listings, filter by make &amp; body type — a React island, instant, no page reload |
| 💶 **Transparency built into every card** | Total price with the VAT amount &amp; rate broken out in its own chip — the whole pitch, made visual |
| 🗣️ **Real EN / DE / FR toggle** | Not a placeholder — it re‑translates the static page *and* the React islands from one shared store |
| 📍 **Nationwide framing** | Delivery across Germany — Frankfurt, Munich, Düsseldorf, Wiesbaden, Heidelberg — plus Luxembourg |
| ⚡ **Ships as static HTML** | Marketing content is plain HTML for speed &amp; SEO; only four components hydrate |
| 📱 **Mobile‑first & theme‑aware** | Fluid layout, tuned down to 360 px |

---

## 🌐 Multilingual by design

The language toggle is the piece most concept sites fake. Here it actually works, and the
mechanism is small:

```
          ┌─────────────────┐
  click → │  langStore      │  nanostore atom  ·  mirrored to localStorage
          │  (EN / DE / FR) │
          └────────┬────────┘
                   │  fires  "lang-change"
        ┌──────────┴───────────┐
        ▼                      ▼
  React islands          inline script in BaseLayout
  useStore(langStore)    swaps every  [data-i18n]  text node
  re‑render in place      + [data-i18n-placeholder]
```

One dictionary ([`src/data/i18n.ts`](src/data/i18n.ts)), one store
([`src/stores/lang.ts`](src/stores/lang.ts)). Static markup opts in with a `data-i18n="key"`
attribute; islands read the same keys through a `t(lang, key)` helper. The chrome, every
section heading, the filters, the CTAs and the price labels all follow the switch.

---

## 🛠️ Tech stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | [Astro](https://astro.build) (`output: 'static'`) | Marketing pages that need to rank and load instantly ship as HTML |
| **Interactive islands** | [React 19](https://react.dev) | Only the inventory grid, filters, language toggle &amp; contact form hydrate |
| **State across islands** | [nanostores](https://github.com/nanostores/nanostores) | ~1 kB shared store the static markup can subscribe to as well |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` | Design tokens in one `@theme` block — the whole palette swaps from there |
| **Deploy** | [Vercel](https://vercel.com) adapter | Zero‑config static output |

---

## 🚀 Run it

```bash
npm install
npm run dev       # → http://localhost:4321
npm run build     # → static output in dist/
npm run preview   # serve the build locally
```

Requires **Node ≥ 22.12**.

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TerryL1971/Europe-Auto-Direct)

</div>

---

## 📁 Project structure

<details>
<summary>Expand</summary>

```
Europe-Auto-Direct/
├── src/
│   ├── components/
│   │   ├── Logo.astro            # identity — lockup / mark, reverse prop
│   │   ├── Hero.astro  HowItWorks.astro  TrustSection.astro
│   │   ├── LocationsSection.astro  ContactSection.astro  Footer.astro
│   │   ├── InventorySection.astro
│   │   ├── InventoryGrid.tsx     ┐
│   │   ├── VehicleCard.tsx       │  React islands
│   │   ├── LanguageToggle.tsx    │
│   │   └── ContactForm.tsx       ┘
│   ├── layouts/BaseLayout.astro  # SEO/meta + the static-markup i18n script
│   ├── pages/index.astro
│   ├── data/
│   │   ├── inventory.json        # 12 mock EU-spec listings
│   │   └── i18n.ts               # EN / DE / FR dictionary
│   ├── lib/                      # inventory typing, currency formatting
│   ├── stores/lang.ts            # shared language state
│   └── styles/global.css         # Tailwind + design tokens
├── public/
│   ├── favicon.svg
│   └── brand/                     # logo-primary · -reverse · mark (.svg)
└── docs/                          # screenshots + brand assets
```

</details>

---

## 🎨 Identity

**Client‑supplied artwork.** A heavy geometric `EAD` whose `A`‑crossbar stretches into a
road / car‑profile silhouette, over `EUROPE AUTO DIRECT`. One outlined path — no font
dependency, renders identically everywhere.

**Palette** (deliberately nothing in common with the parent brand):

| Role | Token | Hex |
|---|---|---|
| Primary — 60% | `midnight` | `#0F172A` |
| Support — 30% | `steel` | `#64748B` |
| Accent — 10% | `ducal` (Grand Ducal blue) | `#00A3E0` |
| Ground | `sand` | `#F6F7F9` |

Defined once in [`src/styles/global.css`](src/styles/global.css); the `navy-*` / `clear-*`
Tailwind ramps map onto it, so a repalette is a token edit, not a find‑and‑replace.

---

## 🗺️ Roadmap

- [ ] Real inventory feed (the current parent site runs on WordPress + REST API)
- [ ] Full translation of vehicle‑level copy
- [ ] Financing / pre‑approval enquiry flow
- [ ] Luxembourg delivery‑logistics page

---

<div align="center">
<sub>A concept in development · not a live dealership · no real inventory or payments.</sub>
</div>
