import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './DonatePage.css';

const DonatePage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Donate | C-54 HomeTech</title>
        <meta name="description" content="Donate old Bitcoin mining machines to help train people about decentralization and solar energy independence." />
      </Helmet>
      <div className='quote' ref={quoteRef}>
        <div className='donate-card'>
          <div className='donate-inner'>
            <h1 className='d1'>Donate Old Machines</h1>
            <p className='d1'>Got an old miner collecting dust? Put it back to work. Our education branch trains people with stranded solar energy to mine on their own terms.</p>

            <h2 className='d1'>What Your Donation Does</h2>
            <p className='d1'>We teach why decentralization matters, then we teach the hands-on part: how to set up a miner and run DATUM themselves, so they control their own block templates instead of trusting a pool to do it for them.</p>

            <h2 className='d1'>What We Accept</h2>
            <ul className='d1'>
              <li>Older-generation ASICs (S9-era and up), working or repairable</li>
              <li>Power supplies, control boards, and spare hash boards</li>
              <li>Related networking or solar equipment</li>
            </ul>

            <h2 className='d1'>How to Donate</h2>
            <p className='d1'>Reach out and tell us what you have. We'll sort out shipping or pickup from there.</p>
            <a href="mailto:c54hometech@proton.me" className='donate-button'>Email Us</a>
            <a href="/contact" className='donate-button'>Contact Page</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
