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
      <p className='fun'>Here is some fun stuff to play with.</p>
      <div className='fun-links'>
        <div className='fun-card'>
          <a className='fun' href='https://bitcoinisforcriminals.com/' target='_blank' rel='noopener noreferrer'>a PSA for all bitcoiners</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='http://bitcoin-defcon.vercel.app/' target='_blank' rel='noopener noreferrer'>a goofy way to check how fast the Bitcoin network is currently processing transactions</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='http://bitcoin-battleship.vercel.app/' target='_blank' rel='noopener noreferrer'>a silly battleship style game demonstrating the power of decentralization</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='http://bitcoin-chess.vercel.app' target='_blank' rel='noopener noreferrer'>a silly chess inspired game demonstrating the power of decentralization</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='https://national-debt-snake.vercel.app/' target='_blank' rel='noopener noreferrer'>the game of snake inspired by, and with a real time feed of the US national debt</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='https://stresswallet.vercel.app/' target='_blank' rel='noopener noreferrer'>check and see if you have enough bitcoin to pay off the US national debt</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='https://piggysats-webln.vercel.app/' target='_blank' rel='noopener noreferrer'>view your browser extension wallet as a piggy bank and accept payments</a>
        </div>
        <div className='fun-card'>
          <a className='fun' href='https://mempooldotspaceinvaders.space' target='_blank' rel='noopener noreferrer'>Space Invaders powered by live Bitcoin mempool data</a>
        </div>
      </div>
    </div>
  );
};

export default FunPage;