import { Link } from 'react-router-dom';
import { ACCESSORIES, SITE } from '../content/site';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <p className="footer-brand">{SITE.name}</p>
        <p>
          Private smart home installation and Bitcoin mining heaters for {SITE.regionLong}. Run by {SITE.owner}.
        </p>
        <p className="footer-promise">No subscriptions. You pay once.</p>
      </div>
      <nav aria-label="Footer">
        <p className="footer-heading">Services</p>
        <ul>
          <li><Link to="/home-assistant">Home Assistant installation</Link></li>
          <li><Link to="/bitcoin-heaters">Bitcoin mining heaters</Link></li>
          <li><Link to="/bitcoin-heaters#pay-with-mining">Pay with mining rewards</Link></li>
          {ACCESSORIES.length > 0 && (
            <li><Link to="/shop#accessories">BitAxe cases, plaques and shrouds</Link></li>
          )}
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>
      <nav aria-label="More">
        <p className="footer-heading">More</p>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/donate">Donate old miners</Link></li>
          <li><Link to="/fun">Fun stuff</Link></li>
        </ul>
      </nav>
      <div>
        <p className="footer-heading">Contact</p>
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>
          On <a href={SITE.stackerNews.url} rel="me noopener">stacker.news as {SITE.stackerNews.handle}</a> and{' '}
          <a href={SITE.nostr.url} rel="me noopener">nostr</a>.
        </p>
        <Link to="/contact" className="btn btn-primary">Get a free quote</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
