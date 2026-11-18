import implantology from '../assets/images/service-implantology.jpg';
import veneers from '../assets/images/service-veneers.jpg';
import orthodontics from '../assets/images/service-orthodontics.jpg';
import whitening from '../assets/images/service-whitening.jpg';

export default {
  title: 'Treat first. Enhance second.',
  text: 'No aesthetic treatment is valid unless the teeth and gums are healthy. Every treatment begins with a comprehensive assessment and a clear treatment plan.',
  more: 'Learn more →',
  items: [
    {
      name: 'Implantology',
      tag: 'implants',
      text: 'Replace a missing tooth, root included. Pose guided by scanner 3D, custom-made ceramic crown on zirconia.',
      duration: ['3 to 6 months', '3 sessions'],
      href: '#',
      image: { src: implantology, alt: 'Implantology' },
    },
    {
      name: 'Ceramic veneers',
      tag: 'veneers',
      text: 'Correct shape, shade, and alignment. Simulation of the validated result with a mock-up.',
      duration: ['14 days', '2 sessions'],
      href: '#',
      image: { src: veneers, alt: 'Ceramic veneers' },
    },
    {
      name: 'Orthodontics',
      tag: 'aligners',
      text: 'Align transparently, painlessly. Follow-up photo evaluation every two weeks.',
      duration: ['4 to 18 months', '1 session'],
      href: '#',
      image: { src: orthodontics, alt: 'Orthodontics' },
    },
    {
      name: 'Whitening',
      tag: 'bleaching',
      text: 'In-office whitening or home kits, via Whitewash. High quality and safe methods.',
      duration: ['45 minutes', '1 session'],
      href: '#',
      image: { src: whitening, alt: 'Whitening' },
    },
  ],
};
