import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand, Faq, PricingTiers, ServiceArea, faqSchema } from '../components/Blocks';
import { HA_FAQ, HA_TIERS, SITE, areaServedSchema } from '../content/site';

const WHY = [
  'Camera clips, sensor readings and the record of when you come and go stay on a computer in your house.',
  'Nothing in your home waits on a company’s servers. In 2022 Insteon switched off its cloud without warning, and the app its customers ran their homes with stopped working. In 2020 Wink began charging a monthly fee to keep using hubs people had already bought.',
  'Hue, IKEA, Lutron, Ecobee, Shelly and thousands of other brands run side by side, so you can buy whatever is best or cheapest.',
  'It tracks what your home uses, and it can run a bitcoin miner as a thermostat-controlled heater.',
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home Assistant installation',
  serviceType: 'Smart home installation',
  description:
    'In-home Home Assistant installation and setup with device integration, automations, dashboards and training. One-time price, no subscription.',
  provider: { '@id': `${SITE.url}/#business` },
  areaServed: areaServedSchema(),
  url: `${SITE.url}/home-assistant`,
  offers: HA_TIERS.map((t) => ({
    '@type': 'Offer',
    name: `Home Assistant ${t.name}`,
    price: String(t.price),
    priceCurrency: 'USD',
    description: t.features.join('; '),
  })),
};

const HomeAssistantPage = () => (
  <div className="page">
    <Seo
      title="Home Assistant Installation Pricing, Cincinnati | C-54 HomeTech"
      description="In-home Home Assistant setup in Greater Cincinnati, Lexington, NKY and SE Indiana. Flat prices from $315, on hardware you own. No subscriptions."
      path="/home-assistant"
      jsonLd={[serviceSchema, faqSchema(HA_FAQ)]}
    />

    <section className="hero hero-sm">
      <h1>Home Assistant installation in Greater Cincinnati</h1>
      <p className="lead">
        Home Assistant is free, open-source software that runs a whole smart home from a small computer in your house.
        It can do almost anything, and setting it up well can eat a lot of evenings. I do that part for you, in person,
        then teach you to run it. My own house runs on it. You pay one flat price and own all of it.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn btn-primary btn-lg">Get a free quote</Link>
        <a href="#pricing" className="btn btn-outline btn-lg">See the packages</a>
      </div>
    </section>

    <section aria-labelledby="pricing">
      <h2 id="pricing" className="section-title">Packages and pricing</h2>
      <p className="section-sub">Each package is one price, paid once. Nothing renews.</p>
      <PricingTiers />
      <p className="muted center">
        Bigger home, or a setup you started and got stuck on? <Link to="/contact">Ask for a flat quote</Link>. Hardware
        is separate. I’ll help you choose it or use what you have.
      </p>
    </section>

    <section className="panel" aria-labelledby="why-ha">
      <h2 id="why-ha">Why run it yourself instead of renting it</h2>
      <ul className="benefits">
        {WHY.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </section>

    <section className="panel" aria-labelledby="works-with">
      <h2 id="works-with">What I can connect</h2>
      <p>
        Lights and switches, smart plugs, thermostats, door locks, garage doors, cameras and doorbells, motion and
        door sensors, leak detectors, blinds, speakers and voice assistants, solar inverters and energy monitors, and
        bitcoin miners. Zigbee, Z-Wave, Matter, Thread and Wi-Fi devices all work, from Philips Hue, IKEA, Lutron,
        Ecobee, Shelly, Aqara and many others.
      </p>
      <p className="muted">Not sure about a device? Send me a list and I’ll check it before you book.</p>
    </section>

    <ServiceArea />
    <Faq items={HA_FAQ} heading="Home Assistant installation FAQ" />
    <CtaBand
      heading="Pick a package or ask a question"
      text={`Tell me about your home and I’ll confirm the right package and a flat price, within ${SITE.replyTime}.`}
    />
  </div>
);

export default HomeAssistantPage;
