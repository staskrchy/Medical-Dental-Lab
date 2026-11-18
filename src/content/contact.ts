import { withBase } from '../scripts/url';
import doctor from '../assets/images/contact-doctor.png';
import doctorMobile from '../assets/images/contact-doctor-mobile.png';

export default {
  title: 'Contact us',
  text: 'Please provide all the necessary information, and our administrator will be sure to contact you within an hour.',
  fields: [
    { name: 'name', type: 'text', placeholder: 'Your name', autocomplete: 'name' },
    // pattern: цифри, пробіли, +, -, дужки; щонайменше 7 символів
    { name: 'phone', type: 'tel', placeholder: 'Phone number', autocomplete: 'tel', pattern: '[0-9+\\-\\(\\) ]{7,}' },
    { name: 'email', type: 'email', placeholder: 'E-mail', autocomplete: 'email' },
  ],
  consent: {
    before: 'By submitting, you agree to our ',
    link: { label: 'Privacy Policy', href: withBase('/privacy-policy') },
    after: ' and the processing your personal data.',
  },
  submit: 'Reserve Your Visit',
  image: { src: doctor, mobile: doctorMobile, alt: 'Dentist with surgical loupes' },
};
