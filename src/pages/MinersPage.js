import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './MinersPage.css';

const MinersPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Bitcoin Miners for Sale | C-54 HomeTech</title>
        <meta name="description" content="Buy used Bitcoin miners as home heaters. Antminer s9i and Canaan Avalon Nano 3 available. Turn waste heat into value." />
      </Helmet>
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
        <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
          <h1>Antminer s9i (USED)</h1>
          <p>These were once the flagship bitcoin miner. Today, you can use them to heat things!</p>
          <img src='/assets/s9i 1.jpg' alt='Antminer s9i Bitcoin miner front view' height='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <p>As is, these guys are LOUD! You can modify them with Noctua fans to mitigate the noise. This one has the old fans, but includes a shroud to hook up to ductwork and a small bend duct.</p>
          <p>Price includes shipping and handling within the United States. This listing is not currently available outside of the US.</p>
          <a href='/pos'>Pick one up in the SHOP.</a>
          <br/>
          <img src='/assets/s9i 1.jpg' alt='Antminer s9i Bitcoin miner side view' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <img src='/assets/s9i 2.jpg' alt='Antminer s9i with duct shroud modification' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <br/>
          <a href='/pos'>Pick one up in the SHOP.</a>
        </div>
        <br/>
        <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
          <h1>Canaan Avalon Nano 3 (USED)</h1>
          <p>These are great smaller mini-heaters that crank out 4Th/s.</p>
          <img src='/assets/nano3 1.jpg' alt='Canaan Avalon Nano 3 Bitcoin miner top view' height='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <p>The Avalon Nano 3 is a small heater which runs a maximum hashrate of 4Th/s at a power consumption of 140W. It emits a mild amount of heat. This is a used unit and the fans are a little louder than they used to be. Otherwise, it works perfectly.</p>
          <p>Price includes shipping and handling within the United States. This listing is not currently available outside of the US.</p>
          <a href='/pos'>Pick one up in the SHOP.</a>
          <br/>
          <img src='/assets/nano3 2.jpg' alt='Canaan Avalon Nano 3 front panel with status lights' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <img src='/assets/nano3 3.jpg' alt='Canaan Avalon Nano 3 side view' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <img src='/assets/nano3 4.jpg' alt='Canaan Avalon Nano 3 rear view with ports' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
          <br/>
          <a href='/pos'>Pick one up in the SHOP.</a>
        </div>
      </div>
    </>
  );
};

export default MinersPage;