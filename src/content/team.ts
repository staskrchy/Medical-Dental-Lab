import hero from '../assets/images/team/hero.png';
import gareth from '../assets/images/team/gareth.jpg';
import marcus from '../assets/images/team/marcus.jpg';
import clara from '../assets/images/team/clara.jpg';
import ethan from '../assets/images/team/ethan.jpg';
import hana from '../assets/images/team/hana.jpg';

export default {
  meta: { title: 'Our team — Microscopic Dental Lab' },
  hero: {
    label: 'WHO WE ARE',
    title: 'architectures of natural smiles',
    image: { src: hero, alt: 'Microscopic Dental Lab team' },
  },
  title: 'our team',
  text: 'Swiss-trained clinicians and master dental technicians united under one roof to preserve living tissue and craft undetectable restorations.',
  // Ряди як у макеті: 2 картки, потім 3
  rows: [
    [
      { name: 'Dr. Gareth Ainsworth', practice: '28 yrs. practice', role: 'Chief Medical Officer & Lead Implantologist', photo: gareth },
      { name: 'Dr. Marcus Vane', practice: '23 yrs. practice', role: 'Co-Chief Dentist & Lead Prosthodontist', photo: marcus },
    ],
    [
      { name: 'Dr. Clara Ainsworth', practice: '18 yrs. practice', role: 'Orthodontist & Microscopic Specialist', photo: clara },
      { name: 'Dr. Ethan Brooks', practice: '16 yrs. practice', role: 'Lead Endodontist & Microscopic Specialist', photo: ethan },
      { name: 'Dr. Hana Tanaka', practice: '13 yrs. practice', role: 'Lead Cosmetic Dentist & Microscopic Specialist', photo: hana },
    ],
  ],
};
