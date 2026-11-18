import implant from '../assets/images/implant.png';
import doctor from '../assets/images/doctor.jpg';
import icon from '../assets/images/tooth-question.svg';

export default {
  label: 'implants',
  title: 'Implant Design',
  subtitle: 'Precision in Every Detail',
  image: { src: implant, alt: 'Dental implant: crown, abutment and titanium screw' },
  parts: [
    {
      name: 'Dental Crown',
      tag: 'Top part',
      text: 'Made of high-quality ceramics (porcelain), zirconia, or metal-ceramics (porcelain-fused-to-metal) that perfectly mimic natural tooth enamel.',
    },
    {
      name: 'Abutment',
      tag: 'Middle part',
      text: 'Usually made of durable titanium, zirconia, or medical-grade alloys. This is the "connector" that links the intraosseous implant (screw) with the crown',
    },
    {
      name: 'Titanium Screw',
      tag: 'Bottom part',
      text: 'Made of biocompatible medical-grade titanium, which is not rejected by the human body. Its surface often has a special microporous treatment',
    },
  ],
  action: { label: 'Reserve Your Visit', href: '#booking' },
  doctor: {
    icon: { src: icon, alt: 'Is the procedure painful?' },
    photo: { src: doctor, alt: 'Dr. Gareth Ainsworth' },
    name: 'Dr. Gareth Ainsworth',
    role: 'Clinical Director & Advanced Implantologist',
    quote: '— ”The procedure is completely painless and is performed under general anesthesia by top specialists.”',
  },
};
