import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/home-assistant', label: 'Smart Home' },
  { to: '/bitcoin-heaters', label: 'Bitcoin Heaters' },
  { to: '/learn', label: 'Learn' },
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
];

const Navbar = () => {
  const navRef = useRef(null);
  const slideRef = useRef(null);
  const audioRef = useRef(null);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const placedRef = useRef(false);

  // Move the highlight under the active link. It animates only when the page
  // changes; first placement and re-measures (fonts loading, resizes, a page
  // that loaded while hidden) jump straight into place.
  const placeSlide = (animate) => {
    const slide = slideRef.current;
    const wrap = navRef.current;
    if (!slide || !wrap) return;
    const active = wrap.querySelector('.navbar-link.active');
    if (!active || active.offsetWidth === 0) {
      slide.style.opacity = '0';
      return;
    }
    const jump = !animate || !placedRef.current;
    if (jump) slide.style.transition = 'none';
    slide.style.opacity = '1';
    slide.style.left = `${active.offsetLeft}px`;
    slide.style.width = `${active.offsetWidth}px`;
    placedRef.current = true;
    if (jump) {
      void slide.offsetWidth; // apply the position before re-enabling transitions
      slide.style.transition = '';
    }
  };

  useEffect(() => {
    setOpen(false);
    placeSlide(true);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const wrap = navRef.current;
    if (!wrap || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(() => placeSlide(false));
    observer.observe(wrap);
    wrap.querySelectorAll('.navbar-link').forEach((link) => observer.observe(link));
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const linkClass = ({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link');

  return (
    <header className="navbar">
      <audio ref={audioRef} src="/assets/flyover.mp3" preload="none" />
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={playAudio} aria-label="C-54 HomeTech home">
          C-54 HomeTech
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggle-bars" aria-hidden="true" />
          <span className="sr-only">Menu</span>
        </button>
        <nav id="primary-nav" className={open ? 'navbar-nav open' : 'navbar-nav'} aria-label="Main">
          <div className="navbar-links-wrap" ref={navRef}>
            <ul className="navbar-links">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={linkClass} onClick={playAudio}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="navbar-slide" ref={slideRef} aria-hidden="true" />
          </div>
          <Link to="/contact" className="btn btn-primary navbar-cta" onClick={playAudio}>
            Get a free quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
