import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pages left out of the sitemap (not meant for search results).
const hidden = ['/friend', '/thank-you', '/404', '/hipaa'];

// Squarespace URLs have no trailing slash. Keep it that way so every URL matches.
export default defineConfig({
  site: 'https://www.outtoseevision.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !hidden.some((h) => page.replace(/\/$/, '').endsWith(h)) }),
  ],
});
