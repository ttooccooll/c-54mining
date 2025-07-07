import React, { useEffect, useRef } from 'react';
import './MinersPage.css';

const MinersPage = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
        <h1>Antminer s9i (USED)</h1>
        <p>These were once the flagship bitcoin miner. Today, you can use them to heat things!</p>
        <img src='/assets/s9i 1.jpg' alt='pic missing!' height='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <p>As is, these guys are LOUD! You can modify them with Noctua fans to mitigate the noise. This one has the old fans, but includes a shroud to hook up to ductwork and a small bend duct.</p>
        <p>Price includes shipping and handling within the United States. This listing is not currently available outside of the US.</p>
        <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
        <br/>
        <img src='/assets/s9i 1.jpg' alt='pic missing!' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <img src='/assets/s9i 2.jpg' alt='pic missing!' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <br/>
        <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
      </div>
      <br/>
      <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
        <h1>Canaan Avalon Nano 3 (USED)</h1>
        <p>These are great smaller mini-heaters that crank out 4Th/s.</p>
        <img src='/assets/nano3 1.jpg' alt='pic missing!' height='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <p>The Avalon Nano 3 is a small heater which runs a maximum hashrate of 4Th/s at a power consumption of 140W. It emits a mild amount of heat. This is a used unit and the fans are a little louder than they used to be. Otherwise, it works perfectly.</p>
        <p>Price includes shipping and handling within the United States. This listing is not currently available outside of the US.</p>
        <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
        <br/>
        <img src='/assets/nano3 2.jpg' alt='pic missing!' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <img src='/assets/nano3 3.jpg' alt='pic missing!' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <img src='/assets/nano3 4.jpg' alt='pic missing!' width='300' style={{ borderRadius: '10px', margin: '3px' }} />
        <br/>
        <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
      </div>
    </div>
  );
};

export default MinersPage;