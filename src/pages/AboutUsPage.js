import React, { useEffect, useRef } from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <div className='about'></div>
      <div className='about2'>
        <h1 className='a1'>Why Mine Bitcoin?</h1>
        <p className='a1'>From the summer 1948 to the fall of 1949, one of the most unbelievable humanitarian missions of the 20th century was executed.</p>
        <p className='a1'>Almost 100 million miles of air travel was executed (mostly by C-47 and C-54 transports) to provide food for the starving citizens of West Berlin. It was a risky and costly venture, but saved countless lives and was an entirely peaceful mission.</p>
        <p className='a1'>Four years prior to the blockade that inspired the airlift, the Bretton Woods Accord created the International Monetary Fund. Among other things, one of the tasks of this organization was the rebuilding of the same German economy which was the site of the airlift.</p>
        <p className='a1'>In the latter half of the 20th century, the IMF has become a predatory lender, often times creating and fueling crises in the Global South far more bleak than the Berlin Blockade.</p>
        <p className='a1'>For the past 16 years, the Bitcoin network has grown as a lifeline to victims living in countries targeted by the IMF worldwide.</p>
        <p className='a1'>Whereas victims in the Weimar Republic were robbed of their savings, people with bitcoin can live stable lives. Whereas victims of the Nazis fled with nothing or died, people with bitcoin can cross borders with their former earnings. Whereas victims of the Soviets starved or were killed, people with bitcoin are fed.</p>
        <p className='a1'>In securing the bitcoin network in a decentralized manner, you become a part of this movement. It is a movement that already has thousands of heroic tales. It has saved countless lives. It is entirely peaceful, and anyone, anywhere can contribute.</p>
        <p className='a1'></p>
      </div>
    </div>
  );
};

export default AboutUsPage;