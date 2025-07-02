import React, { useEffect, useRef } from 'react';
import './HomePage.css';

const Home = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1>Heating, Mining, and Home Automation</h1>
      <p>Inspired by the Berlin Airlift, we aim to provide the tools for you to be a part of the most powerful movement of our generation, enabling financial inclusion to people worldwide.</p>
      <div id='q'>
        <p>“This technology goes around blockades and government restrictions, it allows you to move value without trusting anyone, it connects you to the world, and it allows you to empower yourself and do things that are otherwise impossible.”</p>
        <p>― Alex Gladstein, Check Your Financial Privilege</p>
      </div>
    </div>
  );
};

export default Home;