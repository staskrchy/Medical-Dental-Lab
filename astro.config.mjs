import { defineConfig } from 'astro/config';

// Сайт публікується на GitHub Pages: https://staskrchy.github.io/Medical-Dental-Lab
// base — підпапка репозиторію; усі внутрішні посилання будуємо через withBase() (src/scripts/url.ts)
export default defineConfig({
  site: 'https://staskrchy.github.io',
  base: '/Medical-Dental-Lab',
});
