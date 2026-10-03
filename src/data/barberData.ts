import { ServiceItem, ChicagoNeighborhood } from '../types';

export const BARBER_CONTACT = {
  name: 'Matt',
  brandName: 'The Goat Cuts 🐐',
  shortBrand: 'The Goat Cuts',
  website: 'TheGoatCuts.Com',
  altWebsite: 'MattCutsChicago.Com',
  email: 'MantasChicago36@Gmail.Com',
  phone: '+1 (312) 385 - 9229',
  phoneRaw: '+13123859229',
  cashAppTag: '$Muahz26',
  cashAppUrl: 'https://cash.app/$Muahz26',
  city: 'Chicago, IL',
  houseCallFee: 25,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircut',
    name: 'Precision Men’s Haircut',
    price: 25,
    durationMinutes: 35,
    description: 'Specializing in European, straight, and wavy hair textures. Precision scissor-over-comb, custom taper or skin fade, and styling.',
    highlights: [
      'Specialized straight & wavy hair shear work',
      'Clean neck line-up & hot lather razor finish',
      'Custom texturizing & styling product application',
    ],
    popular: true,
  },
  {
    id: 'beard',
    name: 'Beard Trimming & Razor Shave',
    price: 15,
    durationMinutes: 20,
    description: 'Detailed beard trimming, razor shave line-up, mustache detailing, clean cheek & neck lines with hot towel and conditioning.',
    highlights: [
      'Sharp cheek and neck line definition with straight razor shave',
      'Clipper de-bulk & length tapering',
      'Soothing beard conditioning tonic & hot towel',
    ],
  },
  {
    id: 'combo',
    name: 'The Full Service (Haircut + Beard Trimming)',
    price: 40,
    durationMinutes: 50,
    description: 'Complete grooming package. Precision scissor haircut, personalized fade, hot towel straight razor shave, and full beard trimming.',
    highlights: [
      'Includes Precision Haircut ($25) + Beard Trimming ($15)',
      'Total grooming transformation in one session',
      'Tailored to your daily routine & hair texture',
    ],
  },
];

export const CHICAGO_NEIGHBORHOODS: ChicagoNeighborhood[] = [
  { name: 'River North', region: 'Downtown / Near North', travelNote: '10–20 min response' },
  { name: 'West Loop & Fulton Market', region: 'West Side', travelNote: '10–25 min response' },
  { name: 'Lincoln Park', region: 'North Side', travelNote: '15–25 min response' },
  { name: 'Lakeview & Wrigleyville', region: 'North Side', travelNote: '15–30 min response' },
  { name: 'The Loop / Downtown', region: 'Central', travelNote: '10–20 min response' },
  { name: 'Gold Coast & Old Town', region: 'Near North', travelNote: '10–20 min response' },
  { name: 'Wicker Park & Bucktown', region: 'West Side', travelNote: '15–25 min response' },
  { name: 'Logan Square', region: 'Northwest', travelNote: '20–30 min response' },
  { name: 'South Loop', region: 'Central / South', travelNote: '15–25 min response' },
  { name: 'Streeterville', region: 'Near North', travelNote: '10–20 min response' },
  { name: 'Ukrainian Village & West Town', region: 'West Side', travelNote: '15–25 min response' },
  { name: 'Pilsen & Bridgeport', region: 'Southwest', travelNote: '20–30 min response' },
];

export const TIME_SLOTS = [
  '09:00 AM',
  '10:15 AM',
  '11:30 AM',
  '01:00 PM',
  '02:15 PM',
  '03:30 PM',
  '04:45 PM',
  '06:00 PM',
  '07:15 PM',
];

export const FAQS = [
  {
    question: 'What hair types and styles do you specialize in?',
    answer: 'Matt specializes in straight, wavy, and European hair textures. Whether you are looking for a classic scissor cut, side part, textured crop, pompadour, low or mid taper fade, or slick back, each cut is customized with scissor-over-comb precision for effortless natural styling.',
  },
  {
    question: 'How does the Chicago mobile house call work?',
    answer: 'For clients located in Chicago city, Matt brings a complete professional mobile barber setup directly to your apartment, house, or high-rise. All you need is a chair and a standard power outlet. Matt brings cordless clippers, shears, sanitation equipment, protective floor mats, and styling tools, leaving your space spotless.',
  },
  {
    question: 'Why is an instant security deposit required for house calls?',
    answer: 'Because Matt reserves dedicated travel time across Chicago city traffic for house calls, a $25 security deposit via Cash App ($Muahz26) is required upon booking to confirm and secure your time slot on the calendar. In-chair / studio appointments do not require this deposit upfront.',
  },
  {
    question: 'Do you travel outside the Chicago city limits?',
    answer: 'Currently, mobile house calls are strictly limited to locations within Chicago city borders (Downtown, River North, West Loop, Lincoln Park, Lakeview, Wicker Park, Logan Square, South Loop, etc.). If you are outside the city boundary, you are welcome to book an in-studio appointment.',
  },
  {
    question: 'What forms of payment are accepted?',
    answer: 'Cash App ($Muahz26) is the official electronic method for house call security deposits and payments. Cash is also accepted in person at the time of service.',
  },
  {
    question: 'What is the cancellation or rescheduling policy?',
    answer: 'We request at least 4 hours advance notice if you need to reschedule or cancel your appointment. For house calls, deposits can be transferred to a rescheduled slot if notified in advance.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'David K.',
    neighborhood: 'Lincoln Park, Chicago',
    service: 'Precision Scissor Cut & Fade',
    text: 'Finding a barber in Chicago who actually knows how to use scissors on straight hair without butchering the cowlicks is tough. Matt is a master. Best $25 haircut in the city, hands down.',
  },
  {
    name: 'Marcus V.',
    neighborhood: 'West Loop, Chicago',
    service: 'House Call Haircut & Beard Trim',
    text: 'Booked the house call to my condo in West Loop. Sent the $25 deposit via Cash App to $Muahz26 and Matt showed up right on time with professional gear and left zero mess. Beard line is surgical.',
  },
  {
    name: 'Alex R.',
    neighborhood: 'River North, Chicago',
    service: 'Haircut & Styling',
    text: 'European scissor cuts done right. No rushed clipper buzzes — he takes time with taper work and texturizing. Will definitely be a regular client.',
  },
];
