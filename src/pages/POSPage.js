import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import POS from '../components/POS';
import HomeAssistantServices from '../components/HomeAssistantServices';
import BitcoinMinersForSale from '../components/BitcoinMinersForSale';
import './POSPage.css';

const POSPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop | C-54 HomeTech</title>
        <meta name="description" content="Shop Bitcoin miners and Home Assistant installation services. Buy used Antminer s9i and Avalon Nano 3 heaters, or book professional smart home setup." />
      </Helmet>
      <div style={{ padding: '15px' }} className='quote' ref={quoteRef}>
        <HomeAssistantServices />
        <BitcoinMinersForSale />
        <h2 style={{ marginTop: '40px' }}>Bitcoin Miners</h2>
        <POS />
      </div>
    </>
  );
};

export default POSPage;