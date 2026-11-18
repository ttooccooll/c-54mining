import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand } from '../components/Blocks';

const AboutUsPage = () => (
  <div className="page">
    <Seo
      title="About C-54 HomeTech | Named for the Berlin Airlift"
      description="Why a Cincinnati smart home and bitcoin heat-mining company is named for the Berlin Airlift: privacy, energy independence, and peaceful opt-out."
      path="/about"
    />
    <article className="panel prose">
      <figure className="feature-figure">
        <img
          src="/assets/a2.jpg"
          alt="A crowd of Berliners watches a C-54 transport fly in low during the Berlin Airlift"
          width="766"
          height="729"
        />
        <figcaption>Berliners watch a C-54 come in during the Berlin Airlift, 1948–49.</figcaption>
      </figure>

      <h1>About C-54 HomeTech</h1>
      <p className="lead">
        We do private, local Home Assistant installations across Greater Cincinnati, Dayton, Northern Kentucky,
        Lexington and Southeast Indiana. Your data stays off the cloud and in your hands. We also sell Bitcoin mining hardware
        configured as space heaters. Heat your home, use your excess energy, and secure the Bitcoin network while
        you’re at it.
      </p>

      <h2>What we do</h2>
      <p>
        <strong>Private home automation.</strong> We install Home Assistant locally so your smart home runs without
        needing the internet. Your data never leaves your property. Pair that with mining heat and your home works for
        you, not for some corporation.
      </p>
      <p>
        <strong>Bitcoin miners as heaters.</strong> Every watt a miner draws becomes heat. Instead of venting that into a
        data center somewhere, put it in your living room, garage, or workshop. You offset your heating costs while
        earning bitcoin.
      </p>
      <p>
        <strong>No subscriptions.</strong> Ever. You pay once for the work, and you own everything we install.
      </p>

      <h2>Why it matters</h2>
      <p>
        From the summer of 1948 to the fall of 1949, C-47 and C-54 transports flew almost 100 million miles to feed the
        starving citizens of West Berlin. It was one of the greatest humanitarian missions of the 20th century. It was
        risky, costly, confrontational, and entirely peaceful.
      </p>
      <p>
        Four years earlier, the Bretton Woods Accord created the International Monetary Fund, tasked in part with
        rebuilding the German economy. In the decades since, the IMF has become a predatory lender, fueling crises in the
        Global South far more bleak than that of postwar Berlin.
      </p>
      <p>
        Since 2009, the Bitcoin network has grown as a lifeline to people living under monetary exploitation worldwide.
        People with bitcoin preserve their savings through inflation, carry their wealth across borders from war-torn
        regions, and maintain economic agency where institutions have failed them.
      </p>
      <p>
        By securing this network in a decentralized manner, you become part of that mission. Like the Berlin Airlift, it
        is entirely peaceful. Unlike the Berlin Airlift, anyone, anywhere in the world can contribute.
      </p>
      <blockquote>
        Using Bitcoin miners as heaters is more than a novelty. It is a statement that energy can be productive, that
        waste can be value, and that individuals can opt out of failing systems.
      </blockquote>

      <h2>Get started</h2>
      <p>
        See our <Link to="/home-assistant">smart home packages</Link>, browse{' '}
        <Link to="/bitcoin-heaters">mining heaters</Link>, or <Link to="/contact">reach out</Link> and we’ll help you
        find the right setup.
      </p>
    </article>
    <CtaBand />
  </div>
);

export default AboutUsPage;
