import microscope from '../assets/images/microscope.jpg';

export default {
  title: 'A doctor can only treat what they can see.',
  titleMuted: 'We see 25 times more.',
  text: 'Traditional dentistry often relies on tactile sensation and flat 2D X-rays. At Microscopic Dental Lab, even a routine check-up and professional hygiene are conducted strictly under high-resolution optics.',
  card: {
    image: { src: microscope, alt: 'Leica surgical microscope' },
    label: 'Leica / operating optics',
    zoom: '25×',
    title: '“Leica” Surgical Microscope',
    text: 'Complete, shadow-free illumination of the root canal to its full depth. The instrument operates exclusively within the affected dentin, keeping the tooth vital and sealed for decades.',
    scale: ['1x', '4.5x', '25x'],
  },
  more: 'Learn more →',
  facts: [
    { value: '0.02 mm', text: 'Accuracy of edge alignment.', href: '#' },
    { value: 'Up to 70%', text: 'More living tissue is preserved.', href: '#' },
    { value: '0% pain', text: 'STA Computer-Assisted Anesthesia.', href: '#' },
  ],
};
