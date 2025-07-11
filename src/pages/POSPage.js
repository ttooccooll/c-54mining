import React, { useEffect, useRef } from 'react';
import POS from '../components/POS';
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
      <POS />
    </div>
  );
};

export default POSPage;