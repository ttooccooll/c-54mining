import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ROUTES } from './content/site';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('home page leads with the no-subscription promise and a quote CTA', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/no monthly fees/i);
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
    expect(await rtl.screen.findByText(/your request is in our inbox/i)).toBeInTheDocument();
    const [url, opts] = global.fetch.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(opts.body)).toMatchObject({ access_key: 'test-key' });
    rtl.cleanup();
  } finally {
    global.fetch = realFetch;
  }
});

test('priced accessories offer ordering with sats', () => {
  renderAt('/shop');
  expect(screen.getByRole('link', { name: /order the guitaxe with sats/i })).toBeInTheDocument();
  expect(screen.getByText('105,000 sats + shipping')).toBeInTheDocument();
});
