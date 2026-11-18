import { withBase } from '../scripts/url';
import logo from '../assets/images/footer/logo-mdl.png';
import aiIcons from '../assets/images/footer/ai-icons.svg';
import mail from '../assets/images/footer/mail.svg';
import header from './header';

export default {
  nav: header.nav, // ті самі пункти, що й у хедері
  features: [
    'Clinical Protocol & 25x Optics',
    'Master Ceramists',
    'Before / After Cases',
    'Emergency Same-Day Care',
    'Cleanroom B+ Standards',
    'Private Parking',
  ],
  ai: { label: 'Ask your AI about MDLab', icons: aiIcons }, // TODO: посилання на AI-сервіси
  newsletter: {
    text: 'Join our newsletter to receive the latest oral health tips special offers and clinic updates.',
    placeholder: 'Your Email Adress',
    icon: mail,
    submit: 'Subscribe',
  },
  disclaimer:
    'All clinical procedures, endodontic treatments, and microsurgical operations at Microscopic Dental Lab (MDL) are performed strictly under licensed medical protocols using surgical magnification (Leica operating optics and surgical loupes). In-house dental laboratory CAD/CAM restorations are custom-fabricated in accordance with certified ISO medical device standards. Diagnostic 3D computed tomography (CBCT) and treatment plans are tailored individually following an in-person clinical examination. All rights reserved. Medical License No. [MED-2026-MDL].',
  legal: [
    { label: '© 2026 Microscopic Dental Lab' },
    { label: 'All Rights Reserved.' },
    { label: '10-Year Clinical Warranty' },
    { label: 'Privacy Policy', href: withBase('/privacy-policy') },
    { label: 'Terms of Treatment', href: '#' },
  ],
  wordmark: ['Microscopic', 'Dental Lab'],
  logo: { src: logo, alt: 'Microscopic Dental Lab' },
};
