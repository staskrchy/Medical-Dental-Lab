import header from './header';

// TODO: тексти написані як чернетка (частину даних — адресу, e-mail, строки зберігання — вигадано).
// Перед публікацією їх має перевірити юрист.
const clinic = {
  name: 'Microscopic Dental Lab (MDL)',
  address: 'Bahnhofstrasse 21, 8001 Zürich, Switzerland',
  email: 'privacy@mdl-clinic.ch',
  phone: header.phone,
};

export default {
  meta: { title: 'Privacy Policy — Microscopic Dental Lab' },
  label: 'legal',
  title: 'Privacy Policy',
  updated: 'Last updated: 18 November 2026',
  intro:
    'Precision matters to us — in treatment and in how we handle your information. This policy explains what personal data Microscopic Dental Lab collects, why we collect it, how long we keep it and the rights you have. It applies to this website, our booking calendar, contact form and newsletter, and to the care we provide at the clinic.',
  tocLabel: 'Contents',
  clinic,
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: [
        `${clinic.name} is a dental clinic with an in-house dental laboratory. We are the controller of the personal data described in this policy.`,
        `Address: ${clinic.address}. Data protection contact: ${clinic.email}, ${clinic.phone.label}.`,
      ],
    },
    {
      id: 'data-we-collect',
      title: 'Data we collect',
      body: ['We only collect what we need to book, provide and follow up on your care:'],
      list: [
        'Contact details you enter in the “Contact us” form: name, phone number and e-mail address.',
        'Booking details you choose in the calendar: service, date and time of the appointment.',
        'Your e-mail address, if you subscribe to our newsletter.',
        'Health information you share with us or that we record during examination and treatment: medical history, X-rays and 3D CBCT scans, intraoral photos, treatment plans and estimates.',
        'Technical data your browser sends when you visit the site (such as IP address, browser type and pages visited), kept in standard server logs.',
      ],
    },
    {
      id: 'how-we-use',
      title: 'How we use your data',
      list: [
        'To confirm and manage your appointment — our administrator contacts you within an hour of your request.',
        'To examine and treat you, prepare treatment plans and fabricate restorations in our CAD/CAM laboratory.',
        'To send reminders, including the complimentary check-up one month after treatment and the annual reminder.',
        'To answer your questions between visits.',
        'To send the newsletter with oral health tips, offers and clinic updates — only if you subscribed.',
        'To keep the website secure and working properly.',
      ],
    },
    {
      id: 'legal-basis',
      title: 'Legal basis',
      body: [
        'We process personal data under the Swiss Federal Act on Data Protection (FADP) and, where it applies, the EU General Data Protection Regulation (GDPR).',
        'We rely on your request and our contract with you to book and provide treatment, on our legal duties to keep medical records, on your consent for the newsletter, and on our legitimate interest in running a secure website. You can withdraw consent at any time.',
      ],
    },
    {
      id: 'medical-data',
      title: 'Medical data and confidentiality',
      body: [
        'Health information is particularly sensitive. It is protected by medical professional secrecy and is only accessible to the clinicians and laboratory technicians involved in your care.',
        'Before-and-after photos, including those shown in the “Results” and “Reviews” sections of this website, are only published with the patient’s explicit written consent.',
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      body: ['We never sell your data. We only share it when necessary:'],
      list: [
        'With other specialists or external laboratories involved in your treatment, with your agreement.',
        'With your health insurer, if you ask us to bill them directly.',
        'With service providers who host our website, e-mail and appointment systems, under a data processing agreement and only on our instructions.',
        'With authorities, where the law requires it.',
      ],
    },
    {
      id: 'storage',
      title: 'Storage and retention',
      body: [
        'Your data is stored in Switzerland or in countries recognised as providing an adequate level of protection.',
        'Medical records are kept for 20 years after your last treatment, as required by Swiss law. Booking requests that do not lead to a visit are deleted after 12 months. Newsletter data is kept until you unsubscribe.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      body: ['You can at any time:'],
      list: [
        'ask what personal data we hold about you and receive a copy;',
        'have inaccurate data corrected;',
        'ask us to delete data we are not legally required to keep;',
        'object to or restrict certain processing, and withdraw your consent;',
        'receive your data in a commonly used electronic format.',
      ],
      after: `Send your request to ${clinic.email}. We reply within 30 days. You may also contact the Swiss Federal Data Protection and Information Commissioner (FDPIC).`,
    },
    {
      id: 'cookies',
      title: 'Cookies and local storage',
      body: [
        'This website does not use advertising or tracking cookies.',
        'To show your details on the “Thank you” page, the booking form temporarily keeps them in your browser’s session storage. They never leave your device this way and are removed when you close the tab.',
      ],
    },
    {
      id: 'security',
      title: 'Security',
      body: [
        'We protect your data with encrypted connections, access limited to authorised staff, and secure backups. If a breach ever puts your rights at risk, we will inform you and the authorities as required by law.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: ['We may update this policy when our services or the law change. The date at the top of this page always shows the latest version.'],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: [`Questions about your data? Write to ${clinic.email} or call ${clinic.phone.label}.`],
    },
  ],
  action: { label: 'Back to home', href: '/' },
};
