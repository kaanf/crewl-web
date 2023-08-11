'use client'

import React, { useState } from 'react'
import CustomerCard from './customercard';

import {
  BiRightArrowAlt,
  BiLeftArrowAlt
} from 'react-icons/bi'

const Customers: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const customersData = [
    {
      customer: 'Hurricane Labs',
      quote: 'Using GreyNoise Intelligence helps the Hurricane Labs team eliminate background noise and focus on the most actionable and relevant alerts for our customers. Rather than presenting our analysts with even more data to investigate, GreyNoise decreases the volume of alerts that are triggered by 25% - which makes for a happier and more effective SOC team.',
      title: 'Director of Managed Services',
      backgroundColor: '#bfdbfe',
    },
    {
      customer: 'Expel',
      quote: 'RIOT arms our analysts with a simple, colorized tool for surfacing enrichment details so the SOC can quickly spot and dispatch non-threat activity.',
      title: 'Ian Cooper & Evan Richard, Detection And Response Team',
      backgroundColor: '#3b82f6',
    },
    {
      customer: 'Anonymous',
      quote: 'GreyNoise has proved to be a high-bang-for-the-buck data source for alert triage. The team is motivated, innovative, and great to work with.',
      title: 'Anonymous, Higher Education Center',
      backgroundColor: '#fb923c',
    },
    {
      customer: 'Anonymous',
      quote: 'GreyNoise helps our users reduce time to remediation by quickly pointing out noisy activity related to scanners botnets, or harmless business services - saving the analysts from chasing irrelevant deadends and leaving more time to investigate true threats.',
      title: 'Anonymous, Analytics Organization',
      backgroundColor: '#fed7aa',
    },
  ];

  const navigateNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % customersData.length);
  };

  const navigatePrev = () => {
    setCurrentCard((prevCard) => 
    prevCard === 0 ? customersData.length - 1 : prevCard -1 );
  };

  return (
    <div className="max-w-7xl mx-auto py-16 pt-24">
      <span className="text-xs uppercase font-semibold">Customer love &nbsp;&mdash;</span>
      <div className="border-2 border-[#222] ml-5 mr-6 relative h-[475px] md:h-72">
        <CustomerCard
          customer={customersData[currentCard].customer}
          quote={customersData[currentCard].quote}
          title={customersData[currentCard].title}
          backgroundColor={customersData[currentCard].backgroundColor}
        />
        <button onClick={navigatePrev}
          className="absolute top-1/2 -left-6 bg-white border-2 border-[#222] h-12 w-12 rounded-full flex justify-center items-center text-2xl z-50 group">
          <BiLeftArrowAlt className="group-hover:-translate-x-1 transition duration-200" />
        </button>
        <div className="absolute top-[51%] -left-5 bg-[#222] h-12 w-12 rounded-full z-10"></div>
        
        <button onClick={navigateNext}
          className="absolute top-1/2 -right-6 bg-white border-2 border-[#222] h-12 w-12 rounded-full flex justify-center items-center text-2xl z-50 group">
          <BiRightArrowAlt className="group-hover:translate-x-1 transition duration-200" />
        </button>
        <div className="absolute top-[51%] -right-7 bg-[#222] h-12 w-12 rounded-full z-10"></div>

        <div className="absolute -z-10 bg-[#222] w-full h-full top-3 left-3"></div>
      </div>
    </div>
  );
};

export default Customers