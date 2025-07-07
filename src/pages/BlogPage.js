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
      <h1 className='blog'>Be part of the revolution</h1>
      <p>The following curriculum is meant to be reproducable for anyone hoping to teach bitcoin mining, heat recycling, and home automation.</p>
      <p>These skills lay the groundwork for further decentralizing the network and building renewable energy infrastructure in diverse communities. Lesson plans and other classroom resources should follow soon.</p>
      <iframe      
        src='/assets/Curriculum.pdf'
        className='curriculum'
        title="setup"
      ></iframe>
      <br/>
      <h1 className='blog'>Some Helpful Videos</h1>
      <p className='redalert'>If you stumble upon this page, note that all of these videos are currently fillers and were not made by. Please don't use these as your instruction yet. I have not even watched most of them.</p>
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
          <div className='bloggy'>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/L2hE-kAnlvs'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="Pool"
              ></iframe>
              <p className='blog'>HVAC</p>
            </div>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/Qo9JfkJF6I0'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="setup"
              ></iframe>
              <p className='blog'>Space Heater</p>
            </div>
          </div>
        <h2 className='blog'>Automate your home locally</h2>
          <div className='bloggy'>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/Z4gvkmJ8q48'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="What"
              ></iframe>
              <p className='blog'>Home Assistant</p>
            </div>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/KBjgOJT558A'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="Pool"
              ></iframe>
              <p className='blog'>HASS Miner</p>
            </div>
            <div className='blue'>
              <iframe      
                src='https://www.youtube.com/embed/SAwSA6C4-Qw'
                style={{ maxWidth: '100%', height: '25vh', width: '25vw', borderRadius: '10px' }} 
                title="setup"
              ></iframe>
              <p className='blog'>Solar Forecasting</p>
            </div>
          </div>
    </div>
  );
};

export default BlogPage;