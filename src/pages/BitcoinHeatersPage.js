import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand, Faq, faqSchema } from '../components/Blocks';
import { ACCESSORIES, HEATER_FAQ, MINERS } from '../content/site';

const heaterLink = (name) =>
  `/contact?interest=${encodeURIComponent('Bitcoin mining heater')}&item=${encodeURIComponent(name)}`;

// Heaters with a photo get the wide cards in the top row; the rest follow in their usual order.
const LINEUP = [...MINERS.filter((m) => m.image), ...MINERS.filter((m) => !m.image)];

const BitcoinHeatersPage = () => (
  <div className="page">
    <Seo
      title="Bitcoin Mining Heaters for Sale in Cincinnati | C-54 HomeTech"
      description="Bitcoin miners set up as space heaters: Avalon Nano 3S, BitAxe, Antminer S9, S19 and S21. Heat your home and earn bitcoin. Local setup, US shipping."
      path="/bitcoin-heaters"
      jsonLd={faqSchema(HEATER_FAQ)}
    />

    <section className="hero hero-sm">
      <h1>Bitcoin mining heaters</h1>
      <p className="lead">
        Every watt a bitcoin miner draws comes out as heat. A 1,300&nbsp;W miner warms a room like a 1,300&nbsp;W space heater,
        and it earns bitcoin while it does. I heat my own house with them. I sell miners set up for home heating, ship
        them anywhere in the US, and install them in person around Greater Cincinnati.
      </p>
      <div className="hero-actions">
        <Link to={heaterLink('Not sure yet')} className="btn btn-primary btn-lg">Ask what’s in stock</Link>
        <a href="#pay-with-mining" className="btn btn-outline btn-lg">Pay with mining rewards</a>
      </div>
    </section>

    <section aria-labelledby="lineup">
      <h2 id="lineup" className="section-title">Pick a heater by the space you’re heating</h2>
      <p className="section-sub">
        Stock changes from week to week. Where a card has no price, ask and I’ll tell you what I have and what it costs.
      </p>
      <div className="lineup">
        {LINEUP.map((m) => (
          <article key={m.id} className={m.image ? 'card miner miner-wide' : 'card miner'}>
            {m.image && (
              <img src={m.image} alt={m.imageAlt} width="600" height="400" loading="lazy" className="card-img" />
            )}
            <h3>{m.name}</h3>
            <dl className="specs">
              <div><dt>Best for</dt><dd>{m.use}</dd></div>
              <div><dt>Power</dt><dd>{m.power}</dd></div>
              {m.heat && <div><dt>Heat</dt><dd>{m.heat}</dd></div>}
              {m.price && <div><dt>Price</dt><dd>{m.price}</dd></div>}
            </dl>
            <p>{m.description}</p>
            {ACCESSORIES.some((a) => a.fits.includes(m.id)) && (
              <p>
                <Link to={`/shop#accessory-${ACCESSORIES.find((a) => a.fits.includes(m.id)).id}`} className="card-link">
                  Accessories for the {m.short}
                </Link>
              </p>
            )}
            <Link to={heaterLink(m.name)} className="btn btn-outline btn-block">Ask about the {m.short}</Link>
          </article>
        ))}
      </div>
      <p className="section-sub heat-note">
        For scale, a plug-in space heater on high is 1,500&nbsp;W, or about 5,100&nbsp;BTU/h.
      </p>
    </section>

    <section id="pay-with-mining" className="panel feature" aria-labelledby="pay-heading">
      <h2 id="pay-heading">Pay with mining rewards</h2>
      <p>
        Don’t want to pay the full price up front? Ask about splitting the mining rewards instead. The heater runs in
        your home and keeps you warm, and a share of what it mines comes to me for an agreed period.
      </p>
      <p>
        The split, how long it runs, and who covers what depend on the machine and your electric rate. Ask, and I’ll
        lay it all out before anything is installed.
      </p>
      <Link to={`/contact?interest=${encodeURIComponent('Pay with mining rewards')}`} className="btn btn-primary">
        Ask about paying with mining rewards
      </Link>
    </section>

    <Faq items={HEATER_FAQ} heading="Before you buy a bitcoin heater" />

    <section className="panel" aria-labelledby="own-way">
      <h2 id="own-way">Mine your own way</h2>
      <p>
        I can point your miner at any pool you choose, or help you run DATUM so you build your own block templates
        instead of trusting a pool to do it. Curious how much home mining it would take to out-hash the big pools? Try{' '}
        <a href="https://hashratehearth.c54hometech.com/" target="_blank" rel="noopener noreferrer">
          Hashrate Hearth
        </a>
        .
      </p>
      <p>
        Have an old miner collecting dust? I take older ASICs, power supplies and parts and use them to teach people
        with stranded solar energy how to mine. <Link to="/donate">Donate a machine</Link>.
      </p>
    </section>

    <CtaBand
      heading="Find the right heater for your space"
      text="Tell me the room, the square footage and your electric rate. I’ll suggest a machine and send current pricing."
      to={heaterLink('Not sure yet')}
      label="Ask about a heater"
    />
  </div>
);

export default BitcoinHeatersPage;
