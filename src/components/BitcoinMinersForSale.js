import React from 'react';

const BitcoinMinersForSale = () => {
  const miners = [
    {
      name: 'Bitmain Antminer S9',
      description: 'The S9 was once the flagship Bitcoin miner. Today, you can use it to heat your space while earning Bitcoin. These are great for heat mining. Some units available with Noctua fan mods for quieter operation.',
      inquirySubject: 'Bitmain%20S9%20Inquiry',
      bodyMinerName: 'Bitmain%20Antminer%20S9',
    },
    {
      name: 'Bitmain Antminer S19',
      description: 'The S19 is a more powerful miner with higher hash rate. Great for heating larger spaces while generating more Bitcoin. More efficient than older models.',
      inquirySubject: 'Bitmain%20S19%20Inquiry',
      bodyMinerName: 'Bitmain%20Antminer%20S19',
    },
    {
      name: 'Bitmain Antminer S21',
      description: 'The S21 is the latest generation Bitmain miner. Highest efficiency and hash rate. Perfect for serious heat mining operations.',
      inquirySubject: 'Bitmain%20S21%20Inquiry',
      bodyMinerName: 'Bitmain%20Antminer%20S21',
    },
    {
      name: 'Canaan Avalon',
      description: 'Canaan Avalon Nano 3 and other models. Great smaller mini-heaters that crank out 4Th/s. Perfect for heating small spaces or supplemental heat. Quieter than larger miners.',
      inquirySubject: 'Canaan%20Avalon%20Inquiry',
      bodyMinerName: 'Canaan%20Avalon',
    },
    {
      name: 'BitAxes',
      description: 'Open-source, home-made Bitcoin miners. Great for learning and experimenting with mining. Available in various configurations. Perfect for tinkerers who want to build their own mining hardware.',
      inquirySubject: 'BitAxes%20Inquiry',
      bodyMinerName: 'BitAxes',
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
              href={`mailto:c54hometech@proton.me?subject=${miner.inquirySubject}&body=Name:%20%0AEmail:%20%0APhone:%20%0A%0AMiner%20Type:%20${miner.bodyMinerName}%0A%0ACurrent%20Hardware%20(existing%20miners,%20setup):%20%0AAny%20specific%20requirements%20or%20questions:%20`}
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