import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Squarespace URLs have no trailing slash. Keep it that way so every URL matches.
export default defineConfig({
  site: 'https://www.outtoseevision.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/friend') }),
  ],
});
