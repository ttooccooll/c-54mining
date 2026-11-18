import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { AccessoryCards } from '../components/Blocks';
import { ACCESSORIES } from '../content/site';

const hasAccessories = ACCESSORIES.length > 0;

const POSPage = () => (
  <div className="page">
    <Seo
      title={hasAccessories ? 'BitAxe Cases, Miner Plaques and Shrouds | C-54 HomeTech' : 'Shop | C-54 HomeTech'}
      description={
        hasAccessories
          ? 'BitAxe cases (the Guitaxe and the Blockspecht), a Woody plaque for the Antminer S9, and a Woody furnace shroud for AC Infinity fans. Plus merch.'
          : 'C-54 HomeTech merch and fun stuff, plus Home Assistant installation packages from $315 and Bitcoin mining heaters for sale.'
      }
      path="/shop"
    />
    <section className="hero hero-sm">
      <p className="eyebrow">Shop · One-time prices, never a subscription</p>
      <h1>Shop</h1>
      <p className="lead">
        {hasAccessories
          ? 'Home-mining gear that doubles as propaganda, because if your miner isn’t making a statement, what is it even doing? Plus merch.'
          : 'Merch and fun stuff.'}
      </p>
      {hasAccessories && (
        <div className="hero-actions">
          <a href="#accessories" className="btn btn-primary">Cases, plaques and shrouds</a>
          <a href="#merch" className="btn btn-outline">Merch</a>
        </div>
      )}
    </section>

    {hasAccessories && (
      <section id="accessories" aria-labelledby="accessories-heading">
        <h2 id="accessories-heading" className="section-title">BitAxe cases, plaques and shrouds</h2>
        <p className="section-sub">
          Built and run on our own miners first. Priced in sats, plus shipping. Order with sats and we’ll confirm the
          fit and send you an invoice{ACCESSORIES.some((a) => a.squareUrl) ? ', or pay by card through Square' : ''}.
        </p>
        <AccessoryCards />
      </section>
    )}

    <section id="merch" aria-labelledby="merch-heading">
      <h2 id="merch-heading" className="section-title">Merch and fun stuff</h2>
      <div className="shop-frame">
        <iframe
          src="https://checkout.square.site/merchant/ML2CN2CP8J201/checkout/FXUW57O7IMIQ4S3PETHDW4PL"
          title="C-54 HomeTech merch checkout"
          loading="lazy"
        />
      </div>
    </section>

    <section aria-labelledby="bigger">
      <h2 id="bigger" className="section-title">Want the whole setup?</h2>
      <div className="cards cards-2">
        <article className="card">
          <h3>Home Assistant installation</h3>
          <p>Three flat-price packages, $315 to $1,050, installed in your home. No subscription.</p>
          <Link to="/home-assistant" className="card-link">See packages →</Link>
        </article>
        <article className="card">
          <h3>Bitcoin mining heaters</h3>
          <p>Nano 3S, BitAxe, Antminer S9, S19 and S21, set up for home heating. Ships within the US.</p>
          <Link to="/bitcoin-heaters" className="card-link">Browse heaters →</Link>
        </article>
      </div>
    </section>
  </div>
);

export default POSPage;
