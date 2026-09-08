// src/components/Gallery.tsx
//
// Vehicle detail-page image carousel: a large main image with prev/next,
// a counter, and a scrollable thumbnail strip. Photos are hot-linked from
// the source feed; anything that fails to load falls back to a car
// silhouette so the layout never collapses.

import { useEffect, useRef, useState } from 'react';

const CarPlaceholder = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 220" className={className} role="img" aria-label="Photo unavailable">
    <rect width="400" height="220" fill="#1e293b" />
    <g opacity="0.6" fill="none" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 150 q22 -46 58 -52 q30 -24 74 -24 q46 0 74 26 l46 6 q30 6 30 30 l0 8 q0 6 -8 6 l-24 0" />
      <path d="M96 150 l204 0" />
      <circle cx="132" cy="150" r="20" />
      <circle cx="268" cy="150" r="20" />
    </g>
  </svg>
);

export default function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [i, setI] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const stripRef = useRef<HTMLDivElement>(null);

  const n = images.length;
  const go = (next: number) => setI(((next % n) + n) % n);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(i - 1);
      if (e.key === 'ArrowRight') go(i + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    const el = stripRef.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [i]);

  if (n === 0) {
    return (
      <div className="overflow-hidden rounded-card border border-navy-100">
        <CarPlaceholder className="aspect-[16/10] w-full" />
      </div>
    );
  }

  return (
    <div>
      <div className="group relative overflow-hidden rounded-card border border-navy-100 bg-navy-900">
        {broken[i] ? (
          <CarPlaceholder className="aspect-[16/10] w-full" />
        ) : (
          <img
            src={images[i]}
            alt={`${alt} — photo ${i + 1}`}
            loading="eager"
            className="aspect-[16/10] w-full object-cover"
            onError={() => setBroken((b) => ({ ...b, [i]: true }))}
          />
        )}

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-clear-500"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 6 10l6 6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-clear-500"
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4l6 6-6 6" /></svg>
            </button>
            <div className="absolute bottom-3 right-3 rounded-full bg-navy-900/70 px-2.5 py-1 text-xs font-semibold text-white tabular-nums">
              {i + 1} / {n}
            </div>
          </>
        )}
      </div>

      {n > 1 && (
        <div
          ref={stripRef}
          className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
        >
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => go(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              aria-current={idx === i}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                idx === i ? 'border-clear-500' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              {broken[idx] ? (
                <CarPlaceholder className="h-full w-full" />
              ) : (
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={() => setBroken((b) => ({ ...b, [idx]: true }))}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
