import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>About | C-54 HomeTech</title>
        <meta name="description" content="Learn about C-54 HomeTech - our mission to bring Bitcoin mining, heat, and home automation for financial sovereignty." />
      </Helmet>
      <div className='quote' ref={quoteRef}>
      <div className='about'>
        <div className='about2'>
          <h1 className='a1'>C-54 HomeTech</h1>
          <p className='a1'>We do private, local Home Assistant installations. Your data stays off the cloud and in your hands. We also sell Bitcoin mining hardware configured as space heaters. Heat your home, use your excess energy, and secure the Bitcoin network while you're at it.</p>

          <h1 className='a1'>What We Do</h1>
          <p className='a1'>Private home automation: We install Home Assistant locally so your smart home runs without needing the internet. Your data never leaves your property. Pair that with mining heat and your home works for you, not for some corporation.</p>
          <p className='a1'>Bitcoin miners as heaters: Every watt a miner draws becomes heat. Instead of venting that into a data center somewhere, put it in your living room, garage, or workshop. You offset your heating costs while earning bitcoin.</p>

          <h1 className='a1'>Why It Matters</h1>
          <p className='a1'>From the summer of 1948 to the fall of 1949, C-47 and C-54 transports flew almost 100 million miles to feed the starving citizens of West Berlin. It was one of the greatest humanitarian missions of the 20th century. Is was risky, costly, confrontational, and entirely peaceful.</p>
          <p className='a1'>Four years earlier, the Bretton Woods Accord created the International Monetary Fund, tasked in part with rebuilding the German economy. In the decades since, the IMF has become a predatory lender, fueling crises in the Global South far more bleak than that of postwar Berlin.</p>
          <p className='a1'>For over 16 years, the Bitcoin network has grown as a lifeline to people living under monetary exploitation worldwide. People with bitcoin preserve their savings through inflation, carry their wealth across borders from war-torn regions, and maintain economic agency where institutions have failed them.</p>
          <p className='a1'>By securing this network in a decentralized manner, you become part of that mission. Like the Berlin Airlift, it is entirely peaceful. Unlike the Berlin Airlift, anyone, anywhere in the world can contribute.</p>
          <p className='a1'>Using Bitcoin miners as heaters is more than a novelty. It is a statement that energy can be productive, that waste can be value, and that individuals can opt out of failing systems.</p>

          <h1 className='a1'>Get Started</h1>
          <p className='a1'><a href="/shop" className='a1' style={{textDecoration: 'underline'}}>Visit the shop</a> or <a href="/contact" className='a1' style={{textDecoration: 'underline'}}>reach out</a> and we'll help you find the right setup.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;