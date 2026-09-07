// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.europe-auto-direct.com',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),

  // Marketing content ships as static HTML; only the interactive islands
  // (price calculator, language toggle, inventory filters, contact form)
  // hydrate as React.
  output: 'static',

  trailingSlash: 'never',
  build: {
    format: 'file',
  },

  prefetch: true,
});
