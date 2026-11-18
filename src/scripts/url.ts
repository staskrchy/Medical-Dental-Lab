// Додає base з astro.config ('/Medical-Dental-Lab') до внутрішнього шляху: withBase('/team') → '/Medical-Dental-Lab/team'.
// Потрібно, бо на GitHub Pages сайт живе в підпапці репозиторію.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
