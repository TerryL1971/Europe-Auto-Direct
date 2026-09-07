// src/components/ContactForm.tsx
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { langStore } from '../stores/lang';
import { t } from '../data/i18n';

type State = 'idle' | 'sending' | 'done';

export default function ContactForm() {
  const lang = useStore(langStore);
  const [state, setState] = useState<State>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    // Concept mockup — no backend. Simulate a network round-trip.
    setTimeout(() => setState('done'), 700);
  }

  const field =
    'w-full rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-300 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-200';

  if (state === 'done') {
    return (
      <div className="rounded-card border border-clear-200 bg-clear-50 p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-clear-500 text-white">
          <svg viewBox="0 0 20 20" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10.7a1 1 0 1 1 1.4-1.4l3 3 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-clear-700">
          {t(lang, 'contact.success')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-navy-100 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-navy-500">{t(lang, 'contact.name')}</span>
          <input required name="name" autoComplete="name" className={`mt-1 ${field}`} />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-navy-500">{t(lang, 'contact.email')}</span>
          <input required type="email" name="email" autoComplete="email" className={`mt-1 ${field}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold text-navy-500">{t(lang, 'contact.phone')}</span>
          <input name="phone" autoComplete="tel" className={`mt-1 ${field}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold text-navy-500">{t(lang, 'contact.message')}</span>
          <textarea
            required
            name="message"
            rows={4}
            placeholder={t(lang, 'contact.messagePh')}
            className={`mt-1 ${field} resize-y`}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="mt-5 w-full rounded-full bg-navy-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800 disabled:opacity-60 sm:w-auto"
      >
        {state === 'sending' ? t(lang, 'contact.sending') : t(lang, 'contact.submit')}
      </button>
    </form>
  );
}
