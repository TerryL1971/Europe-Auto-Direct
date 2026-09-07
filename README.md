<div align="center">

# 🚗 Europe Auto Direct

### Transparent, all-inclusive car buying for the international community across the Stuttgart region & Luxembourg

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 💡 What this is

**Europe Auto Direct** is a **concept mockup built for an internal pitch** — a proposed
secondary business line, separate from Used Car Guys, aimed at the international
professional / expat community in the **Stuttgart region and Luxembourg**.

It is a persuasive visual aid, not a live store: no real inventory, no payment
processing, no dealership backend.

### Why a separate brand

UCG's current pricing works because SOFA-status buyers don't pay German taxes.
An expat or Luxembourg buyer pays a meaningfully different, **tax-inclusive** price
for an EU-spec vehicle. Running both under one brand risks UCG's standing with its
existing American customer base — so this reads as its own thing, visually and
in its pricing model.

### The pricing model this site demonstrates

- **EU-spec vehicles only** — no US-market spec, no grey imports
- **Every price VAT-inclusive**, with VAT itemised on its own line
  (required under the German *Preisangabenverordnung*)
- **The displayed total is the price paid** — no documentation or delivery add-ons

---

## ✨ What's in the build

| Section | Notes |
|---|---|
| **Hero** | "Your car. Your country. No complications." + a live example price breakdown |
| **How it works** | 4 steps written for someone who has never bought a car in Germany |
| **Inventory preview** | 12 mock EU-spec listings, filterable by make & body type. Each card shows total price with the VAT amount broken out prominently |
| **Why buy from us** | Trust section answering "why not a private sale or a normal dealer" |
| **Price breakdown widget** | Interactive: drag the total, watch base price + VAT resolve to it. The core proof point of the pitch |
| **Locations** | Stuttgart (primary/physical) and Luxembourg (served market / remote purchase) |
| **Contact** | Name / email / phone / message with a mock success state |
| **Footer** | Carries a subtle "A concept in development" note |

### Identity

**Client-supplied artwork.** A heavy geometric `EAD` whose `A`-crossbar
stretches into a road / car-profile silhouette, over `EUROPE AUTO DIRECT`.
Delivered as a single outlined path — no font dependency, renders identically
everywhere. Midnight `#0F172A` monochrome (white on dark).

Component: [src/components/Logo.astro](src/components/Logo.astro) — `lockup`
(full, used in header + footer) and `mark` (crops to `EAD`); plus a `reverse`
prop for dark backgrounds. Self-contained SVGs — `logo-primary`,
`logo-primary-reverse`, `mark` — in [public/brand/](public/brand/); favicon in
[public/favicon.svg](public/favicon.svg).

**Site palette** (applied site-wide, per the brand brief): deep midnight blue
`#0F172A` primary (60%), brushed steel `#64748B` support (30%), Grand Ducal
blue `#00A3E0` accent (10%) on CTAs, links, checkmarks and the VAT breakdown.
Cool `#F6F7F9` ground. The `navy-*` / `clear-*` token names are retained — `navy`
now maps to the midnight/slate ramp, `clear` to Grand Ducal blue.

### Language toggle — EN / DE / FR (functional)

The toggle genuinely switches the site chrome, all section headings, CTAs and the
price-transparency labels across English, German and French. Per-vehicle marketing
blurbs stay in English in this concept build — they'd come from the real inventory
feed later. State is shared between the static markup and the React islands via a
nanostore + `localStorage`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build) — static HTML by default, for speed and SEO if this goes live |
| **Interactive islands** | [React](https://react.dev) — language toggle, inventory filters, price calculator, contact form |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) |
| **Deployment** | [Vercel](https://vercel.com) |

Only the genuinely interactive pieces ship JavaScript; every marketing section is
plain HTML.

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build locally
```

Requires Node ≥ 22.12.

---

## 📁 Project Structure

```
Europe-Auto-Direct/
├── src/
│   ├── components/       # Astro sections + React islands
│   │   ├── Logo.astro          # identity: lockup / horizontal / mark
│   │   ├── Hero.astro  HowItWorks.astro  TrustSection.astro  ...
│   │   ├── InventoryGrid.tsx   VehicleCard.tsx   (islands)
│   │   ├── PriceBreakdown.tsx  ContactForm.tsx   LanguageToggle.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro    # SEO/meta + the static-markup i18n script
│   ├── pages/
│   │   └── index.astro
│   ├── data/
│   │   ├── inventory.json      # 12 mock EU-spec listings
│   │   └── i18n.ts             # EN / DE / FR dictionary
│   ├── lib/                    # inventory typing, currency formatting
│   ├── stores/
│   │   └── lang.ts             # shared language state (nanostore)
│   └── styles/
│       └── global.css          # Tailwind + design tokens
└── public/
    ├── favicon.svg
    └── brand/                  # logo-primary · logo-primary-reverse · mark (.svg)
```

---

## 🗺️ If the pitch is approved

- Real inventory feed. The current UCG site (`usedcarguys.net`) runs on WordPress
  and exposes a REST API — a candidate source for a shared vehicle feed.
- Full translation of vehicle-level copy
- Financing / pre-approval inquiry flow
- Luxembourg delivery logistics page
- Salesforce DealerTeam integration (operational backend — out of scope for the pitch)

---

<div align="center">

**Built by [Terrell Lombardi](https://terrell-lombardi.de)** · A concept in development.

</div>
