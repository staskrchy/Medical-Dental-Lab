export default {
  label: 'Microscopic dental lab',
  title: 'Reserve your visit',
  text: 'Choose a date and time for your appointment.',
  closeLabel: 'Close calendar',
  serviceLabel: 'Service',
  otherServicesLabel: 'Other services',
  // TODO: уточнити тривалість першого прийому для кожної послуги (у макеті є лише 45 хв для відбілювання)
  services: [
    { name: 'Teeth Whitening', minutes: 45 },
    { name: 'Implantology', minutes: 60 },
    { name: 'Ceramic veneers', minutes: 60 },
    { name: 'Orthodontics', minutes: 45 },
  ],
  minutesLabel: 'minutes',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  timezoneLabel: 'Local clinic time',
  times: ['09:00', '10:30', '12:00', '14:30'],
  // Вихідні дні клініки (0 — неділя, 6 — субота): у календарі недоступні
  closedWeekdays: [0, 6],
  continueLabel: 'Continue',
  locale: 'en-GB',
};
