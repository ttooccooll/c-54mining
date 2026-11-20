import { Link } from 'react-router-dom';
import {
  ACCESSORIES,
  HA_TIERS,
  MINERS,
  SERVICE_AREA,
  SERVICE_CITIES,
  SITE,
  accessoryLink,
  sats,
  usd,
} from '../content/site';

const KIND_LABEL = {
  body: 'BitAxe body',
  printed: '3D-printed part',
  file: 'Print file',
  both: 'Print file or printed part',
};

export const AccessoryCards = () => (
  <div className="cards cards-fill">
    {ACCESSORIES.map((a) => {
      const fits = a.fitsNote || a.fits.map((id) => MINERS.find((m) => m.id === id)?.short || id).join(', ');
      const price = a.price === null ? 'Ask' : a.price === 0 ? 'Free' : `${sats(a.price)} + shipping`;
      const orderItem = a.price ? `${a.name} (${sats(a.price)})` : a.name;
      const external = a.fileUrl && /^https?:/.test(a.fileUrl);
      return (
        <article key={a.id} id={`accessory-${a.id}`} className="card miner">
          {a.image && (
            <img src={a.image} alt={a.imageAlt || a.name} width="600" height="450" loading="lazy" className="card-img" />
          )}
          <p className="card-kind">{KIND_LABEL[a.kind]}</p>
          <h3>{a.name}</h3>
          <dl className="specs">
            <div><dt>Fits</dt><dd>{fits}</dd></div>
            <div><dt>Price</dt><dd>{price}</dd></div>
          </dl>
          <p>{a.description}</p>
          {a.storyUrl && (
            <p>
              <a href={a.storyUrl} className="card-link" target="_blank" rel="noopener noreferrer">
                Read the build story on Stacker News
              </a>
            </p>
          )}
          <div className="card-actions">
            {a.fileUrl && (a.kind === 'file' || a.kind === 'both') && (
              <a
                href={a.fileUrl}
                className={a.kind === 'file' ? 'btn btn-primary btn-block' : 'btn btn-outline btn-block'}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
              >
                {a.price === 0 ? 'Download the file' : 'Get the file'}
              </a>
            )}
            {(a.kind !== 'file' || !a.fileUrl) && (
              <Link
                to={accessoryLink(orderItem)}
                className="btn btn-primary btn-block"
                aria-label={a.price === null ? undefined : `Order the ${a.short || a.name} with sats`}
              >
                {a.price === null ? `Ask about the ${a.short || a.name}` : 'Order with sats'}
              </Link>
            )}
            {a.squareUrl && (
              <a
                href={a.squareUrl}
                className="btn btn-outline btn-block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pay for the ${a.short || a.name} by card through Square`}
              >
                Pay by card
              </a>
            )}
          </div>
        </article>
      );
    })}
  </div>
);

export const PricingTiers = ({ headingLevel = 3 }) => {
  const H = `h${headingLevel}`;
  return (
    <div className="tiers">
      {HA_TIERS.map((t) => (
        <div key={t.id} className={t.featured ? 'tier featured' : 'tier'}>
          {t.featured && <p className="tier-badge">Most complete</p>}
          <H className="tier-name">{t.name}</H>
          <p className="tier-price">
            {usd(t.price)} <span className="tier-once">one time</span>
          </p>
          <p className="tier-summary">{t.summary}</p>
          <ul className="checklist">
            {t.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="tier-hours">Typical install: {t.hours}</p>
          <Link to={`/contact?package=${t.id}`} className="btn btn-primary btn-block">
            Request {t.name.replace(' Setup', '')}
          </Link>
        </div>
      ))}
    </div>
  );
};

export const ServiceArea = ({ heading = 'Where I install' }) => (
  <section className="panel" aria-labelledby="service-area">
    <h2 id="service-area">{heading}</h2>
    <p>
      I install in person across {SITE.areaSummary}. That includes {SERVICE_CITIES.slice(0, -1).join(', ')} and{' '}
      {SERVICE_CITIES[SERVICE_CITIES.length - 1]}.
    </p>
    <div className="area-grid">
      {SERVICE_AREA.map((s) => (
        <div key={s.state} className="area-state">
          <h3>{s.state}</h3>
          <p>
            {s.counties
              .map((c) => `${c}\u00a0County${s.notes?.[c] ? `\u00a0(${s.notes[c]})` : ''}`)
              .join(' · ')}
          </p>
        </div>
      ))}
    </div>
    <p className="muted">
      Just outside the map? <Link to="/contact">Ask anyway</Link>. Bitcoin heaters ship anywhere in the US.
    </p>
  </section>
);

export const Faq = ({ items, heading = 'Common questions' }) => (
  <section className="panel" aria-labelledby="faq">
    <h2 id="faq">{heading}</h2>
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  </section>
);

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const CtaBand = ({
  heading = 'Tell me about your house',
  text = `Send me what you have and what you want it to do. I’ll reply within ${SITE.replyTime} with a flat price.`,
  to = '/contact',
  label = 'Get a free quote',
}) => (
  <section className="cta-band">
    <h2>{heading}</h2>
    <p>{text}</p>
    <Link to={to} className="btn btn-primary btn-lg">
      {label}
    </Link>
  </section>
);
