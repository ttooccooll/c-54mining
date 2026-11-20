import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { SITE } from '../content/site';

const DonatePage = () => (
  <div className="page">
    <Seo
      title="Donate Old Bitcoin Miners | C-54 HomeTech"
      description="Donate old ASIC miners, power supplies and parts. They’re used to teach people with stranded solar energy to mine bitcoin and run DATUM themselves."
      path="/donate"
    />
    <article className="panel prose">
      <h1>Donate old machines</h1>
      <p className="lead">
        Got an old miner collecting dust? I’ll put it back to work, teaching people with stranded solar energy to mine
        on their own terms.
      </p>

      <h2>What your donation does</h2>
      <p>
        I start with why decentralization matters, then get to the hands-on part: how to set up a miner and run DATUM,
        so students control their own block templates instead of trusting a pool to do it for them.
      </p>

      <h2>What I accept</h2>
      <ul>
        <li>Older-generation ASICs (S9-era and up), working or repairable</li>
        <li>Power supplies, control boards, and spare hash boards</li>
        <li>Related networking or solar equipment</li>
      </ul>

      <h2>How to donate</h2>
      <p>Tell me what you have and I’ll sort out shipping or pickup from there.</p>
      <div className="hero-actions">
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent('Miner donation')}`} className="btn btn-primary">
          Email me about a donation
        </a>
        <Link to={`/contact?interest=${encodeURIComponent('Donating an old miner')}`} className="btn btn-outline">
          Use the contact form
        </Link>
      </div>
    </article>
  </div>
);

export default DonatePage;
