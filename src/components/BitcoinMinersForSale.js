import React from 'react';

const BitcoinMinersForSale = () => {
  const miners = [
    {
      name: 'Bitmain Antminer',
      description: 'Various models available including S9, S17, and T17. These were once the flagship Bitcoin miners. Today, you can use them to heat your space while earning Bitcoin. Some units available with Noctua fan mods for quieter operation.',
      inquirySubject: 'Bitmain%20Antminer%20Inquiry',
    },
    {
      name: 'Canaan Avalon',
      description: 'Canaan Avalon Nano 3 and other models. Great smaller mini-heaters that crank out 4Th/s. Perfect for heating small spaces or supplemental heat. Quieter than larger miners.',
      inquirySubject: 'Canaan%20Avalon%20Inquiry',
    },
    {
      name: 'BitAxes',
      description: 'Open-source, home-made Bitcoin miners. Great for learning and experimenting with mining. Available in various configurations. Perfect for tinkerers who want to build their own mining hardware.',
      inquirySubject: 'BitAxes%20Inquiry',
    },
  ];

  return (
    <div className="miners-for-sale">
      <h2 style={{ marginTop: '40px' }}>Bitcoin Miners For Sale</h2>
      <p>We have various Bitcoin miners available. Contact us for current inventory and pricing.</p>
      
      <div className="miners-grid">
        {miners.map((miner, index) => (
          <div key={index} className="miner-card">
            <h3>{miner.name}</h3>
            <p>{miner.description}</p>
            <a 
              href={`mailto:c54hometech@proton.me?subject=${miner.inquirySubject}&body=Name:%20%0AEmail:%20%0APhone:%20%0A%0AMiner%20Type:%20${miner.name}%0A%0ACurrent%20Hardware%20(existing%20miners,%20setup):%20%0AAny%20specific%20requirements%20or%20questions:%20`}
              className="ha-button"
            >
              Inquire
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitcoinMinersForSale;