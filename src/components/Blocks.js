import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ACCESSORIES,
  COUNTY_COUNT,
  HA_TIERS,
  MINERS,
  SERVICE_AREA,
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
  <div className="product-rows">
    {ACCESSORIES.map((a) => {
      const fits = a.fitsNote || a.fits.map((id) => MINERS.find((m) => m.id === id)?.short || id).join(', ');
      const price = a.price === null ? 'Ask' : a.price === 0 ? 'Free' : `${sats(a.price)} + shipping`;
      const orderItem = a.price ? `${a.name} (${sats(a.price)})` : a.name;
      const external = a.fileUrl && /^https?:/.test(a.fileUrl);
      return (
        <article key={a.id} id={`accessory-${a.id}`} className="product-row">
          {a.image && (
            <img src={a.image} alt={a.imageAlt || a.name} width="600" height="600" loading="lazy" className="product-img" />
          )}
          <div className="product-body">
            <h3>{a.name}</h3>
            <dl className="specs">
              <div><dt>Type</dt><dd>{KIND_LABEL[a.kind]}</dd></div>
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
            <div className="product-actions">
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

const listWords = (words) =>
  words.length > 1 ? `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}` : words.join('');

// True on phone-width screens. It is false on the server and until the page has loaded,
// so the prerendered HTML always carries the full county list.
const useNarrowScreen = () => {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia('(max-width: 560px)');
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return narrow;
};

// Three columns of counties on a wide screen. On a phone each region folds down to
// its name and main cities, and opens when tapped.
export const ServiceArea = ({ heading = 'Where I install' }) => {
  const narrow = useNarrowScreen();
  const [openRegion, setOpenRegion] = useState(null);
  return (
    <section className="panel" aria-labelledby="service-area">
      <h2 id="service-area">{heading}</h2>
      <p className="area-intro">
        I install in person in {COUNTY_COUNT} counties across Ohio, Kentucky and Indiana: {SITE.areaSummary}.{' '}
        {narrow ? 'Tap a region to see its counties and towns.' : 'Find your county below.'}
      </p>
      <div className="area-grid">
        {SERVICE_AREA.map((s) => {
          const open = !narrow || openRegion === s.state;
          const listId = `area-${s.abbr.toLowerCase()}`;
          return (
            <div key={s.state} className="area-region">
              <h3>
                {narrow ? (
                  <button
                    type="button"
                    className="area-toggle"
                    aria-expanded={open}
                    aria-controls={listId}
                    onClick={() => setOpenRegion(open ? null : s.state)}
                  >
                    <span className="area-name">{s.region}</span>
                    <span className="area-summary">
                      {s.counties.length} counties, including {listWords(s.cities)}
                    </span>
                  </button>
                ) : (
                  s.region
                )}
              </h3>
              <dl id={listId} hidden={!open}>
                {s.counties.map((c) => (
                  <div key={c}>
                    <dt>{c} County</dt>
                    <dd>
                      {(s.towns?.[c] || []).map((town, i, all) => (
                        <Fragment key={town}>
                          <span className="nowrap">{town}</span>
                          {i < all.length - 1 ? ', ' : ''}
                        </Fragment>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>
      <p className="muted area-note">
        Just outside these counties? <Link to="/contact" className="nowrap">Ask anyway</Link>. Bitcoin heaters ship anywhere in the US.
      </p>
    </section>
  );
};

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
