import React from 'react'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col space-y-20">
        <div className="border-2 border-[#222] bg-orange-200 p-12 mr-2 relative">
          <span className="text-xs uppercase tracking-widest">IP Lookup</span>
          <p className="font-semibold text-4xl py-6">Actionable IP context.</p>
          <p className="font-mono pb-8">
            Search an IP address to see if it is scanning the internet or targeting you
            specifically.
          </p>
          <div className="bg-orange-400 absolute bottom-2 right-2 border-2 border-[#222] rounded-full h-12 w-12 flex justify-center items-center text-2xl group cursor-pointer">
            <BiRightArrowAlt 
              className="group-hover:-rotate-45 transition duration-200" />
          </div>
          <div className="absolute w-full h-full top-3 left-3 bg-[#222] -z-10"></div>
        </div>

        <div className="border-2 border-[#222] bg-blue-200 p-12 mr-2 relative">
          <span className="text-xs uppercase tracking-widest">GreyNoise Query Language (GNQL)</span>
          <p className="font-semibold text-4xl py-6">Advanced querying language.</p>
          <p className="font-mono pb-8">
            Search the GreyNoise dataset to find additional indicators and get a wider 
            picture of internet scanners.
          </p>
          <div className="bg-blue-400 absolute bottom-2 right-2 border-2 border-[#222] rounded-full h-12 w-12 flex justify-center items-center text-2xl group cursor-pointer">
            <BiRightArrowAlt 
              className="group-hover:-rotate-45 transition duration-200" />
          </div>
          <div className="absolute w-full h-full top-3 left-3 bg-[#222] -z-10"></div>
        </div>

        <div className="border-2 border-[#222] bg-blue-500 p-12 mr-2 relative">
          <span className="text-xs uppercase tracking-widest">Trends</span>
          <p className="font-semibold text-4xl py-6">Explore trending vulnerabilities.</p>
          <p className="font-mono pb-8">
            Explore trending tags, tools and CVEs in our unique data set, real-time.
          </p>
          <div className="bg-blue-700 absolute bottom-2 right-2 border-2 border-[#222] rounded-full h-12 w-12 flex justify-center items-center text-2xl group cursor-pointer">
            <BiRightArrowAlt 
              className="group-hover:-rotate-45 transition duration-200" />
          </div>
          <div className="absolute w-full h-full top-3 left-3 bg-[#222] -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Services