import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const activeLinkRef = useRef(null);
  const location = useLocation();
  const audioRef = useRef(null);

  useEffect(() => {
    if (navRef.current && activeLinkRef.current) {
      const activeLink = navRef.current.querySelector('.navbar-link.active');
      if (activeLink) {
        activeLinkRef.current.style.left = `${activeLink.offsetLeft}px`;
        activeLinkRef.current.style.width = `${activeLink.offsetWidth}px`;
      }
    }
  }, [location]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  };      

  return (
    <nav className="navbar">
      <audio ref={audioRef} src="/assets/flyover.mp3"></audio>
      <div className="navbar-container">
        <h1 className="navbar-logo">C-54 HomeTech</h1>
        <ul className="navbar-links" ref={navRef}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/s9"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              S9
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nano3"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Nano 3
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pos"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fun"
              className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
              onClick={playAudio}
            >
              Fun
            </NavLink>
          </li>
        </ul>
        <div className="navbar-slide" ref={activeLinkRef}></div>
      </div>
    </nav>
  );
};

export default Navbar;