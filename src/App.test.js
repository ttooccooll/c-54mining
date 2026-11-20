import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import {
  COUNTY_COUNT,
  HEATER_FAQ,
  ROUTES,
  S9_PRICE_SATS,
  SERVICE_AREA,
  SITE,
  areaServedSchema,
  sats,
} from './content/site';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('home page leads with the no-subscription promise, a named person and a quote CTA', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/no monthly fees/i);
  expect(screen.getByText(new RegExp(`I’m ${SITE.owner}\\.`))).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /get a free quote/i }).length).toBeGreaterThan(0);
});

test.each(ROUTES)('%s renders exactly one h1', (path) => {
  renderAt(path);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
});

test('pricing page shows all three one-time packages', () => {
  renderAt('/home-assistant');
  for (const price of ['$315', '$575', '$1,050']) {
    expect(screen.getByText(price, { exact: false })).toBeInTheDocument();
  }
});

test('unknown URLs get the not-found page', () => {
  renderAt('/definitely-not-a-page');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/different flight path/i);
});

test('quote form covers Lexington and never submits into the page URL', () => {
  const { container } = renderAt('/contact');
  expect(screen.getByRole('option', { name: 'Fayette County, KY (Lexington)' })).toBeInTheDocument();
  const form = container.querySelector('form.quote-form');
  // Without a Web3Forms key it falls back to the email app; with one, to Web3Forms. Never a GET to /contact.
  expect(form.getAttribute('method')).toBe('post');
  expect(form.getAttribute('action')).toMatch(/^(mailto:|https:\/\/api\.web3forms\.com\/)/);
});

test('with a Web3Forms key, the quote form sends in-page and confirms', async () => {
  const realFetch = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
  try {
    // Fresh module copies so ContactPage sees a key set before it loads.
    let lib;
    jest.isolateModules(() => {
      const site = require('./content/site');
      site.SITE.web3formsKey = 'test-key';
      lib = {
        // "pure" skips auto-registered cleanup hooks, which can't be added inside a test.
        rtl: require('@testing-library/react/pure'),
        router: require('react-router-dom'),
        ContactPage: require('./pages/ContactPage').default,
        React: require('react'),
      };
    });
    const { rtl, router, ContactPage, React } = lib;
    const { container } = rtl.render(
      React.createElement(router.MemoryRouter, null, React.createElement(ContactPage))
    );
    expect(rtl.screen.getByRole('button', { name: /send my request/i })).toBeInTheDocument();
    rtl.fireEvent.submit(container.querySelector('form.quote-form'));
    expect(await rtl.screen.findByText(/your request is in my inbox/i)).toBeInTheDocument();
    const [url, opts] = global.fetch.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(opts.body)).toMatchObject({ access_key: 'test-key' });
    rtl.cleanup();
  } finally {
    global.fetch = realFetch;
  }
});

test('quote page promises the reply time set in site.js', () => {
  renderAt('/contact');
  expect(screen.getAllByText(new RegExp(`within ${SITE.replyTime}`)).length).toBeGreaterThan(0);
});

test('heaters page answers the buying questions and shows heat output', () => {
  renderAt('/bitcoin-heaters');
  for (const { q } of HEATER_FAQ) {
    expect(screen.getByText(q)).toBeInTheDocument();
  }
  expect(screen.getByText('About 4,400 BTU/h')).toBeInTheDocument();
});

test('the S9 price set in site.js shows on its card and on the home page', () => {
  const price = sats(S9_PRICE_SATS);
  const { unmount } = renderAt('/bitcoin-heaters');
  expect(screen.getByText(`${price} + shipping, or local delivery`)).toBeInTheDocument();
  unmount();
  renderAt('/');
  expect(screen.getByText(new RegExp(`An Antminer S9 is ${price} plus shipping`))).toBeInTheDocument();
});

test('service area lists every county under its region, with towns', () => {
  renderAt('/');
  expect(SERVICE_AREA.flatMap((s) => s.counties)).toHaveLength(COUNTY_COUNT);
  for (const s of SERVICE_AREA) {
    expect(screen.getByRole('heading', { name: s.region })).toBeInTheDocument();
    for (const county of s.counties) {
      expect(s.towns[county].length).toBeGreaterThan(0);
    }
  }
  expect(screen.getByText('Montgomery County')).toBeVisible();
  expect(screen.getByText('Dayton')).toBeVisible();
  expect(screen.getByText('Fort Mitchell')).toBeVisible();
});

test('on a phone, a service area region opens when tapped', () => {
  window.matchMedia = () => ({ matches: true, addEventListener: () => {}, removeEventListener: () => {} });
  try {
    renderAt('/');
    const region = screen.getByRole('button', { name: /Southeast Indiana/ });
    expect(region).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Dearborn County')).not.toBeVisible();
    fireEvent.click(region);
    expect(region).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Dearborn County')).toBeVisible();
  } finally {
    delete window.matchMedia;
  }
});

test('structured data names every county and town served, once each', () => {
  const names = areaServedSchema().map((a) => a.name);
  expect(names).toContain('Hamilton County, Ohio');
  expect(names).toContain('Lexington, KY');
  expect(names).toContain('Lawrenceburg, IN');
  expect(new Set(names).size).toBe(names.length);
});

test('pages speak in the first person, not as "we"', () => {
  for (const path of ROUTES) {
    const { container, unmount } = renderAt(path);
    expect(container.textContent).not.toMatch(/\b(we’ll|we’re|we’ve|our)\b/i);
    unmount();
  }
});

test('priced accessories offer ordering with sats', () => {
  renderAt('/shop');
  expect(screen.getByRole('link', { name: /order the guitaxe with sats/i })).toBeInTheDocument();
  expect(screen.getByText('105,000 sats + shipping')).toBeInTheDocument();
});
