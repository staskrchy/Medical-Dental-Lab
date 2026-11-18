import { withBase } from '../scripts/url';
import logo from '../assets/images/logo-mdl-dark.png';
import calendar from '../assets/images/calendar.svg';

export default {
  logo: { src: logo, alt: '', text: 'Microscopic dental lab', href: withBase('/') },
  // Посилання з «/», щоб працювали і з головної, і зі сторінки команди
  nav: [
    { label: 'Services', href: withBase('/#services') },
    { label: 'MD Lab', href: withBase('/#lab') },
    { label: 'Treatment', href: withBase('/#treatment') },
    { label: 'Specialists', href: withBase('/team') },
    { label: 'Contact Us', href: withBase('/#contact') },
  ],
  menuLabel: 'Open menu',
  closeMenuLabel: 'Close menu',
  // TODO: вигаданий номер — замінити на справжній
  phone: { label: '+41 44 555 01 28', href: 'tel:+41445550128' },
  booking: { label: 'Select Date', href: withBase('/#booking'), icon: calendar },
};
