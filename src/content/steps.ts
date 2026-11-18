import image from '../assets/images/steps-doctor-tablet-hd.jpg';
import imageMobile from '../assets/images/steps-mobile.jpg';

export default {
  image: { src: image, mobile: imageMobile, alt: 'Doctor explaining the treatment plan on a tablet' },
  title: ['Four steps.', 'Zero surprises.'],
  text: 'You know what will happen, how much it costs, and how long it takes — before you even sit in the chair.',
  steps: [
    {
      label: 'Step 01',
      title: 'First appointment',
      text: '45 minutes. Complete examination, X-rays, photos. We listen first to what brings you in, we look afterwards.',
    },
    {
      label: 'Step 02',
      title: 'Treatment plan',
      text: 'A detailed estimate, line by line, with the estimated out-of-pocket cost. 3D simulation of the smile for aesthetic procedures.',
    },
    {
      label: 'Step 03',
      title: 'The treatments',
      text: 'Sessions calibrated to avoid back-and-forth. Comfortable anesthesia, MEOPA (laughing gas) available, breaks upon request.',
    },
    {
      label: 'Step 04',
      title: 'The follow-up',
      text: 'Complimentary check-up at one month, then automatic annual reminder. A question between two visits: response within 24h.',
    },
  ],
};
