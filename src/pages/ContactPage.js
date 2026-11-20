import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import { ACCESSORY_INTEREST, HA_TIERS, SERVICE_AREA, SITE, countyLabel, usd } from '../content/site';

const INTERESTS = [
  ...HA_TIERS.map((t) => `Home Assistant ${t.name} (${usd(t.price)})`),
  'Home Assistant, not sure which package',
  'Bitcoin mining heater',
  'Pay with mining rewards',
  ACCESSORY_INTEREST,
  'Donating an old miner',
  'Something else',
];

const AREAS = [
  ...SERVICE_AREA.flatMap((s) => s.counties.map((c) => countyLabel(s, c))),
  'Somewhere else (shipping only)',
];

const EMPTY = { name: '', email: '', area: '', interest: '', devices: '', message: '' };

// With a Web3Forms key the form posts straight to the inbox; without one it opens
// the visitor's email app.
const USE_SERVICE = Boolean(SITE.web3formsKey);
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

const ContactPage = () => {
  const location = useLocation();
  const [form, setForm] = useState(EMPTY);
  // idle | sending | sent | error | mailto
  const [status, setStatus] = useState('idle');

  // Prefill from links like /contact?package=standard or ?interest=...&item=...
  // Done after mount so the prerendered HTML and the first client render match.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pkg = HA_TIERS.find((t) => t.id === params.get('package'));
    const interest = pkg
      ? `Home Assistant ${pkg.name} (${usd(pkg.price)})`
      : INTERESTS.find((i) => i === params.get('interest')) || '';
    const item = params.get('item');
    if (interest || item) {
      setForm((f) => ({
        ...f,
        interest: interest || f.interest,
        message: item && item !== 'Not sure yet' ? `I’m interested in the ${item}.` : f.message,
      }));
    }
  }, [location.search]);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const subject = `Quote request: ${form.interest || 'General question'}`;

  const openEmailApp = () => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Location: ${form.area}`,
      `Interested in: ${form.interest}`,
      '',
      'Devices / hardware I have now:',
      form.devices || '(none listed)',
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!USE_SERVICE) {
      openEmailApp();
      return;
    }
    // Honeypot: real people never see or tick this box.
    if (e.currentTarget.elements.botcheck?.checked) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject,
          from_name: 'C-54 HomeTech website',
          replyto: form.email,
          name: form.name,
          email: form.email,
          location: form.area,
          interest: form.interest,
          devices: form.devices || '(none listed)',
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('sent');
        setForm(EMPTY);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // Without JavaScript the browser submits the form itself: to Web3Forms when it's
  // set up, otherwise to the email app. Either way, nothing lands in this page's URL.
  const fallback = USE_SERVICE
    ? { action: WEB3FORMS_URL, method: 'post' }
    : { action: `mailto:${SITE.email}`, method: 'post', encType: 'text/plain' };

  return (
    <div className="page">
      <Seo
        title="Get a Free Quote | C-54 HomeTech, Cincinnati Smart Home"
        description="Ask for a flat-price quote on Home Assistant installation or a Bitcoin mining heater. Serving Greater Cincinnati, Dayton, Lexington, NKY and SE Indiana."
        path="/contact"
      />

      <section className="hero hero-sm">
        <h1>Get a free quote</h1>
        <p className="lead">
          Tell me about your home and what you want it to do. I’ll reply by email within {SITE.replyTime} with a flat
          price, or a question or two if I need to know more. I won’t call you: this form doesn’t ask for a phone
          number.
        </p>
      </section>

      <div className="contact-grid">
        <form className="panel quote-form" onSubmit={submit} {...fallback}>
          <h2>Request a quote</h2>
          {USE_SERVICE && <input type="hidden" name="access_key" value={SITE.web3formsKey} />}
          {USE_SERVICE && <input type="hidden" name="subject" value="Quote request from c54hometech.com" />}
          <label className="hidden-field" aria-hidden="true">
            Leave this box unticked
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
          </label>
          <label>
            Name
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Where are you?
            <select name="area" value={form.area} onChange={update} required>
              <option value="" disabled>Choose your county</option>
              {AREAS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </label>
          <label>
            What are you interested in?
            <select name="interest" value={form.interest} onChange={update} required>
              <option value="" disabled>Choose one</option>
              {INTERESTS.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </label>
          <label>
            Devices or hardware you have now <span className="muted">(optional)</span>
            <textarea name="devices" rows="3" value={form.devices} onChange={update} placeholder="e.g. Hue bulbs, Ecobee thermostat, Ring doorbell, an old laptop" />
          </label>
          <label>
            Anything else?
            <textarea name="message" rows="4" value={form.message} onChange={update} />
          </label>
          <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === 'sending'}>
            {USE_SERVICE ? (status === 'sending' ? 'Sending…' : 'Send my request') : 'Open my email to send'}
          </button>
          <p className="muted small">
            {USE_SERVICE
              ? 'This goes straight to my inbox. I use your details to reply to you and for nothing else.'
              : 'This opens your email app with everything filled in. Nothing is stored on this site.'}
          </p>
          <div role="status" aria-live="polite">
            {status === 'sent' && (
              <p className="notice">
                Thanks. Your request is in my inbox, and I’ll reply by email within {SITE.replyTime}.
              </p>
            )}
            {status === 'error' && (
              <p className="notice notice-error">
                That didn’t go through. Try again, or{' '}
                <button type="button" className="link-button" onClick={openEmailApp}>
                  send it from your email app
                </button>{' '}
                instead.
              </p>
            )}
            {status === 'mailto' && (
              <p className="notice">
                If your email app didn’t open, write to me directly at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            )}
          </div>
        </form>

        <aside className="panel">
          <h2>What happens next</h2>
          <ol className="small-steps">
            <li>I reply within {SITE.replyTime} with a flat price, or with questions if I have any.</li>
            <li>We pick an install date that works for you.</li>
            <li>You pay once. Nothing renews.</li>
          </ol>
          <h3>Other ways to reach me</h3>
          <p>
            Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p>
            Stacker News: <a href={SITE.stackerNews.url} rel="me noopener">{SITE.stackerNews.handle}</a>
          </p>
          <p>
            Nostr:{' '}
            <a href={SITE.nostr.url} rel="me noopener" title={SITE.nostr.npub}>
              {`${SITE.nostr.npub.slice(0, 10)}…${SITE.nostr.npub.slice(-6)}`}
            </a>
          </p>
          <p className="npub small muted">{SITE.nostr.npub}</p>
          <h3>Service area</h3>
          <p>I install in person across {SITE.areaSummary}. Bitcoin heaters ship anywhere in the US.</p>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
