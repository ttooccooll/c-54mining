import Seo from '../components/Seo';

const GAMES = [
  {
    title: 'Hashrate Hearth',
    href: 'https://hashratehearth.c54hometech.com/',
    text: 'How many home miners would it take to break the big pools’ grip on block templates? Pick a goal and a machine and find out. Turn the sound on.',
  },
  { title: 'Bitcoin Is for Criminals', href: 'https://bitcoinisforcriminals.com/', text: 'A PSA for all bitcoiners.' },
  {
    title: 'Bitcoin DEFCON',
    href: 'https://bitcoin-defcon.vercel.app/',
    text: 'A goofy way to check how fast the Bitcoin network is processing transactions right now.',
  },
  {
    title: 'Bitcoin Battleship',
    href: 'https://bitcoin-battleship.vercel.app/',
    text: 'A silly Battleship-style game demonstrating the power of decentralization.',
  },
  {
    title: 'Bitcoin Chess',
    href: 'https://bitcoin-chess.vercel.app',
    text: 'A silly chess-inspired game demonstrating the power of decentralization.',
  },
  {
    title: 'National Debt Snake',
    href: 'https://national-debt-snake.vercel.app/',
    text: 'The game of Snake, inspired by (and with a real-time feed of) the US national debt.',
  },
  {
    title: 'Mempool Space Invaders',
    href: 'https://mempooldotspaceinvaders.space',
    text: 'Space Invaders powered by live Bitcoin mempool data, now with power-ups.',
  },
  {
    title: 'The Bitcoin Trail',
    href: 'https://thebitcointrail.vercel.app/',
    text: 'A bitcoin-themed adventure game.',
  },
];

const FunPage = () => (
  <div className="page">
    <Seo
      title="Bitcoin Games and Learning Tools | C-54 HomeTech"
      description="Goofy, (loosely) educational Bitcoin games: Hashrate Hearth, Battleship, chess, national-debt Snake, mempool Space Invaders and more."
      path="/fun"
    />
    <section className="hero hero-sm">
      <p className="eyebrow">Fun stuff</p>
      <h1>Goofy learning tools and (loosely) educational games</h1>
      <p className="lead">Here is some fun stuff to play with.</p>
    </section>
    <section aria-label="Games and tools">
      <div className="cards">
        {GAMES.map((g) => (
          <a key={g.href} href={g.href} className="card card-play" target="_blank" rel="noopener noreferrer">
            <h2 className="card-title">{g.title}</h2>
            <p>{g.text}</p>
            <span className="card-link">Open →</span>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default FunPage;
