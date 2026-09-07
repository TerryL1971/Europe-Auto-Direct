// src/components/InventoryGrid.tsx
import { useMemo, useState } from 'react';
import { useStore } from '@nanostores/react';
import { langStore } from '../stores/lang';
import { t } from '../data/i18n';
import { inventory, makes, bodyTypes } from '../lib/inventory';
import VehicleCard from './VehicleCard';

export default function InventoryGrid() {
  const lang = useStore(langStore);
  const [make, setMake] = useState('all');
  const [body, setBody] = useState('all');

  const filtered = useMemo(
    () =>
      inventory.filter(
        (v) =>
          (make === 'all' || v.make === make) &&
          (body === 'all' || v.bodyType === body),
      ),
    [make, body],
  );

  const selectCls =
    'rounded-full border border-navy-200 bg-white px-3 py-1.5 text-sm font-semibold text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-300';

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-navy-500">
          <span>{t(lang, 'inv.filterMake')}</span>
          <select className={selectCls} value={make} onChange={(e) => setMake(e.target.value)}>
            <option value="all">{t(lang, 'inv.all')}</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm font-semibold text-navy-500">
          <span>{t(lang, 'inv.filterBody')}</span>
          <select className={selectCls} value={body} onChange={(e) => setBody(e.target.value)}>
            <option value="all">{t(lang, 'inv.all')}</option>
            {bodyTypes.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <span className="text-sm text-navy-400">
          {t(lang, 'inv.showing')} {filtered.length} {t(lang, 'inv.of')}{' '}
          {inventory.length} {t(lang, 'inv.vehicles')}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-card border border-dashed border-navy-200 bg-white p-10 text-center text-navy-500">
          {t(lang, 'inv.empty')}
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VehicleCard key={v.id} v={v} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
