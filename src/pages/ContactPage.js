import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './ContactPage.css';

const ContactPage = () => {  
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | C-54 HomeTech</title>
        <meta name="description" content="Contact C-54 HomeTech. Reach out via email or nostr for Bitcoin miners, Home Assistant installation, or general inquiries." />
      </Helmet>
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
        <h1 className='contact'>Contact Us</h1>
        <p className='contact'>Get in touch with us via email or nostr.</p>
      </div>
    </>
  );
};

export default ContactPage;