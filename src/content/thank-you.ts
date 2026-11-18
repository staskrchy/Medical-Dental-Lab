import { withBase } from '../scripts/url';
import header from './header';

export default {
  meta: { title: 'Thank you — Microscopic Dental Lab' },
  label: 'request received',
  title: 'Thank you',
  text: 'Your request is with us. Our administrator will contact you within an hour to confirm the visit.',
  card: {
    label: 'Microscopic dental lab',
    title: 'Your visit',
    rows: [
      { key: 'service', label: 'Service' },
      { key: 'date', label: 'Date' },
      { key: 'time', label: 'Time' },
      { key: 'name', label: 'Name' },
      { key: 'phone', label: 'Phone' },
      { key: 'email', label: 'E-mail' },
    ],
    empty: 'To be confirmed',
  },
  help: { text: 'Need to change something?', phone: header.phone },
  action: { label: 'Back to home', href: withBase('/') },
  // Ключ, під яким форма контактів зберігає заявку (лише в цій вкладці браузера)
  storageKey: 'mdl-request',
  locale: 'en-GB',
};
