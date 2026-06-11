import React from 'react';

const HomeAssistantServices = () => {
  return (
    <div className="ha-services">
      <h2 className="ha-title">Home Assistant Installation Services</h2>
      <p className="ha-intro">
        Take control of your home with self-hosted automation. No cloud subscriptions, 
        no data harvesting, fully private. All services performed locally in your home.
      </p>
      
      <div className="ha-tiers">
        <div className="ha-tier">
          <h3>Basic Setup</h3>
          <p className="ha-price">$200</p>
          <ul className="ha-features">
            <li>Home Assistant installation on your hardware</li>
            <li>Basic device integration (5 devices)</li>
            <li>Remote access setup (optional)</li>
            <li>30-minute training session</li>
          </ul>
          <a href="mailto:c54hometech@proton.me?subject=Home%20Assistant%20-%20Basic%20Setup&body=Name:%20%0AEmail:%20%0APhone:%20%0A%0AService%20Tier:%20Basic%20($200)%0A%0ACurrent%20Hardware%20(what%20do%20you%20have%20now?):%20%0A%0ADevices%20to%20integrate:%20%0ALocation%20(for%20scheduling):%20%0AAdditional%20notes:%20" className="ha-button">Book Now</a>
        </div>

        <div className="ha-tier">
          <h3>Standard Setup</h3>
          <p className="ha-price">$400</p>
          <ul className="ha-features">
            <li>Everything in Basic</li>
            <li>Up to 15 devices integrated</li>
            <li>Basic automations (lighting schedules, etc.)</li>
            <li>Dashboard customization</li>
            <li>1-hour training session</li>
          </ul>
          <a href="mailto:c54hometech@proton.me?subject=Home%20Assistant%20-%20Standard%20Setup&body=Name:%20%0AEmail:%20%0APhone:%20%0A%0AService%20Tier:%20Standard%20($400)%0A%0ACurrent%20Hardware%20(what%20do%20you%20have%20now?):%20%0A%0ADevices%20to%20integrate:%20%0ALocation%20(for%20scheduling):%20%0AAdditional%20notes:%20" className="ha-button">Book Now</a>
        </div>

        <div className="ha-tier featured">
          <h3>Premium Setup</h3>
          <p className="ha-price">$700</p>
          <ul className="ha-features">
            <li>Everything in Standard</li>
            <li>Up to 30 devices integrated</li>
            <li>Advanced automations & scripts</li>
            <li>Energy monitoring & dashboards</li>
            <li>Bitcoin miner integration</li>
            <li>2-hour training session</li>
            <li>30 days of basic support</li>
          </ul>
          <a href="mailto:c54hometech@proton.me?subject=Home%20Assistant%20-%20Premium%20Setup&body=Name:%20%0AEmail:%20%0APhone:%20%0A%0AService%20Tier:%20Premium%20($700)%0A%0ACurrent%20Hardware%20(what%20do%20you%20have%20now?):%20%0A%0ADevices%20to%20integrate:%20%0ALocation%20(for%20scheduling):%20%0AAdditional%20notes:%20" className="ha-button">Book Now</a>
        </div>
      </div>

      <div className="ha-info">
        <h3>Why Self-Hosted Home Assistant?</h3>
        <ul>
          <li><strong>Privacy:</strong> Your data stays in your home, not in the cloud</li>
          <li><strong>Control:</strong> You own your automation rules</li>
          <li><strong>Freedom:</strong> Works with thousands of devices from different brands</li>
          <li><strong>Integration:</strong> Connect your Bitcoin miners for heat monitoring and automation</li>
          <li><strong>Longevity:</strong> No dependency on company servers or subscription services</li>
        </ul>
      </div>

      <div className="ha-faq">
        <h3>Frequently Asked Questions</h3>
        <div className="ha-faq-item">
          <p><strong>What hardware do I need?</strong></p>
          <p>A Raspberry Pi 4 (4GB+) or any old computer works. Home Assistant also sells their own hardware (Green, Yellow, Pro). We can help you decide what works best for your situation.</p>
        </div>
        <div className="ha-faq-item">
          <p><strong>How long does installation take?</strong></p>
          <p>Basic: 1-2 hours. Standard: 2-3 hours. Premium: 3-4 hours.</p>
        </div>
        <div className="ha-faq-item">
          <p><strong>Do you offer ongoing support?</strong></p>
          <p>Yes, contact us for custom support packages.</p>
        </div>
        <div className="ha-faq-item">
          <p><strong>Can you integrate with my existing smart devices?</strong></p>
          <p>Most likely! Home Assistant supports thousands of brands. Contact us for compatibility.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAssistantServices;