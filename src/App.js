import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HomeAssistantPage from './pages/HomeAssistantPage';
import BitcoinHeatersPage from './pages/BitcoinHeatersPage';
import AboutUsPage from './pages/AboutUsPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import FunPage from './pages/FunPage';
import LearnPage from './pages/LearnPage';
import ArticlePage from './pages/ArticlePage';
import POSPage from './pages/POSPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to the top on page change, or to #anchor targets like /bitcoin-heaters#pay-with-mining.
// On a real page change (not the first load), also move focus to the new page's
// heading so screen readers announce the new page.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const lastPath = useRef(pathname);
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);

    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      const heading = document.querySelector('main h1');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  }, [pathname, hash]);
  return null;
};

// The router itself lives in index.js (browser) and scripts/prerender.js (build time).
const App = () => (
  <>
    <ScrollManager />
    <div className="background-container" aria-hidden="true" />
    <div className="content-container">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-assistant" element={<HomeAssistantPage />} />
          <Route path="/bitcoin-heaters" element={<BitcoinHeatersPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/learn/:slug" element={<ArticlePage />} />
          <Route path="/shop" element={<POSPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/fun" element={<FunPage />} />
          {/* Old URLs. vercel.json also 308-redirects these for crawlers. */}
          <Route path="/miners" element={<Navigate to="/bitcoin-heaters" replace />} />
          <Route path="/blog" element={<Navigate to="/learn" replace />} />
          <Route path="/pos" element={<Navigate to="/shop" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </>
);

export default App;
