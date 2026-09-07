// src/components/PriceBreakdown.tsx
//
// The single most persuasive visual in the pitch: drag the total and watch
// base price + VAT resolve to exactly that number. Proof that pricing here
// works differently from the SOFA-status UCG site.

import { useMemo, useState } from 'react';
import { useStore } from '@nanostores/react';
import { langStore } from '../stores/lang';
import { t } from '../data/i18n';
import { money } from '../lib/format';

const VAT_RATE = 0.19;
const MIN = 12000;
const MAX = 45000;

export default function PriceBreakdown() {
  const lang = useStore(langStore);
  const [gross, setGross] = useState(21900);

  const { net, vat, netPct, vatPct } = useMemo(() => {
    const net = Math.round(gross / (1 + VAT_RATE));
    const vat = gross - net;
    return {
      net,
      vat,
      netPct: (net / gross) * 100,
      vatPct: (vat / gross) * 100,
    };
  }, [gross]);

  return (
    <div className="rounded-card border border-navy-100 bg-white p-6 sm:p-8">
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">
          {t(lang, 'price.slider')}
        </span>
        <div className="mt-2 text-4xl font-extrabold tabular-nums text-navy-900">
          {money(gross)}
        </div>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={100}
          value={gross}
          onChange={(e) => setGross(Number(e.target.value))}
          className="mt-4 w-full accent-navy-700"
          aria-label={t(lang, 'price.slider')}
        />
      </label>

      <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-navy-50">
        <div className="bg-navy-500" style={{ width: `${netPct}%` }} />
        <div className="bg-clear-500" style={{ width: `${vatPct}%` }} />
      </div>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-navy-600">
            <span className="h-2.5 w-2.5 rounded-full bg-navy-500" />
            {t(lang, 'price.base')}
          </dt>
          <dd className="tabular-nums font-semibold text-navy-900">{money(net)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-navy-600">
            <span className="h-2.5 w-2.5 rounded-full bg-clear-500" />
            {t(lang, 'price.vat')}
          </dt>
          <dd className="tabular-nums font-semibold text-navy-900">{money(vat)}</dd>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-navy-100 pt-3">
          <dt className="text-base font-bold text-navy-900">{t(lang, 'price.total')}</dt>
          <dd className="tabular-nums text-lg font-extrabold text-clear-600">
            {money(gross)}
          </dd>
        </div>
      </dl>

      <p className="mt-5 text-xs leading-relaxed text-navy-400">
        {t(lang, 'price.note')}
      </p>
    </div>
  );
}
