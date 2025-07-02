import React, { useEffect, useRef } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <p className='redalert'>If you stumble upon this page, note that all of these videos are currently fillers. Please don't use these as your instruction yet. I have not even watched most of them.</p>
      <h1 className='blog'>Be part of the revolution</h1>
      <br/>
        <h2 className='blog'>Mine Bitcoin</h2>
          <div className='bloggy'>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/mrtSAgcpack'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="What"
              ></iframe>
              <p className='blog'>What is bitcoin mining?</p>
            </div>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/2h1sLASxa9Q'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="Pool"
              ></iframe>
              <p className='blog'>How do I join a mining pool?</p>
            </div>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/qwKCb_lnbL0'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="setup"
              ></iframe>
              <p className='blog'>How do I configure a miner?</p>
            </div>
          </div>
        <h2 className='blog'>Heat your home with it</h2>
          <p className='blog'>Read the latest articles about bitcoin and freedom tech.</p>
        <h2 className='blog'>Automate your home locally</h2>
          <p className='blog'>Read the latest articles about bitcoin and freedom tech.</p>
    </div>
  );
};

export default BlogPage;