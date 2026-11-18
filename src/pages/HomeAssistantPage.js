import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand, Faq, PricingTiers, ServiceArea, faqSchema } from '../components/Blocks';
import { HA_FAQ, HA_TIERS, SITE, areaServedSchema } from '../content/site';

const WHY = [
  { title: 'Privacy', text: 'Your camera, sensor and usage data stays on a computer in your home, not in someone’s cloud.' },
  { title: 'Control', text: 'You own your automation rules, and no company update can take features away.' },
  { title: 'Freedom', text: 'Works with thousands of devices across brands, so you’re never locked into one ecosystem.' },
  { title: 'Longevity', text: 'No dependency on company servers or subscriptions. If a brand shuts down its cloud, your home keeps working.' },
  { title: 'Energy', text: 'See what your home uses, automate around it, and connect bitcoin miners as smart heaters.' },
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
      description="Professional Home Assistant setup in Greater Cincinnati, Lexington, NKY and SE Indiana. Flat prices from $315, on hardware you own. No subscriptions."
      path="/home-assistant"
      jsonLd={[serviceSchema, faqSchema(HA_FAQ)]}
    />

    <section className="hero hero-sm">
      <p className="eyebrow">Smart home installation · {SITE.region}</p>
      <h1>Home Assistant installation in Greater Cincinnati</h1>
      <p className="lead">
        Home Assistant is free, open-source software that runs your whole smart home locally, on a small computer in
        your house. It’s powerful, but setting it up well takes time. We do that part in person, then teach you how to
        run it yourself. One flat price, and you own all of it.
      </p>
    </section>

    <section aria-labelledby="pricing">
      <h2 id="pricing" className="section-title">Packages and pricing</h2>
      <p className="section-sub">Every package is a one-time price. No monthly fee, no contract, no renewal.</p>
      <PricingTiers />
      <p className="muted center">
        Bigger home or more devices? <Link to="/contact">Ask for a flat quote</Link>. Hardware is separate. We’ll help
        you choose it or use what you have.
      </p>
    </section>

    <section className="panel" aria-labelledby="why-ha">
      <h2 id="why-ha">Why self-hosted Home Assistant?</h2>
      <ul className="benefits">
        {WHY.map((w) => (
          <li key={w.title}>
            <strong>{w.title}.</strong> {w.text}
          </li>
        ))}
      </ul>
    </section>

    <section className="panel" aria-labelledby="works-with">
      <h2 id="works-with">What we can connect</h2>
      <p>
        Lights and switches, smart plugs, thermostats, door locks, garage doors, cameras and doorbells, motion and
        door sensors, leak detectors, blinds, speakers and voice assistants, solar inverters and energy monitors, and
        bitcoin miners. Zigbee, Z-Wave, Matter, Thread and Wi-Fi devices all work, from brands like Philips Hue, IKEA,
        Lutron, Ecobee, Shelly, Aqara and many more.
      </p>
      <p className="muted">Not sure about a device? Send us a list and we’ll check before you book.</p>
    </section>

    <ServiceArea />
    <Faq items={HA_FAQ} heading="Home Assistant installation FAQ" />
    <CtaBand heading="Pick a package or ask a question" text="Tell us about your home and we’ll confirm the right package and a flat price." />
  </div>
);

export default HomeAssistantPage;
