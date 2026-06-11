import React, { useEffect, useRef } from 'react';
import POS from '../components/POS';
import HomeAssistantServices from '../components/HomeAssistantServices';
import './POSPage.css';

const POSPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '15px' }} className='quote' ref={quoteRef}>
      <HomeAssistantServices />
      <h2 style={{ marginTop: '40px' }}>Bitcoin Miners</h2>
      <POS />
    </div>
  );
};

export default POSPage;