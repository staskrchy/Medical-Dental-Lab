import after from '../assets/images/smile-after.jpg';
import before from '../assets/images/smile-before.jpg';

export default {
  compare: {
    after: { src: after, alt: 'Smile after treatment', label: 'after' },
    before: { src: before, alt: 'Smile before treatment', label: 'before' },
    start: 70, // початкове положення повзунка, % (як у макеті)
    handleLabel: 'Drag to compare before and after',
  },
  label: 'results',
  title: 'The same smile. Three sessions later.',
  text: 'Ceramic veneers on the eight teeth of the smile, shade chosen with the patient from a digital simulation. No devitalized teeth, enamel preserved.',
  details: [
    { label: 'Reason', value: 'Enamel wear and central diastema' },
    { label: 'Treatment', value: '8 e.max ceramic veneers, 0.3 mm thickness' },
    { label: 'Duration', value: '3 sessions spread over 5 weeks' },
    { label: 'Practitioner', value: 'Dr Antoine Meyer', strong: true },
  ],
  action: { label: 'Reserve Your Visit', href: '#booking' },
};
