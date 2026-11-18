import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand } from '../components/Blocks';
import { ACCESSORIES, MINERS } from '../content/site';

const heaterLink = (name) =>
  `/contact?interest=${encodeURIComponent('Bitcoin mining heater')}&item=${encodeURIComponent(name)}`;

const BitcoinHeatersPage = () => (
  <div className="page">
    <Seo
      title="Bitcoin Mining Heaters for Sale in Cincinnati | C-54 HomeTech"
      description="Bitcoin miners set up as space heaters: Avalon Nano 3S, BitAxe, Antminer S9, S19 and S21. Heat your home and earn bitcoin. Local setup, US shipping."
      path="/bitcoin-heaters"
    />

    <section className="hero hero-sm">
      <p className="eyebrow">Bitcoin heat mining · Ships within the US</p>
      <h1>Bitcoin mining heaters</h1>
      <p className="lead">
        Every watt a bitcoin miner draws comes out as heat. A 1,300 W miner warms a room like a 1,300 W space heater,
        and it earns bitcoin while it does it. We sell miners set up for home heating, and install them in person
        around Greater Cincinnati.
      </p>
      <div className="hero-actions">
        <Link to={heaterLink('Not sure yet')} className="btn btn-primary btn-lg">Ask what’s in stock</Link>
        <a href="#pay-with-mining" className="btn btn-outline btn-lg">Pay with mining rewards</a>
      </div>
    </section>

    <section aria-labelledby="lineup">
      <h2 id="lineup" className="section-title">Pick a heater by the space you’re heating</h2>
      <p className="section-sub">Inventory changes, so contact us for what’s available now and current pricing.</p>
      <div className="cards">
        {MINERS.map((m) => (
          <article key={m.id} className="card miner">
            {m.image && (
              <img src={m.image} alt={m.imageAlt} width="600" height="450" loading="lazy" className="card-img" />
            )}
            <h3>{m.name}</h3>
            <dl className="specs">
              <div><dt>Best for</dt><dd>{m.use}</dd></div>
              <div><dt>Power</dt><dd>{m.power}</dd></div>
            </dl>
            <p>{m.description}</p>
            {ACCESSORIES.some((a) => a.fits.includes(m.id)) && (
              <p>
                <Link to={`/shop#accessory-${ACCESSORIES.find((a) => a.fits.includes(m.id)).id}`} className="card-link">
                  Accessories for the {m.short} →
                </Link>
              </p>
            )}
            <Link to={heaterLink(m.name)} className="btn btn-outline btn-block">Ask about the {m.short}</Link>
          </article>
        ))}
      </div>
    </section>

    <section id="pay-with-mining" className="panel feature" aria-labelledby="pay-heading">
      <h2 id="pay-heading">Pay with mining rewards</h2>
      <p>
        Don’t want to pay the full price up front? Ask about splitting the mining rewards instead. The heater runs in
        your home and keeps you warm, and a share of what it mines comes to us for an agreed period.
      </p>
      <p>
        The split, how long it runs, and who covers what depend on the machine and your electric rate. Ask, and we’ll
        lay it all out before anything is installed.
      </p>
      <Link to={`/contact?interest=${encodeURIComponent('Pay with mining rewards')}`} className="btn btn-primary">
        Ask about paying with mining rewards
      </Link>
    </section>

    <section className="panel" aria-labelledby="know">
      <h2 id="know">Good to know before you buy</h2>
      <ul className="benefits">
        <li>
          <strong>Earnings vary.</strong> What a miner makes depends on the bitcoin price, network difficulty and your
          electric rate. We’ll run the numbers with you honestly. In heating season you need the heat anyway, so the
          bitcoin it earns offsets what that heat costs you.
        </li>
        <li>
          <strong>Noise.</strong> Full-size ASICs are loud. They work best in a garage, basement or workshop, ducted
          into a room, or quieted with fan mods.
        </li>
        <li>
          <strong>Power.</strong> The Nano 3S, BitAxe and S9 run on a normal 120 V circuit. The S19 and S21 need 240 V.
        </li>
        <li>
          <strong>Smart control.</strong> With Home Assistant, a miner becomes a thermostat-controlled heater: on when
          the room is cold, off when it’s warm or power is expensive. <Link to="/home-assistant">See the Premium package</Link>.
        </li>
        <li>
          <strong>Mine your own way.</strong> We can help you point your miner at a pool you choose, or learn to run
          DATUM and build your own block templates. Curious how much home mining it would take to out-hash the big
          pools? Try{' '}
          <a href="https://hashratehearth.c54hometech.com/" target="_blank" rel="noopener noreferrer">
            Hashrate Hearth
          </a>
          .
        </li>
      </ul>
    </section>

    <section className="panel" aria-labelledby="donate-teaser">
      <h2 id="donate-teaser">Have an old miner collecting dust?</h2>
      <p>
        We take older ASICs, power supplies and parts and use them to teach people with stranded solar energy how to
        mine. <Link to="/donate">Donate a machine →</Link>
      </p>
    </section>

    <CtaBand
      heading="Find the right heater for your space"
      text="Tell us the room, the square footage, and your electric rate. We’ll suggest a machine and send current pricing."
      to={heaterLink('Not sure yet')}
      label="Ask about a heater"
    />
  </div>
);

export default BitcoinHeatersPage;
