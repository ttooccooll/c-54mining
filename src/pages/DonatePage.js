import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { SITE } from '../content/site';

const DonatePage = () => (
  <div className="page">
    <Seo
      title="Donate Old Bitcoin Miners | C-54 HomeTech"
      description="Donate old ASIC miners, power supplies and parts. We use them to teach people with stranded solar energy to mine bitcoin and run DATUM themselves."
      path="/donate"
    />
    <article className="panel prose">
      <p className="eyebrow">Education branch</p>
      <h1>Donate old machines</h1>
      <p className="lead">
        Got an old miner collecting dust? Put it back to work. Our education branch trains people with stranded solar
        energy to mine on their own terms.
      </p>

      <h2>What your donation does</h2>
      <p>
        We teach why decentralization matters, then we teach the hands-on part: how to set up a miner and run DATUM
        themselves, so they control their own block templates instead of trusting a pool to do it for them.
      </p>

      <h2>What we accept</h2>
      <ul>
        <li>Older-generation ASICs (S9-era and up), working or repairable</li>
        <li>Power supplies, control boards, and spare hash boards</li>
        <li>Related networking or solar equipment</li>
      </ul>

      <h2>How to donate</h2>
      <p>Reach out and tell us what you have. We’ll sort out shipping or pickup from there.</p>
      <div className="hero-actions">
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent('Miner donation')}`} className="btn btn-primary">
          Email us about a donation
        </a>
        <Link to={`/contact?interest=${encodeURIComponent('Donating an old miner')}`} className="btn btn-outline">
          Use the contact form
        </Link>
      </div>
    </article>
  </div>
);

export default DonatePage;
