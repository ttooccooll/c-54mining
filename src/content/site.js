// Single source of truth for business facts, pricing, and page metadata.
// Used by the React pages and by scripts/prerender.js (static HTML + sitemap),
// so a change here updates the site, the crawler-readable HTML, and the sitemap.

export const SITE = {
  name: 'C-54 HomeTech',
  // The site speaks in the first person. This is the name it introduces itself with.
  owner: 'Jason',
  // The reply time promised on the quote form and around the site. Change it here only.
  replyTime: 'two business days',
  url: 'https://www.c54hometech.com',
  email: 'c54hometech@proton.me',
  region: 'Greater Cincinnati',
  regionLong: 'Greater Cincinnati, Dayton, Northern Kentucky, Lexington and Southeast Indiana',
  areaSummary: 'Hamilton County and the 21 counties around it, plus Lexington, KY',
  // Shown in structured data. City-level only, on purpose: no street address.
  address: { locality: 'Cincinnati', region: 'OH', country: 'US' },
  // Quote form delivery through Web3Forms (free, no account). Paste the access key
  // they email you here; while it's empty, the form falls back to opening an email.
  web3formsKey: '',
  ogImage: '/assets/og-image.jpg',
  stackerNews: { handle: 'jasonb', url: 'https://stacker.news/jasonb' },
  nostr: {
    npub: 'npub1a95w2zch0gqfa0vhlgygz0xklwxccw6st88qkmhsk8d3tke2sqaqamsnzq',
    url: 'https://njump.me/npub1a95w2zch0gqfa0vhlgygz0xklwxccw6st88qkmhsk8d3tke2sqaqamsnzq',
  },
};

// Hamilton County, every county touching it, and every county touching those,
// plus Fayette County (Lexington).
//   region: the heading shown above the state's counties
//   cities: the few names shown beside the heading on a phone, before the list is opened
//   towns:  the towns listed under each county on the site and in the structured data
//   notes:  labels a county with its main city in the quote form's county list
export const SERVICE_AREA = [
  {
    state: 'Ohio',
    abbr: 'OH',
    region: 'Southwest Ohio',
    cities: ['Cincinnati', 'Dayton', 'Hamilton', 'Mason'],
    counties: ['Hamilton', 'Butler', 'Warren', 'Clermont', 'Montgomery', 'Greene', 'Clinton', 'Brown', 'Preble'],
    towns: {
      Hamilton: ['Cincinnati', 'Norwood', 'Blue Ash', 'Loveland'],
      Butler: ['Hamilton', 'Fairfield', 'West Chester', 'Middletown', 'Oxford'],
      Warren: ['Mason', 'Lebanon', 'Springboro', 'Franklin'],
      Clermont: ['Milford', 'Batavia', 'Amelia', 'New Richmond'],
      Montgomery: ['Dayton', 'Kettering', 'Centerville', 'Huber Heights'],
      Greene: ['Beavercreek', 'Xenia', 'Fairborn', 'Yellow Springs'],
      Clinton: ['Wilmington', 'Blanchester'],
      Brown: ['Georgetown', 'Mount Orab', 'Ripley'],
      Preble: ['Eaton', 'Camden', 'Lewisburg'],
    },
  },
  {
    state: 'Kentucky',
    abbr: 'KY',
    region: 'Northern Kentucky and Lexington',
    cities: ['Covington', 'Florence', 'Newport', 'Lexington'],
    counties: ['Boone', 'Kenton', 'Campbell', 'Grant', 'Pendleton', 'Bracken', 'Gallatin', 'Fayette'],
    towns: {
      Boone: ['Florence', 'Burlington', 'Union', 'Hebron'],
      Kenton: ['Covington', 'Erlanger', 'Independence', 'Fort Mitchell'],
      Campbell: ['Newport', 'Fort Thomas', 'Alexandria', 'Bellevue'],
      Grant: ['Williamstown', 'Dry Ridge', 'Crittenden'],
      Pendleton: ['Falmouth', 'Butler'],
      Bracken: ['Augusta', 'Brooksville'],
      Gallatin: ['Warsaw', 'Glencoe'],
      Fayette: ['Lexington'],
    },
    notes: { Fayette: 'Lexington' },
  },
  {
    state: 'Indiana',
    abbr: 'IN',
    region: 'Southeast Indiana',
    cities: ['Lawrenceburg', 'Aurora', 'Batesville'],
    counties: ['Dearborn', 'Franklin', 'Union', 'Ohio', 'Ripley', 'Switzerland'],
    towns: {
      Dearborn: ['Lawrenceburg', 'Aurora', 'Greendale'],
      Franklin: ['Brookville', 'Oldenburg'],
      Union: ['Liberty'],
      Ohio: ['Rising Sun'],
      Ripley: ['Batesville', 'Versailles', 'Osgood'],
      Switzerland: ['Vevay'],
    },
  },
];

export const COUNTY_COUNT = SERVICE_AREA.reduce((n, s) => n + s.counties.length, 0);

export const countyLabel = (state, county) =>
  `${county} County, ${state.abbr}${state.notes?.[county] ? ` (${state.notes[county]})` : ''}`;

// `blurb` is the one-line version shown on the home page price row.
export const HA_TIERS = [
  {
    id: 'basic',
    name: 'Basic Setup',
    price: 315,
    hours: '1–2 hours',
    blurb: 'Up to 5 devices, running and on your phone',
    summary: 'Get Home Assistant running and your first devices connected.',
    features: [
      'Home Assistant installed on your hardware',
      'Up to 5 devices connected',
      'Remote access from your phone (optional)',
      '30-minute training session',
    ],
  },
  {
    id: 'standard',
    name: 'Standard Setup',
    price: 575,
    hours: '2–3 hours',
    blurb: 'Up to 15 devices, automations and a dashboard',
    summary: 'A working smart home with automations and a dashboard built for you.',
    features: [
      'Everything in Basic',
      'Up to 15 devices connected',
      'Everyday automations (lighting schedules and more)',
      'Custom dashboard',
      '1-hour training session',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Setup',
    price: 1050,
    hours: '3–4 hours',
    featured: true,
    blurb: 'Up to 25 devices, energy monitoring and miner control',
    summary: 'The whole house: advanced automations, energy monitoring, and mining heaters.',
    features: [
      'Everything in Standard',
      'Up to 25 devices connected',
      'Advanced automations and scripts',
      'Energy monitoring dashboards',
      'Bitcoin miner integration',
      '2-hour training session',
      '30 days of help included',
    ],
  },
];

export const usd = (n) => `$${n.toLocaleString('en-US')}`;
export const sats = (n) => `${n.toLocaleString('en-US')} sats`;

// The Antminer S9 price, in sats. Shown on its card, on the home page and in the
// heater FAQ. Change it here only.
export const S9_PRICE_SATS = 80000;

// `heat` is the wattage converted to BTU per hour (watts × 3.412), rounded.
// Add `price: 'From $199'` (any text) to a miner to show a price on its card.
export const MINERS = [
  {
    id: 'nano3s',
    short: 'Nano 3S',
    name: 'Canaan Avalon Nano 3S',
    use: 'Desk, bedroom, or small office',
    power: 'About 140\u00a0W',
    heat: 'About 480 BTU/h',
    image: '/assets/nano3-2.jpg',
    imageAlt: 'Canaan Avalon Nano bitcoin mining heater with its box and power supply',
    description:
      'Small and quiet, and it mines about 6 TH/s, half again what the original Nano 3 managed on the same 140\u00a0W. That takes the chill off a desk or a small room; it won’t heat one alone. The easiest way to start mining at home. Plugs into a normal outlet.',
  },
  {
    id: 'bitaxe',
    short: 'BitAxe',
    name: 'BitAxe',
    use: 'Learning and tinkering',
    power: 'About 15\u00a0W',
    description:
      'Open-source, home-built miners about the size of a phone. Not much heat, but the best way to learn how mining works. Available in several configurations.',
  },
  {
    id: 's9',
    short: 'S9',
    name: 'Bitmain Antminer S9',
    use: 'Garage, workshop, or ducted into a room',
    power: 'About 1,300\u00a0W',
    heat: 'About 4,400 BTU/h',
    price: `${sats(S9_PRICE_SATS)} + shipping, or local delivery`,
    image: '/assets/s9i-1.jpg',
    imageAlt: 'Antminer S9 bitcoin miner fitted with a duct shroud and elbow to send heat into a room',
    description:
      'The old flagship miner, now a strong space heater: nearly the output of a plug-in heater on high. Loud out of the box. Some units come with Noctua fan mods for quieter running, or a shroud to connect to ductwork. Runs on a standard 120\u00a0V circuit.',
  },
  {
    id: 's19',
    short: 'S19',
    name: 'Bitmain Antminer S19',
    use: 'Large spaces, ducted heat',
    power: 'About 3,000\u00a0W (240\u00a0V)',
    heat: 'About 10,200 BTU/h',
    description:
      'Much more hashrate than the S9, and more efficient. Enough heat for a large room or a shop. Needs a 240\u00a0V circuit and is best ducted or kept out of living spaces because of the noise.',
  },
  {
    id: 's21',
    short: 'S21',
    name: 'Bitmain Antminer S21',
    use: 'Serious heat mining',
    power: 'About 3,500\u00a0W (240\u00a0V)',
    heat: 'About 11,900 BTU/h',
    description:
      'The most efficient machine I sell, so the most bitcoin for each watt of heat. For a big space, a shop, or a ducted whole-room setup. Needs a 240\u00a0V circuit.',
  },
];

// Accessories and BitAxe bodies, shown on /shop#accessories and linked from the
// matching heater cards. Leave the list empty to hide the section.
//   kind:     'body' (BitAxe body, buyer's own miner), 'printed' (3D-printed part),
//             'file' (download only), or 'both' (file or printed part)
//   fits:     miner ids from MINERS above, so those heater cards link here
//   fitsNote: what to show in the "Fits" row, when the ids alone don't say enough
//   price:    in sats (shipping extra), 0 for free, or null for "ask"
//   squareUrl: a Square payment link for paying by card (adds a "Pay by card" button)
//   fileUrl:  where a file lives (Printables/GitHub page, or /files/name.zip in public/)
//   storyUrl: the build write-up (e.g. on Stacker News)
//   sample:   true marks placeholder content; Vercel builds refuse to publish it
export const ACCESSORIES = [
  {
    id: 'guitaxe',
    short: 'Guitaxe',
    name: 'Guitaxe',
    kind: 'body',
    fits: ['bitaxe'],
    fitsNote: 'Your BitAxe (body only)',
    price: 105000,
    image: '/assets/guitaxe.jpg',
    imageAlt:
      'Guitaxe: a miniature black guitar on a bookshelf with a plaque reading “This machine kills fascists (and tyrants of every flavor)”',
    description:
      'A tabletop guitar for your BitAxe. It borrows the slogan from Woody Guthrie’s guitar and amends it: “This machine kills fascists (and tyrants of every flavor).” The miner sits inside the body and its screen lives in the neck. Body only; bring your own BitAxe.',
    storyUrl: 'https://stacker.news/items/1596515',
    squareUrl: '', // paste this item's Square payment link to add a card option
  },
  {
    id: 'blockspecht',
    short: 'Blockspecht',
    name: 'Blockspecht',
    kind: 'body',
    fits: ['bitaxe'],
    fitsNote: 'Your BitAxe (body only)',
    price: 84000,
    image: '/assets/blockspecht.jpg',
    imageAlt:
      'Blockspecht: a 3D-printed slab of the Berlin Wall covered in bitcoin graffiti, with a BitAxe fan showing through a breach',
    description:
      'The “block woodpecker,” the follow-up to the Guitaxe: a slab of the Berlin Wall for your BitAxe, tagged “Wir sind das Netzwerk,” “This wall will fall,” “Satoshi was here” and “Freiheit.” The fan hashes through a breach in the wall. Body only; bring your own BitAxe.',
    storyUrl: 'https://stacker.news/items/1611215',
    squareUrl: '', // paste this item's Square payment link to add a card option
  },
  {
    id: 'woody-s9',
    short: 'S9 Woody plaque',
    name: 'S9 Woody plaque',
    kind: 'printed',
    fits: ['s9'],
    fitsNote: 'Antminer S9 (plaque only)',
    price: 21000,
    image: '/assets/woody-s9.jpg',
    imageAlt:
      'Antminer S9 space heater ducted into a metal elbow, with an orange plaque reading “This space heater kills fascists (and tyrants of every flavor)”',
    description:
      'A 3D-printed plaque for the Antminer S9 that reads “This space heater kills fascists (and tyrants of every flavor).” It’s the middle child of the Woody series, between the Guitaxe and the furnace. Plaque only; the S9 and duct aren’t included.',
    storyUrl: 'https://stacker.news/items/1600205',
    squareUrl: '', // paste this item's Square payment link to add a card option
  },
  {
    id: 'woody-furnace-shroud',
    short: 'Woody furnace shroud',
    name: 'Woody furnace shroud',
    kind: 'printed',
    fits: [],
    fitsNote: 'Miners ducted into an AC Infinity inline fan',
    price: 63000,
    image: '/assets/woody-shroud.jpg',
    imageAlt:
      'Woody furnace shroud: a 3D-printed duct shroud with an orange plaque reading “This furnace kills fascists (and tyrants of every flavor)”',
    description:
      'A 3D-printed shroud that connects a miner to an AC Infinity inline fan, so you can duct the heat into your furnace or a room and keep the noise down. It wears its own amended Woody plaque: “This furnace kills fascists (and tyrants of every flavor).” Tell me which miner you have and I’ll confirm the fit.',
    storyUrl: 'https://stacker.news/items/1596515',
    squareUrl: '', // paste this item's Square payment link to add a card option
  },
];

export const ACCESSORY_INTEREST = 'BitAxe case, Woody plaque or shroud';

export const accessoryLink = (name) =>
  `/contact?interest=${encodeURIComponent(ACCESSORY_INTEREST)}&item=${encodeURIComponent(name)}`;

// The last row is one where the subscription companies win. It stays in on purpose.
export const NO_SUBSCRIPTION_COMPARISON = [
  { label: 'Monthly fee', them: 'Yes, for as long as you use it', us: 'None. You pay once.' },
  { label: 'Cost over five years', them: '$1,800 at $30 a month, and it keeps going', us: '$315 to $1,050, paid once' },
  { label: 'If the company’s servers go down', them: 'Devices can stop working', us: 'Keeps running, because it all lives in your house' },
  { label: 'Where your camera and sensor data goes', them: 'Their cloud', us: 'Your hardware, in your home' },
  { label: 'Mixing device brands', them: 'Usually limited to theirs', us: 'Thousands of brands work together' },
  { label: 'Who owns it', them: 'You rent access', us: 'You own the hardware and the software' },
  { label: 'A call center watching for alarms', them: 'Often part of the plan', us: 'No. Alerts go to your phone.' },
];

export const HOME_FAQ = [
  {
    q: 'Do I have to pay a monthly fee?',
    a: 'No. You pay once for the installation, and everything installed is yours. If you want help later, you book a single visit. There is no plan to sign up for.',
  },
  {
    q: 'Who does the work?',
    a: `I do. I’m ${SITE.owner}, and C-54 HomeTech is a one-person business, so the person who answers your email is the person who shows up at your door.`,
  },
  {
    q: 'Will it keep working if my internet goes down?',
    a: 'Yes. Home Assistant runs on a small computer inside your home, so your automations and local controls keep working offline. Remote access from your phone is optional.',
  },
  {
    q: 'What devices work with it?',
    a: 'Thousands. Zigbee, Z-Wave, Matter and Wi-Fi devices from Philips Hue, IKEA, Lutron, Ecobee, Shelly and many others. Send me your list and I’ll check it before you pay anything.',
  },
  {
    q: 'Is this a monitored security system?',
    a: 'No. Nobody at a call center watches your house or sends the police. Home Assistant sends alerts from your door, motion and leak sensors straight to your phone, and you decide what to do. If you need professional monitoring, this doesn’t replace it.',
  },
  {
    q: 'Do I need to care about Bitcoin?',
    a: 'No. A smart home install has nothing to do with Bitcoin unless you want it to. The mining heaters are a separate thing I sell.',
  },
  {
    q: 'Where do you install?',
    a: 'In person across Greater Cincinnati, Dayton, Northern Kentucky, Lexington and Southeast Indiana: Hamilton County and the 21 counties around it, plus Lexington, KY. Not sure if you’re in range? Ask.',
  },
];

export const HA_FAQ = [
  {
    q: 'What hardware do I need?',
    a: 'A small computer that stays on: a Raspberry Pi 4 or 5, a mini PC, an old laptop or desktop, or the official Home Assistant Green. Hardware isn’t included in the package price. I’ll help you pick what fits your home, or use what you already have.',
  },
  {
    q: 'How long does installation take?',
    a: 'Basic takes about 1–2 hours, Standard 2–3 hours, and Premium 3–4 hours, all done in your home.',
  },
  {
    q: 'I started setting up Home Assistant and got stuck. Can you finish it?',
    a: 'Yes. Tell me what’s running and where it stopped, and I’ll quote a flat price to finish it.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, one visit at a time. Book a follow-up whenever you need one. I don’t sell support plans or subscriptions, and Premium includes 30 days of help after the install.',
  },
  {
    q: 'What happens if you stop doing this?',
    a: 'Nothing changes at your house. Home Assistant is free, open-source software with a large community behind it. It runs on hardware you own, and you’ll have the admin login. Anyone who knows Home Assistant can pick up where I left off, including you.',
  },
  {
    q: 'Can I control things from my phone when I’m away?',
    a: 'Yes, if you want that. I set up remote access in a way that doesn’t depend on a paid cloud plan.',
  },
  {
    q: 'Can you connect my existing smart devices?',
    a: 'Most likely. Home Assistant works with thousands of brands, including a lot of gear that was built for other apps. Send me a list and I’ll confirm before you book.',
  },
  {
    q: 'My home is bigger than 25 devices. Can you still help?',
    a: 'Yes. Tell me what you have and I’ll quote a flat price for the whole job.',
  },
];

export const HEATER_FAQ = [
  {
    q: 'Does a bitcoin heater pay for itself?',
    a: 'Sometimes, and nobody can promise when. A miner makes exactly as much heat per watt as any electric heater, so next to a plug-in space heater you get the same heat for the same electricity, plus bitcoin. Next to a gas furnace, electric heat usually costs more, so the bitcoin has to cover the difference. What a miner earns moves with the bitcoin price, network difficulty and your electric rate. I’ll work through your numbers before you buy, and if they don’t add up I’ll tell you.',
  },
  {
    q: 'How loud is a bitcoin miner?',
    a: 'The Nano 3S and BitAxe are quiet enough to sit on a desk. Full-size Antminers are loud, closer to a shop vac than a space heater. They belong in a garage, basement or workshop, or ducted into the room from somewhere else. Quieter fans help too.',
  },
  {
    q: 'Do I need special wiring?',
    a: 'The Nano 3S, BitAxe and S9 plug into a normal 120\u00a0V outlet. The S19 and S21 need a 240\u00a0V circuit, the kind an electric dryer uses.',
  },
  {
    q: 'Can a miner run on a thermostat?',
    a: 'Yes. With Home Assistant a miner behaves like any thermostat-controlled heater: on when the room is cold, off when it’s warm or when power is expensive. The Premium smart home package includes miner integration.',
  },
  {
    q: 'How much do the heaters cost?',
    a: `The Antminer S9 is ${sats(S9_PRICE_SATS)} plus shipping. Prices for the other machines move with the bitcoin market and with what I have in stock, so ask and I’ll send current prices for the ones that fit your space.`,
  },
  {
    q: 'Do you ship?',
    a: `Yes, anywhere in the US. If you’re local, I’m happy to deliver it myself instead. In-person setup is available across ${SITE.regionLong}.`,
  },
];

// Every county, then every town listed under it, for search engines.
export const areaServedSchema = () => [
  ...SERVICE_AREA.flatMap(({ state, counties }) =>
    counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c} County, ${state}` }))
  ),
  ...SERVICE_AREA.flatMap(({ abbr, counties, towns }) =>
    counties.flatMap((c) => (towns?.[c] || []).map((t) => ({ '@type': 'City', name: `${t}, ${abbr}` })))
  ),
];

export const businessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: `${SITE.url}/`,
  email: SITE.email,
  image: `${SITE.url}${SITE.ogImage}`,
  logo: `${SITE.url}/logo512.png`,
  description: `Home Assistant smart home installation with no monthly fees, and Bitcoin mining heaters, serving ${SITE.regionLong}.`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  priceRange: '$315–$1,050',
  areaServed: areaServedSchema(),
  sameAs: [SITE.stackerNews.url, SITE.nostr.url],
  knowsAbout: ['Home Assistant', 'Smart home automation', 'Bitcoin mining', 'Heat reuse', 'Zigbee', 'Z-Wave', 'Matter'],
});

// Every indexable route. prerender.js renders each one and builds sitemap.xml from this list.
export const ROUTES = [
  '/',
  '/home-assistant',
  '/bitcoin-heaters',
  '/about',
  '/contact',
  '/learn',
  '/shop',
  '/donate',
  '/fun',
];
