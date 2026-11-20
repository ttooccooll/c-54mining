import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <div className="page">
    <Seo
      title="Page not found | C-54 HomeTech"
      description="This page doesn’t exist. Try smart home installation, Bitcoin mining heaters, or get a free quote."
      path="/404"
      noindex
    />
    <section className="hero hero-sm">
      <h1>That page took a different flight path.</h1>
      <p className="lead">It may have moved. These are the pages people usually want:</p>
      <div className="hero-actions">
        <Link to="/home-assistant" className="btn btn-primary">Smart home installation</Link>
        <Link to="/bitcoin-heaters" className="btn btn-outline">Bitcoin mining heaters</Link>
        <Link to="/contact" className="btn btn-outline">Get a free quote</Link>
      </div>
    </section>
  </div>
);

export default NotFoundPage;
