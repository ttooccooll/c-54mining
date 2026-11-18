import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand, Faq, ServiceArea, faqSchema } from '../components/Blocks';
import { HOME_FAQ, NO_SUBSCRIPTION_COMPARISON, SITE, businessSchema } from '../content/site';

const STEPS = [
  { title: 'Tell us what you have', text: 'Send a short note about your home and the devices you own or want. No account, no sales call.' },
  { title: 'Get a flat price', text: 'We quote one fixed price up front. Most homes fit one of three packages.' },
  { title: 'We install and teach you', text: 'Everything is set up in person, and we walk you through it so you never depend on us.' },
  { title: 'You own it', text: 'No contract, no renewal, no monthly bill. If you want help later, book a one-time visit.' },
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
      <p className="eyebrow">Home Assistant installer · Cincinnati, Dayton, Lexington, NKY &amp; SE Indiana</p>
      <h1>A smart home you own outright. No monthly fees, ever.</h1>
      <p className="lead">
        We install Home Assistant on hardware that lives in your house, then connect your lights, locks, thermostats,
        cameras and sensors from almost any brand. It all runs locally, so it keeps working when the internet doesn’t and
        nobody is harvesting your data. You pay once. That’s it.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn btn-primary btn-lg">Get a free quote</Link>
        <Link to="/home-assistant" className="btn btn-outline btn-lg">See pricing</Link>
      </div>
      <ul className="trust">
        <li>One-time price, never a subscription</li>
        <li>Works without the internet</li>
        <li>Your data stays in your house</li>
        <li>Installed in person, from $315</li>
      </ul>
    </section>

    <section aria-labelledby="services">
      <h2 id="services" className="section-title">What we do</h2>
      <div className="cards">
        <article className="card">
          <h3>Smart home installation</h3>
          <p>
            Home Assistant set up in your home and connected to the devices you already own, with automations and a
            dashboard built around how you live.
          </p>
          <p className="card-price">From $315, one time</p>
          <Link to="/home-assistant" className="card-link">See packages →</Link>
        </article>
        <article className="card">
          <h3>Bitcoin mining heaters</h3>
          <p>
            A space heater that earns bitcoin. A miner turns every watt it uses into heat, so in the cold months you heat
            your home and mine at the same time.
          </p>
          <p className="card-price">Nano 3S to Antminer S21</p>
          <Link to="/bitcoin-heaters" className="card-link">Browse heaters →</Link>
        </article>
        <article className="card">
          <h3>Pay with mining rewards</h3>
          <p>
            Want a mining heater without the full price up front? Ask about splitting the mining rewards with us for an
            agreed period instead.
          </p>
          <p className="card-price">Terms on request</p>
          <Link to="/bitcoin-heaters#pay-with-mining" className="card-link">How it works →</Link>
        </article>
      </div>
    </section>

    <section className="panel" aria-labelledby="why-no-sub">
      <h2 id="why-no-sub">Why we don’t sell subscriptions</h2>
      <p>
        Most smart home and security companies make their money every month, for as long as you live there. We don’t
        think you should rent your own house back from anyone.
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
        <h2 id="heat">Heat that pays you back</h2>
        <p>
          A bitcoin miner turns electricity into heat just like a space heater does, and it earns bitcoin along the way.
          Put that heat in your garage, workshop, basement or living room instead of a data center somewhere. Connected
          to Home Assistant, it runs on a thermostat schedule like any other heater.
        </p>
        <p className="muted">
          What a miner earns depends on the bitcoin price, network difficulty and your electric rate. We’ll run the
          numbers with you honestly before you buy.
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
      <h2 id="mission" className="sr-only">Our mission</h2>
      <blockquote>
        <p>
          “This technology goes around blockades and government restrictions, it allows you to move value without
          trusting anyone, it connects you to the world, and it allows you to empower yourself and do things that are
          otherwise impossible.”
        </p>
        <footer>Alex Gladstein, <cite>Check Your Financial Privilege</cite></footer>
      </blockquote>
      <p>
        We’re named for the C-54 transports of the Berlin Airlift. Privacy, energy independence, and tools that let
        regular people opt out of failing systems. <Link to="/about">Read why →</Link>
      </p>
    </section>

    <ServiceArea />
    <Faq items={HOME_FAQ} />
    <CtaBand />
  </div>
);

export default HomePage;
