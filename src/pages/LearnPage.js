import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand } from '../components/Blocks';
import articles from '../content/articles';

const LearnPage = () => (
  <div className="page">
    <Seo
      title="Learn Home Bitcoin Mining and Home Automation | C-54 HomeTech"
      description="Free guides on home bitcoin mining, heat reuse, solar, and local home automation: a teaching syllabus, an outline for solar installers, and essays."
      path="/learn"
    />

    <section className="hero hero-sm">
      <h1>Learn bitcoin mining, heat reuse and home automation</h1>
      <p className="lead">
        Everything here is free to read, share and teach from. I wrote it to get more people mining at home, using
        the heat, and running their houses without the cloud.
      </p>
    </section>

    <section aria-labelledby="articles">
      <h2 id="articles" className="sr-only">Articles</h2>
      <div className="cards">
        {articles.map((a) => (
          <article key={a.slug} className="card">
            <p className="card-kind">{a.kind}</p>
            <h3>
              <Link to={`/learn/${a.slug}`}>{a.title}</Link>
            </h3>
            <p>{a.description}</p>
            <Link to={`/learn/${a.slug}`} className="card-link" aria-label={`Read: ${a.title}`}>Read</Link>
          </article>
        ))}
      </div>
    </section>

    <section className="panel feature" aria-labelledby="hearth">
      <h2 id="hearth">Hashrate Hearth</h2>
      <p>
        Two pool operators build most of bitcoin’s block templates. How much home mining would it take to break that
        majority? Pick a goal and a machine, from an S21 down to a BitAxe, and see how many homes it takes. Then plug in
        your own setup (winter heat, solar surplus, or hydronic heat) and get a daily ledger.
      </p>
      <a
        href="https://hashratehearth.c54hometech.com/"
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Hashrate Hearth
      </a>
    </section>

    <section className="panel" aria-labelledby="play">
      <h2 id="play">Rather learn by playing?</h2>
      <p>
        Games and goofy tools that show how Bitcoin and decentralization work, from Battleship to Space Invaders running
        on live mempool data. <Link to="/fun">Play the games</Link>.
      </p>
    </section>

    <CtaBand
      heading="Rather have someone set it up for you?"
      text="I install Home Assistant and mining heaters in person around Greater Cincinnati, for one flat price."
    />
  </div>
);

export default LearnPage;
