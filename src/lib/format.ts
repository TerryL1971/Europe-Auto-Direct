// src/lib/format.ts
const eur0 = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

const num = new Intl.NumberFormat('de-DE');

/** €21,900 — no decimals, EU grouping. */
export const money = (n: number) => eur0.format(n);

/** 24,000 — grouped integer, no unit. */
export const groupInt = (n: number) => num.format(Math.round(n));
