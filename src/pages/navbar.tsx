'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { 
  AiOutlineSearch,
  AiOutlineDown
} from 'react-icons/ai'
import {
  BsChevronDown
} from 'react-icons/bs'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkHover = (index: number) => {
    setActiveLink(index);
  };
  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      {/* logo & explore */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-4xl lg:text-6xl uppercase font-bold leading-tight tracking-widest text-[#222]">GreyNoise</h1>
        </div>
        <div className="relative">
          <div className="border-2 border-[#222] py-1 md:py-2 px-2 md:px-4 flex items-center space-x-2 uppercase font-light text-xs md:text-sm cursor-pointer">
            <AiOutlineSearch 
              className="text-lg md:text-xl" />
            <span className="text-neutral-400">explore our data</span>
          </div> 
        </div>
      </div>

      {/* site links */}
      <div className="mt-4 mb-2 flex justify-between border-t-2 border-b-2 border-[#222] font-light text-xs md:text-sm uppercase">
        <Link href="/" className="w-full py-4 text-center hover:text-blue-500 transition duration-200">
          pricing
        </Link>
        <div className="border-r-2 border-[#222]"
        ></div>
        <Link href="/#about" className="w-full py-4 text-center hover:text-blue-500 transition duration-200">
          blog
        </Link>
        <div className="border-r-2 border-[#222]"
        ></div>

        {/* sm */}
        <Link href="/#more" className="hidden md:block w-full py-4 text-center hover:text-blue-500 transition duration-200">
          documentation
        </Link>
        {/* md + */}
        <Link href="/#more" className="block md:hidden w-full py-4 text-center hover:text-blue-500 transition duration-200">
          docs
        </Link>
        
        <div className="border-r-2 border-[#222]"
        ></div>
        <Link href="/#contact" className="w-full py-4 text-center hover:text-blue-500 transition duration-200">
          log in
        </Link>
      </div>

      {/* more links */}
      <div className="mt-2 flex gap-4 items-center justify-evenly flex-wrap md:justify-between py-2">
        
        {/* PRODUCT */}
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onMouseEnter={() => handleLinkHover(0)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="group-hover:text-blue-500 transition duration-200 uppercase text-sm">Product</span>
          <BsChevronDown className="group-hover:text-blue-500 transition duration-200" />
          {activeLink === 0 && (
            <div className="absolute top-[12rem] left-0 right-2 z-50">
              <div className="max-w-7xl mx-auto h-fit md:h-48 border-b-2 border-[#222] bg-white flex flex-col md:flex-row justify-between text-sm py-2">
                <div className="w-full md:w-1/3" >
                  <p className="font-mono">
                    GreyNoise identifies internet scanners and common business activity
                    in your security events so you can make confident decisions, faster!
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Link
                    href="/"
                    className="uppercase my-8 md:my-0 md:mb-4 hover:text-blue-500 transition duration-200"  
                  >
                    product overview
                  </Link>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mb-6">
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Explore</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Search
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          IP Similarity
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Trends
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Investigate</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          IP Timeline
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          IP Details
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Tag Details
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Act</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Blocklists
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Alerts
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Integrate</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Integrations
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          API
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SOLUTIONS */}
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onMouseEnter={() => handleLinkHover(1)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="group-hover:text-blue-500 transition duration-200 uppercase text-sm">solutions</span>
          <BsChevronDown className="group-hover:text-blue-500 transition duration-200" />
          {activeLink === 1 && (
            <div className="absolute top-[12rem] left-0 right-2 z-50">
              <div className="max-w-7xl mx-auto h-fit md:h-48 border-b-2 border-[#222] bg-white flex flex-col md:flex-row justify-between text-sm py-2">
                <div className="w-full md:w-1/3" >
                  <p className="font-mono">
                    GreyNoise deploys solutions tailored to the needs of specific industries
                    and use cases.
                  </p>
                </div>
                <div className="flex flex-col justify-start items-end">
                  <div className="grid grid-cols-2 gap-8 mb-6 mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Verticals</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Healthcare
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Financial Services
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Government
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Use cases</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Maximize SOC Efficiency
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Mass Exploitation Defense
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Contextualized Threat Hunting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RESOURCES */}
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onMouseEnter={() => handleLinkHover(2)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="group-hover:text-blue-500 transition duration-200 uppercase text-sm">resources</span>
          <BsChevronDown className="group-hover:text-blue-500 transition duration-200" />
          {activeLink === 2 && (
            <div className="absolute top-[12rem] left-0 right-2 z-50">
              <div className="max-w-7xl mx-auto h-fit md:h-48 border-b-2 border-[#222] bg-white flex flex-col md:flex-row justify-between text-sm py-2">
                <div className="w-full md:w-1/3" >
                  <p className="font-mono">
                    Check out our demos, case studies, and more to help expand your skills.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="grid grid-cols-2 gap-8 w-full mb-6 mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Featured Content</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          How I Use GreyNoise (video)
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Cyberwire: Hacking Humans #199 (podcast)
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">GreyNoise Resources</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Resources Hub
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          ROI Calculator
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Community
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Clossary of Terms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* COMPANY */}
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onMouseEnter={() => handleLinkHover(3)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="group-hover:text-blue-500 transition duration-200 uppercase text-sm">company</span>
          <BsChevronDown className="group-hover:text-blue-500 transition duration-200" />
          {activeLink === 3 && (
            <div className="absolute top-[12rem] left-0 right-2 z-50">
              <div className="max-w-7xl mx-auto h-fit md:h-48 border-b-2 border-[#222] bg-white flex flex-col md:flex-row justify-between text-sm py-2">
                <div className="w-full md:w-1/3" >
                  <p className="font-mono">
                    GreyNoise collects, analyzes, and labels data on IPs that scan the internet
                    and saturate security tools with noise.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="grid grid-cols-2 gap-8 w-full mb-6 mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2 text-xs">
                      <span className="font-mono text-neutral-500">Press Room</span>
                      <ul className="border-t-2 border-[#222] w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          GreyNoise In The News
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Press Releases
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          GreyNoise Community Love
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col space-y-2 text-xs">
                      <ul className=" w-full uppercase space-y-2 pt-[0.6rem]">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Events
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Request GreyNoise Swag
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Careers at GreyNoise
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Contact Us
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PARTNERS */}
        <div
          className="flex items-center space-x-2 group cursor-pointer"
          onMouseEnter={() => handleLinkHover(4)}
          onMouseLeave={handleLinkLeave}
          >
          <span className="group-hover:text-blue-500 transition duration-200 uppercase text-sm">partners</span>
          <BsChevronDown className="group-hover:text-blue-500 transition duration-200" />
          {activeLink === 4 && (
            <div className="absolute top-[12rem] left-0 right-2 z-50">
              <div className="max-w-7xl mx-auto h-fit md:h-48 border-b-2 border-[#222] bg-white flex flex-col md:flex-row justify-between text-sm py-2">
                <div className="w-full md:w-1/3" >
                  <p className="font-mono">
                    Expand your reach, increase revenues, and deepen customer relationships
                    by partnering with GreyNoise.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="grid grid-cols-1 gap-8 w-full mb-6 mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2 text-xs">
                      <ul className="w-full uppercase space-y-2 pt-2">
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          GreyNoise Partners
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Reseller Partners
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          Technical Alliances
                        </li>
                        <li className="hover:text-blue-500 transition duration-200 cursor-pointer">
                          OEM Partners
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar