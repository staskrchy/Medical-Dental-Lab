import doctor from '../assets/images/hero.jpg'; // те саме фото, що й на головному екрані

export default {
  meta: { title: 'Page not found — Microscopic Dental Lab' },
  code: '404',
  image: { src: doctor, alt: 'Dentist with surgical loupes' },
  action: { label: 'Try Again', href: '/' },
};
