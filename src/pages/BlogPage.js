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
      <p>The following syllabus is meant to be reproducable for anyone hoping to teach bitcoin mining, heat recycling, and home automation.</p>
      <p>These skills lay the groundwork for further decentralizing the network and building renewable energy infrastructure in diverse communities. Lesson plans and other classroom resources should follow soon.</p>
      <img
        src='/assets/Syllabus/Syllabus.1.jpeg'
        className='syllabus'
        title="syllabus"
        alt="Syllabus"
      />
      <img
        src='/assets/Syllabus/Syllabus.2.jpeg'
        className='syllabus'
        title="syllabus"
        alt="Syllabus"
      />
      <br/>
      <p>The following outline can be used as a template for presenting bitcoin mining to solar installation companies. Soon this should have accompanying power point slides and a small glossary of basic mining terminology.</p>
      <p>Ideally, local solar installers should be educated on the benefits of having a bitcoin mining department or referral options at the same time as local bitcoiners are educated on providing these services.</p>
      <img
        src='/assets/Solar/Solar.1.jpeg'
        className='syllabus'
        title="solar"
        alt="Solar"
      />
      <img
        src='/assets/Solar/Solar.2.jpeg'
        className='syllabus'
        title="solar"
        alt="Solar"
      />
      <br/>
      <h1 className='blog'>Some Helpful Videos</h1>
      <p>!!! Note that all of these videos are currently FILLER MATERIAL and were not made by me. I don't even necessarily endourse them. I just wanted to put something here while I'm making this website. Please don't use these as your instruction yet. I have not even watched most of them. !!!</p>
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