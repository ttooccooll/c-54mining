import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaBand } from '../components/Blocks';
import { SITE } from '../content/site';

const AboutUsPage = () => (
  <div className="page">
    <Seo
      title="About C-54 HomeTech | Named for the Berlin Airlift"
      description="A one-person Cincinnati business installing private Home Assistant smart homes and bitcoin mining heaters. Why it’s named for the Berlin Airlift."
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
        I’m {SITE.owner}, and C-54 HomeTech is a one-person business. I install private, local Home Assistant smart
        homes across Greater Cincinnati, Dayton, Northern Kentucky, Lexington and Southeast Indiana, and I sell bitcoin
        miners set up as space heaters.
      </p>

      <h2>I live with what I sell</h2>
      <p>
        My own house runs on Home Assistant, and miners heat it in the winter. Whatever I set up for you, I’ve already
        lived with, so I know which parts are worth the trouble.
      </p>
      <p>
        I also teach this. The <Link to="/learn/bitcoin-mining-home-automation-syllabus">ten-week syllabus</Link> and
        the <Link to="/learn/bitcoin-mining-for-solar-installers">talk for solar installers</Link> on the Learn page
        are mine, and the miners people <Link to="/donate">donate</Link> go toward teaching people with stranded solar
        power to mine for themselves.
      </p>

      <h2>How I work</h2>
      <p>
        I install Home Assistant on hardware in your house, so your smart home runs without the internet and your data
        stays on your property. I quote one flat price before I start, and I teach you to run it. When I leave,
        everything installed is yours. I don’t sell subscriptions, support plans or anything else that renews.
      </p>
      <p>
        The heaters work on a simple fact: every watt a miner draws becomes heat. Instead of venting that heat out of a
        data center somewhere, you put it in your living room, garage or workshop, and the bitcoin it earns offsets
        what the heat costs you.
      </p>

      <h2>Why the name</h2>
      <p>
        From the summer of 1948 to the fall of 1949, C-47 and C-54 transports flew almost 100 million miles to feed the
        starving citizens of West Berlin. It was one of the greatest humanitarian missions of the 20th century. It was
        risky, costly, confrontational, and entirely peaceful.
      </p>
      <p>
        Four years earlier, the Bretton Woods conference created the International Monetary Fund as part of the plan to
        rebuild the postwar world economy. In the decades since, the IMF has become a predatory lender, fueling crises
        in the Global South far more bleak than that of postwar Berlin.
      </p>
      <p>
        Since 2009, the Bitcoin network has grown into a lifeline for people living under that kind of monetary
        exploitation. They use it to keep their savings through inflation and to carry what they own across a border
        when they have to leave.
      </p>
      <p>
        Mining at home helps keep that network out of any one company’s or government’s hands, and that makes you part
        of the mission. Like the Berlin Airlift, it is entirely peaceful. Unlike the Berlin Airlift, anyone, anywhere
        in the world can contribute.
      </p>
      <p>
        That’s why I sell miners as heaters. The heat is useful, the electricity isn’t wasted, and every miner running
        in somebody’s house is a piece of the network that no large company controls.
      </p>

      <h2>Get started</h2>
      <p>
        See the <Link to="/home-assistant">smart home packages</Link>, browse the{' '}
        <Link to="/bitcoin-heaters">mining heaters</Link>, or <Link to="/contact">write to me</Link> and I’ll help you
        work out the right setup.
      </p>
    </article>
    <CtaBand />
  </div>
);

export default AboutUsPage;
