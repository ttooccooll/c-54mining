import React, { useEffect, useRef } from 'react';
import './FunPage.css';

const FunPage = () => {  
  const quoteRef = useRef(null);

  useEffect(() => {
    if (quoteRef.current) {
      quoteRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div style={{ padding: '20px' }} className='quote' ref={quoteRef}>
      <h1 className='fun'>goofy learning tools and (loosly) educational games</h1>
      <p className='fun'>Here's some fun stuff to play with.</p>
      <ul>
        <li>
            <a className='fun' href='https://bitcoinisforcriminals.com/' target='none'>a PSA for all bitcoiners</a>
        </li>
        <li>
            <a className='fun' href='http://bitcoin-defcon.vercel.app/' target='none'>a goofy way to check how fast the Bitcoin network is currently processing transactions</a>
        </li>
        <li>
            <a className='fun' href='http://bitcoin-battleship.vercel.app/' target='none'>a silly battleship style game demonstrating the power of decentralization</a>
        </li>
        <li>
            <a className='fun' href='http://bitcoin-chess.vercel.app' target='none'>a silly chess inspired game demonstrating the power of decentralization</a>
        </li>
        <li>
            <a className='fun' href='https://national-debt-snake.vercel.app/' target='none'>the game of snake inspired by, and with a real time feed of the US national debt</a>
        </li>
        <li>
            <a className='fun' href='https://stresswallet.vercel.app/' target='none'>check and see if you have enough bitcoin to pay off the US national debt</a>
        </li>
      </ul>
    </div>
  );
};

export default FunPage;