// src/components/VehicleCard.tsx
//
// Rendered inside the <InventoryGrid> island so it can follow the live
// language toggle. The VAT line is deliberately as prominent as the total
// — that transparency is the core of the pitch.

import { money, groupInt } from '../lib/format';
import { t, type Lang } from '../data/i18n';
import type { Vehicle } from '../lib/inventory';

// Cohesive with the brand palette — midnight / slate / Grand Ducal blue,
// just enough variation to tell the cards apart.
const HUES: Record<string, [string, string]> = {
  Volkswagen: ['#0f172a', '#1e3a5f'],
  Audi: ['#1e293b', '#475569'],
  BMW: ['#0f2439', '#0a6da0'],
  'Mercedes-Benz': ['#1e293b', '#334155'],
  Škoda: ['#0f2c3d', '#0a5580'],
  Renault: ['#172033', '#3f4a63'],
  Peugeot: ['#0f172a', '#2f4a63'],
  Volvo: ['#111a2b', '#38566e'],
  Cupra: ['#12232f', '#2f5061'],
  Kia: ['#151d2e', '#33415a'],
};

function Thumb({ v }: { v: Vehicle }) {
  const [a, b] = HUES[v.make] ?? ['#0f172a', '#1e3a5f'];
  const gid = `g-${v.id}`;
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label={`${v.year} ${v.make} ${v.model}`}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill={`url(#${gid})`} />
      <g opacity="0.9" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 150 q22 -46 58 -52 q30 -24 74 -24 q46 0 74 26 l46 6 q30 6 30 30 l0 8 q0 6 -8 6 l-24 0" />
        <path d="M96 150 l204 0" />
        <circle cx="132" cy="150" r="20" />
        <circle cx="268" cy="150" r="20" />
      </g>
      <text x="24" y="40" fill="#fff" opacity="0.85" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700">
        {v.make}
      </text>
    </svg>
  );
}

export default function VehicleCard({ v, lang }: { v: Vehicle; lang: Lang }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-navy-100 bg-white">
      <div className="aspect-[400/220] w-full">
        <Thumb v={v} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold leading-tight text-navy-900">
            {v.year} {v.make} {v.model}
          </h3>
          <span className="shrink-0 rounded-full bg-navy-50 px-2 py-0.5 text-[11px] font-semibold text-navy-600">
            {v.location}
          </span>
        </div>

        <p className="mt-1 text-xs text-navy-400">{v.trim}</p>

        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-navy-500">
          <li>{groupInt(v.mileageKm)} {t(lang, 'inv.km')}</li>
          <li>·</li>
          <li>{v.fuel}</li>
          <li>·</li>
          <li>{v.transmission}</li>
          <li>·</li>
          <li>{v.bodyType}</li>
        </ul>

        <p className="mt-3 text-xs leading-relaxed text-navy-500">{v.blurb}</p>

        <div className="mt-4 flex-1" />

        <div className="rounded-xl bg-sand p-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
              {t(lang, 'inv.total')}
            </span>
            <span className="text-xl font-extrabold tabular-nums text-navy-900">
              {money(v.priceGross)}
            </span>
          </div>
          <div className="mt-1 flex items-center justify-between text-[11px] text-navy-500">
            <span>
              {t(lang, 'inv.net')} {money(v.priceNet)}
            </span>
            <span className="rounded bg-clear-100 px-1.5 py-0.5 font-semibold text-clear-700">
              + {money(v.vatAmount)} {t(lang, 'inv.vatLine')} ({v.vatRate}%)
            </span>
          </div>
        </div>

        <a
          href={`/inventory/${v.id}`}
          className="mt-3 rounded-full bg-navy-700 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          {t(lang, 'inv.details')}
        </a>
      </div>
    </article>
  );
}
