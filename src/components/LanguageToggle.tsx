// src/components/LanguageToggle.tsx
import { useStore } from '@nanostores/react';
import { langStore, setLang } from '../stores/lang';
import { LANGS } from '../data/i18n';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const lang = useStore(langStore);

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-navy-200 bg-white p-0.5 text-sm font-semibold ${className}`}
    >
      {LANGS.map(({ code, label }) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active
                ? 'bg-navy-700 text-white'
                : 'text-navy-500 hover:text-navy-800'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
