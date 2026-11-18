import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './GlobalStyles.css';
import App from './App';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are prerendered per route (scripts/prerender.js) and tagged
// with data-route. Hydrate only when that HTML is for the current path; otherwise
// (dev server, or a host fallback serving another page's HTML) render fresh.
const prerendered = container.dataset.route;
const path = window.location.pathname.replace(/\/+$/, '') || '/';

if (container.hasChildNodes() && prerendered === path) {
  hydrateRoot(container, app);
} else {
  // Drop another page's prerendered title/meta so React can write this page's.
  document.head.querySelectorAll('[data-prerendered]').forEach((node) => node.remove());
  container.textContent = '';
  createRoot(container).render(app);
}
