import React, { useEffect, useRef } from 'react';
import './ContactPage.css';

const ContactPage = () => {  
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1 className='contact'>Contact Us</h1>
      <p className='contact'>Get in touch with us via email or nostr.</p>
    </div>
  );
};

export default ContactPage;