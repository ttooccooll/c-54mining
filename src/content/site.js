// Single source of truth for business facts, pricing, and page metadata.
// Used by the React pages and by scripts/prerender.js (static HTML + sitemap),
// so a change here updates the site, the crawler-readable HTML, and the sitemap.

export const SITE = {
  name: 'C-54 HomeTech',
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
// plus Fayette County (Lexington). `notes` labels a county with its main city.
export const SERVICE_AREA = [
  {
    state: 'Ohio',
    abbr: 'OH',
    counties: ['Hamilton', 'Butler', 'Warren', 'Clermont', 'Montgomery', 'Greene', 'Clinton', 'Brown', 'Preble'],
  },
  {
    state: 'Kentucky',
    abbr: 'KY',
    counties: ['Boone', 'Kenton', 'Campbell', 'Grant', 'Pendleton', 'Bracken', 'Gallatin', 'Fayette'],
    notes: { Fayette: 'Lexington' },
  },
  {
    state: 'Indiana',
    abbr: 'IN',
    counties: ['Dearborn', 'Franklin', 'Union', 'Ohio', 'Ripley', 'Switzerland'],
  },
];

export const SERVICE_CITIES = [
  'Cincinnati', 'Dayton', 'Hamilton', 'Fairfield', 'West Chester', 'Mason', 'Lebanon',
  'Middletown', 'Milford', 'Batavia', 'Covington', 'Newport', 'Florence', 'Lawrenceburg', 'Lexington',
];

export const countyLabel = (state, county) =>
  `${county} County, ${state.abbr}${state.notes?.[county] ? ` (${state.notes[county]})` : ''}`;

export const HA_TIERS = [
  {
    id: 'basic',
    name: 'Basic Setup',
    price: 315,
    hours: '1–2 hours',
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

export const MINERS = [
  {
    id: 'nano3s',
    short: 'Nano 3S',
    name: 'Canaan Avalon Nano 3S',
    use: 'Desk, bedroom, or small office',
    power: 'About 140 W',
    image: '/assets/nano3-2.jpg',
    imageAlt: 'Canaan Avalon Nano bitcoin mining heater with its box and power supply',
    description:
      'A small, quiet heater that mines about 6 TH/s, half again as much as the original Nano 3 on the same 140 W. Good supplemental heat for one room and the easiest way to start mining at home. Plugs into a normal outlet.',
  },
  {
    id: 'bitaxe',
    short: 'BitAxe',
    name: 'BitAxe',
    use: 'Learning and tinkering',
    power: 'About 15 W',
    description:
      'Open-source, home-built miners about the size of a phone. Not much heat, but the best way to learn how mining works. Available in several configurations.',
  },
  {
    id: 's9',
    short: 'S9',
    name: 'Bitmain Antminer S9',
    use: 'Garage, workshop, or ducted into a room',
    power: 'About 1,300 W',
    image: '/assets/s9i-1.jpg',
    imageAlt: 'Antminer S9 bitcoin miner fitted with a duct shroud and elbow to send heat into a room',
    description:
      'The old flagship miner, now a strong space heater. Loud out of the box. Some units come with Noctua fan mods for quieter running, or a shroud to connect to ductwork. Runs on a standard 120 V circuit.',
  },
  {
    id: 's19',
    short: 'S19',
    name: 'Bitmain Antminer S19',
    use: 'Large spaces, ducted heat',
    power: 'About 3,000 W (240 V)',
    description:
      'Much more hashrate and more efficient than the S9. Enough heat for a large room or shop. Needs a 240 V circuit and is best ducted or kept out of living spaces because of noise.',
  },
  {
    id: 's21',
    short: 'S21',
    name: 'Bitmain Antminer S21',
    use: 'Serious heat mining',
    power: 'About 3,500 W (240 V)',
    description:
      'The newest generation and the most bitcoin per watt. For a big space, a shop, or a ducted whole-room setup. Needs a 240 V circuit.',
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
      'A tabletop guitar for your BitAxe, after Woody Guthrie’s famous plaque, amended: “This machine kills fascists (and tyrants of every flavor).” The miner sits inside the body and its screen lives in the neck. Body only; bring your own BitAxe.',
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
      'Turn your S9 into a statement: a 3D-printed plaque reading “This space heater kills fascists (and tyrants of every flavor).” The middle child of the Woody series, between the Guitaxe and the furnace. Plaque only; the S9 and duct aren’t included.',
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
      'A 3D-printed shroud that connects a miner to an AC Infinity inline fan, so you can duct the heat into your furnace or a room and keep the noise down. It wears its own amended Woody plaque: “This furnace kills fascists (and tyrants of every flavor).” Ask about a fit for your machine.',
    storyUrl: 'https://stacker.news/items/1596515',
    squareUrl: '', // paste this item's Square payment link to add a card option
  },
];

export const ACCESSORY_INTEREST = 'BitAxe case, Woody plaque or shroud';

export const accessoryLink = (name) =>
  `/contact?interest=${encodeURIComponent(ACCESSORY_INTEREST)}&item=${encodeURIComponent(name)}`;

export const NO_SUBSCRIPTION_COMPARISON = [
  { label: 'Monthly fee', them: 'Yes, for as long as you use it', us: 'None. You pay once.' },
  { label: 'If the company’s servers go down', them: 'Devices can stop working', us: 'Keeps running, because it all lives in your house' },
  { label: 'Where your camera and sensor data goes', them: 'Their cloud', us: 'Your hardware, in your home' },
  { label: 'Mixing device brands', them: 'Usually limited to theirs', us: 'Thousands of brands work together' },
  { label: 'Who owns it', them: 'You rent access', us: 'You own the hardware and the software' },
];

export const HOME_FAQ = [
  {
    q: 'Do I have to pay a monthly fee?',
    a: 'No, never. You pay once for the installation and you own everything. If you want help later, book a one-time visit. There’s no plan and no contract.',
  },
  {
    q: 'Will it keep working if my internet goes down?',
    a: 'Yes. Home Assistant runs on a small computer inside your home, so your automations and local controls keep working offline. Remote access from your phone is optional.',
  },
  {
    q: 'What devices work with it?',
    a: 'Thousands. Zigbee, Z-Wave, Matter and Wi-Fi devices from brands like Philips Hue, IKEA, Lutron, Ecobee, Shelly and many more. Send us your list and we’ll check before you pay anything.',
  },
  {
    q: 'Do I need to care about Bitcoin?',
    a: 'No. A smart home install has nothing to do with Bitcoin unless you want it to. The mining heaters are there if you’re curious.',
  },
  {
    q: 'Where do you install?',
    a: 'In person across Greater Cincinnati, Dayton, Northern Kentucky, Lexington and Southeast Indiana: Hamilton County and the 21 counties around it, plus Lexington, KY. Not sure if you’re in range? Ask.',
  },
];

export const HA_FAQ = [
  {
    q: 'What hardware do I need?',
    a: 'A small computer that stays on: a Raspberry Pi 4 or 5, a mini PC, an old laptop or desktop, or the official Home Assistant Green. Hardware isn’t included in the package price. We’ll help you pick what fits your home, or use what you already have.',
  },
  {
    q: 'How long does installation take?',
    a: 'Basic takes about 1–2 hours, Standard 2–3 hours, and Premium 3–4 hours, all done in your home.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, as one-time help: book a follow-up visit or session whenever you need one. We don’t sell support plans or subscriptions, and Premium includes 30 days of help after install.',
  },
  {
    q: 'Can I control things from my phone when I’m away?',
    a: 'Yes, if you want to. We set up remote access so it doesn’t depend on a paid cloud plan.',
  },
  {
    q: 'Can you connect my existing smart devices?',
    a: 'Most likely. Home Assistant works with thousands of brands, including a lot of gear that was built for other apps. Send us a list and we’ll confirm before you book.',
  },
  {
    q: 'My home is bigger than 25 devices. Can you still help?',
    a: 'Yes. Tell us what you have and we’ll quote a flat price for the whole job.',
  },
];

export const usd = (n) => `$${n.toLocaleString('en-US')}`;
export const sats = (n) => `${n.toLocaleString('en-US')} sats`;

export const areaServedSchema = () =>
  SERVICE_AREA.flatMap(({ state, counties }) =>
    counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c} County, ${state}` }))
  );

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
