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
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <div className='about'></div>
      <div className='about2'>
        <h1 className='a1'>Why Mine Bitcoin?</h1>
        <p className='a1'>From the summer of 1948 to the fall of 1949, one of the most unbelievable humanitarian missions of the 20th century was executed. It was a marvel of logistics. It saved countless lives.</p>
        <p className='a1'>Almost 100 million miles of air travel was flown (mostly by C-47 and C-54 transports) to provide food for the starving citizens of West Berlin. It was a risky and costly venture. It was an entirely peaceful mission.</p>
        <p className='a1'>Four years prior to the blockade that inspired the airlift, the Bretton Woods Accord created the International Monetary Fund. Among other things, one of the tasks of this organization was the rebuilding of the same German economy which was the site of the airlift.</p>
        <p className='a1'>In the latter half of the 20th century, the IMF has become a predatory lender, often times creating and fueling crises in the Global South far more bleak than that of East Berlin.</p>
        <p className='a1'>For the past 17 years, the Bitcoin network has grown as a lifeline to victims living in countries exploited by the IMF worldwide. Whereas victims in the Weimar Republic were robbed of their savings, people with bitcoin live stable lives. Whereas victims of the Nazis fled with nothing or died, people with bitcoin can cross border every day from war-torn regions with their former earnings. Whereas victims of the Soviets starved or were killed, people with bitcoin are fed.</p>
        <p className='a1'>By securing the bitcoin network in a decentralized manner, you become a part of this movement. It is a movement that already has thousands of heroic tales. It has saved countless lives. Like the Berlin Airlift, it is entirely peaceful. Unlike the Berlin Airlift, anyone, anywhere in the world can contribute.</p>
        <p className='a1'>By running a local smart home, which never touches the internet, you can privately heat your home or utilize excess solar power while making this network more robust and secure. Using Bitcoin miners as heaters is more than a novelty. It is a statement that energy can be productive, that waste can be value, and that individuals can opt out of failing financial systems.</p>
        <p className='a1'>We also offer Home Assistant installation services to help you take control of your home automation without sacrificing privacy. Your data stays in your home, not in the cloud. Combined with Bitcoin mining heat, this gives you true energy independence. Your home now works for you, not for corporations or governments. Whether you're looking to heat your space with purpose or build a self-sovereign home, we're here to help you get there.</p>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;