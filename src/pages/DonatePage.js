import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutUsPage.css';

const AboutUsPage = () => {
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
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
        <div className='about'></div>
        <div className='about2'>
          <h1 className='a1'>Donate Old Machines</h1>
          <p className='a1'>Our education branch is training people with stranded solar about decentralization.</p>
          <p className='a1'>We teach them about the need for decentralization. Then we teach them how to run DATUM themselves.</p>
          <p className='a1'></p>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;