import background from '../assets/images/reviews/hands-xray.png';
import handsTop from '../assets/images/reviews/hands-top.png';
import handsBottom from '../assets/images/reviews/hands-bottom.png';
import olena from '../assets/images/reviews/olena.jpg';
import skylar from '../assets/images/reviews/skylar.jpg';
import declan from '../assets/images/reviews/declan.jpg';
import kinsley from '../assets/images/reviews/kinsley.jpg';

export default {
  background: { src: background, alt: '' },
  // Мобільний фон: дві руки окремо (кропи з мобільного макета)
  backgroundMobile: { top: handsTop, bottom: handsBottom },
  label: 'reviews',
  title: 'people who are once again sharing their smiles with the world',
  more: 'Before and After Result →',
  prevLabel: 'Previous reviews',
  nextLabel: 'Next reviews',
  // featured: картка, підсвічена за замовчуванням (як у макеті)
  items: [
    {
      name: 'Olena Koval',
      service: 'Ceramic veneers installation',
      date: 'October 14, 2026',
      text: '-”The results exceeded all my expectations! My smile looks incredibly natural, and the procedure itself was completely painless”',
      avatar: olena,
      href: '#',
    },
    {
      name: 'Skylar Henderson',
      service: 'Dental implantation',
      date: 'November 2, 2026',
      text: '-”I was very nervous about getting an implant, but the entire team made it seamless. Zero discomfort during or after the procedure.”',
      avatar: skylar,
      href: '#',
    },
    {
      name: 'Declan Murphy',
      service: 'Invisible orthodontics (aligners)',
      date: 'September 20, 2026',
      text: '-”I’ve been wearing aligners for a few months now, and my teeth are straightening right before my eyes. It’s so convenient that they are completely unnoticeable.”',
      avatar: declan,
      href: '#',
      featured: true,
    },
    {
      name: 'Kinsley Hayes',
      service: 'Professional teeth whitening',
      date: 'October 28, 2026',
      text: '-”My teeth became noticeably brighter in just a single session. Extremely satisfied with the level of care and the final look!”',
      avatar: kinsley,
      href: '#',
    },
    // TODO: тексти-заглушки і без фото (показуються ініціали) — заміни на реальні відгуки
    {
      name: 'Marcus Bennett',
      service: 'Root canal treatment',
      date: 'August 30, 2026',
      text: '-”I expected the worst, but the treatment under the microscope was calm and precise. The tooth was saved and I felt nothing at all.”',
      avatar: null,
      href: '#',
    },
    {
      name: 'Sofia Lindqvist',
      service: 'Professional hygiene',
      date: 'July 18, 2026',
      text: '-”The most thorough cleaning I have ever had. Everything was explained step by step, and my gums have never felt healthier.”',
      avatar: null,
      href: '#',
    },
  ],
};
