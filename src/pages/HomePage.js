import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './HomePage.css';

const Home = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>C-54 HomeTech | Bitcoin Mining Heaters & Home Automation</title>
        <meta name="description" content="Bitcoin mining heaters and Home Assistant installation services. Take control of your home with privacy-focused automation." />
      </Helmet>
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1 className='home'>Heating, Mining, and Home Automation</h1>
      <p className='homep'>Inspired by the Berlin Airlift, we aim to provide the tools for you to be a part of the most powerful movement of our generation. All at once, you will be enabling financial inclusion to people worldwide while providing privacy and energy independence for your loved ones.</p>
      <div id='q'>
        <p className='homep'>“This technology goes around blockades and government restrictions, it allows you to move value without trusting anyone, it connects you to the world, and it allows you to empower yourself and do things that are otherwise impossible.”</p>
        <p className='homep'>― Alex Gladstein, Check Your Financial Privilege</p>
      </div>
    </div>
    </>
  );
};

export default Home;