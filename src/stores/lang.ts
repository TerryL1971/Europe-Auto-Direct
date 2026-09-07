// src/stores/lang.ts
//
// Shared language state for the React islands. Kept in a nanostore so the
// language toggle, the inventory grid and the contact form all react to
// the same value, and mirrored to localStorage + a `lang-change` event so
// the static Astro markup can re-translate itself (see BaseLayout.astro).

import { atom } from 'nanostores';
import { DEFAULT_LANG, translations, type Lang } from '../data/i18n';

const STORAGE_KEY = 'ead-lang';

function readInitial(): Lang {
  if (typeof localStorage === 'undefined') return DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in translations) return stored;
  } catch {
    /* private mode / blocked storage — fall through */
  }
  return DEFAULT_LANG;
}

export const langStore = atom<Lang>(readInitial());

export function setLang(lang: Lang): void {
  langStore.set(lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
    document.dispatchEvent(new CustomEvent('lang-change', { detail: lang }));
  }
}
