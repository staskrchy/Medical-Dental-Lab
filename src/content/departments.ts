import image from '../assets/images/instruments.png';

export default {
  stats: [
    { value: '2 500', unit: 'patients', text: 'satisfied customers with new smiles' },
    { value: '18', unit: 'years', text: 'working to improve the quality of our services' },
    { value: '4,9', unit: '/ 5', text: 'average customer satisfaction rate' },
    { value: '10', unit: 'years', text: 'official warranty for our services' },
  ],
  title:
    'Toggle between real-life symptoms and dedicated clinical departments. Every protocol is carried out under optical magnification with digital planning',
  caption: 'Microscopic dental lab',
  tabs: [
    { label: 'Our services', href: '#services' },
    { label: 'Specialists', href: '/team' },
  ],
  image: { src: image, alt: 'Dental instruments in a coat pocket' },
};
