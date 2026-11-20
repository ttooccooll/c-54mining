import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand, Faq, ServiceArea, faqSchema } from '../components/Blocks';
import { HA_TIERS, HOME_FAQ, NO_SUBSCRIPTION_COMPARISON, SITE, businessSchema, usd } from '../content/site';

// Things a finished install does. Plain examples sell this better than a feature list.
const EXAMPLES = [
  'The porch and hall lights come on when you pull into the driveway after dark.',
  'Your phone buzzes when the basement leak sensor gets wet, or when the garage door is still open at 10 p.m.',
  'The thermostat sets back when the last person leaves and warms the house before the first one is home.',
  'One screen on the kitchen tablet runs the Hue bulbs, the Ecobee and the Lutron dimmers, so nobody needs three apps.',
  'Every light downstairs goes off from one button by the bed.',
  'The workshop miner turns on when the room drops below 60° and shuts off once it’s warm.',
];

const STEPS = [
  {
    title: 'Tell me what you have',
    text: `Send a short note about your home and the devices you own or want. I reply within ${SITE.replyTime}.`,
  },
  { title: 'Get a flat price', text: 'I quote one fixed price before any work starts. Most homes fit one of three packages.' },
  {
    title: 'I install it and teach you',
    text: 'I set everything up at your house, then walk you through it until you can change things without me.',
  },
  { title: 'It’s yours', text: 'You keep the hardware, the software and the logins. If you want help later, book a single visit.' },
];

const HomePage = () => (
  <div className="page">
    <Seo
      title="Cincinnati Home Assistant Setup, No Monthly Fees | C-54 HomeTech"
      description="Home Assistant smart home installs in Greater Cincinnati, Dayton, Lexington, NKY and SE Indiana. One flat price, no monthly fees. Bitcoin heaters too."
      path="/"
      jsonLd={[
        businessSchema(),
        { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: `${SITE.url}/` },
        faqSchema(HOME_FAQ),
      ]}
    />

    <section className="hero">
      <p className="eyebrow">Home Assistant installer for Cincinnati, Dayton, Lexington, NKY &amp; SE Indiana</p>
      <h1>A smart home you own outright. No monthly fees, ever.</h1>
      <p className="lead">
        I’m {SITE.owner}. I install Home Assistant on a small computer that stays in your house, then connect the
        lights, locks, thermostats, cameras and sensors you already own, whatever the brand. It keeps working when the
        internet is down, your data never leaves the house, and you pay once.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn btn-primary btn-lg">Get a free quote</Link>
        <Link to="/home-assistant" className="btn btn-outline btn-lg">See pricing</Link>
      </div>
      <ul className="trust">
        <li>Packages from $315, installed in person</li>
        <li>A flat price before any work starts</li>
        <li>A reply within {SITE.replyTime}</li>
      </ul>
    </section>

    <section className="panel" aria-labelledby="everyday">
      <h2 id="everyday">What it does on an ordinary day</h2>
      <p>
        Most smart devices want their own app and their own account. Home Assistant puts them all on one system in
        your house and runs them by rules you choose. For example:
      </p>
      <ul className="examples">
        {EXAMPLES.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <p className="muted">
        I run my own house on Home Assistant, and I build yours around the devices you have and the way your household
        runs.
      </p>
    </section>

    <section aria-labelledby="prices">
      <h2 id="prices" className="section-title">Three packages, each paid once</h2>
      <div className="price-row">
        {HA_TIERS.map((t) => (
          <Link key={t.id} to="/home-assistant#pricing" className="price-cell">
            <span className="price-name">{t.name}</span>
            <span className="price-amount">{usd(t.price)}</span>
            <span className="price-blurb">{t.blurb}</span>
          </Link>
        ))}
      </div>
      <p className="section-sub">
        Hardware is separate, and you may already own it. <Link to="/home-assistant">See what each package includes</Link>.
      </p>
    </section>

    <section className="panel" aria-labelledby="why-no-sub">
      <h2 id="why-no-sub">Why I don’t sell subscriptions</h2>
      <p>
        Most smart home and security companies get paid every month for as long as you live there. I don’t think you
        should have to rent your own house back from anyone.
      </p>
      <div className="table-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th scope="col"><span className="sr-only">Question</span></th>
              <th scope="col">Typical subscription smart home</th>
              <th scope="col">C-54 HomeTech</th>
            </tr>
          </thead>
          <tbody>
            {NO_SUBSCRIPTION_COMPARISON.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.them}</td>
                <td className="us">{row.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="how">
      <h2 id="how" className="section-title">How it works</h2>
      <ol className="steps">
        {STEPS.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="panel split" aria-labelledby="heat">
      <div>
        <h2 id="heat">A heater that mines bitcoin</h2>
        <p>
          A bitcoin miner turns electricity into heat the same way a space heater does, and it earns a little bitcoin
          while it runs. I heat my own house with them. Put one in the garage, workshop, basement or living room,
          connect it to Home Assistant, and it follows a thermostat schedule like any other heater.
        </p>
        <p className="muted">
          What a miner earns depends on the bitcoin price, network difficulty and your electric rate. I’ll go through
          the numbers with you before you buy. If you’d rather not pay for one up front,{' '}
          <Link to="/bitcoin-heaters#pay-with-mining">ask about paying with mining rewards</Link>.
        </p>
        <Link to="/bitcoin-heaters" className="btn btn-outline">Browse mining heaters</Link>
      </div>
      <img
        src="/assets/nano3-4.jpg"
        alt="Avalon Nano bitcoin mining heater on a living room shelf between houseplants"
        width="1000"
        height="680"
        loading="lazy"
        className="split-img"
      />
    </section>

    <section className="mission" aria-labelledby="mission">
      <h2 id="mission" className="sr-only">Why the name</h2>
      <blockquote>
        <p>
          “This technology goes around blockades and government restrictions, it allows you to move value without
          trusting anyone, it connects you to the world, and it allows you to empower yourself and do things that are
          otherwise impossible.”
        </p>
        <footer>Alex Gladstein, <cite>Check Your Financial Privilege</cite></footer>
      </blockquote>
      <p>
        The business is named for the C-54, one of the transport planes that flew food and coal into blockaded West
        Berlin in 1948 and 1949. I think a home that answers only to the people living in it belongs to the same
        tradition. <Link to="/about">Why the name</Link>
      </p>
    </section>

    <ServiceArea />
    <Faq items={HOME_FAQ} heading="Common questions" />
    <CtaBand />
  </div>
);

export default HomePage;
