import React, { useEffect, useRef } from 'react';
import './Nano3Page.css';

const Nano3Page = () => {
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1>Canaan Avalon Nano 3 (USED)</h1>
      <p>These are great smaller mini-heaters that crank out 4Th/s.</p>
      <img src='/assets/nano3 1.jpg' alt='pic missing!' height='400' style={{ borderRadius: '10px', margin: '5px' }} />
      <p>The Avalon Nano 3 is a small heater which runs a maximum hashrate of 4Th/s at a power consumption of 140W. It emits a mild amount of heat. This is a used unit and the fans are a little louder than they used to be. Otherwise, it works perfectly.</p>
      <p>Price includes shipping and handling within the United States. This listing is not currently available outside of the US.</p>
      <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
      <br/>
      <img src='/assets/nano3 2.jpg' alt='pic missing!' width='400' style={{ borderRadius: '10px', margin: '5px' }} />
      <img src='/assets/nano3 3.jpg' alt='pic missing!' width='400' style={{ borderRadius: '10px', margin: '5px' }} />
      <img src='/assets/nano3 4.jpg' alt='pic missing!' width='400' style={{ borderRadius: '10px', margin: '5px' }} />
      <br/>
      <a href='/pos' target='_blank'>Pick one up in the SHOP.</a>
    </div>
  );
};

export default Nano3Page;