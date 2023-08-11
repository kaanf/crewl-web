import React from 'react'

import {
  BiRightArrowAlt,
  BiSolidQuoteAltLeft
} from 'react-icons/bi'

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="text-xs uppercase font-semibold flex items-center">
        <span>Community love &nbsp;&mdash;</span>
        <div className="group flex items-center cursor-pointer">
          <span>&nbsp; See All</span>
          <BiRightArrowAlt 
            className="text-sm group-hover:translate-x-1 transition duration-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mr-2">
        <div className="w-full h-fit border-2 border-[#222] p-8 flex flex-col justify-between relative bg-blue-200">
          <BiSolidQuoteAltLeft 
            className="text-2xl" />
          <p className="font-mono py-6 text-xs">
            We could spend a bunch of money and do the patchwork on a bunch of these tools,
            or just have GreyNoise.
          </p>
          <span className="text-xs uppercase">
            Info Sec Specialist (Anonymous)
          </span>

          <div className="absolute top-3 left-3 w-full h-full bg-[#222] -z-10"></div>
        </div>

        <div className="w-full h-full border-2 border-[#222] p-8 flex flex-col justify-between relative bg-blue-500">
          <BiSolidQuoteAltLeft 
            className="text-2xl" />
          <p className="font-mono py-6 text-xs">
            I have a lot of confidence in GreyNoise.
          </p>
          <span className="text-xs uppercase">
            CISO (Anonymous)
          </span>

          <div className="absolute top-3 left-3 w-full h-full bg-[#222] -z-10"></div>
        </div>

        <div className="w-full h-full border-2 border-[#222] p-8 flex flex-col justify-between relative bg-orange-500">
          <BiSolidQuoteAltLeft 
            className="text-2xl" />
          <p className="font-mono py-6 text-xs">
            Andrew has been a visionary in how to build a viral company.
          </p>
          <span className="text-xs uppercase">
            CTO (Anonymous)
          </span>

          <div className="absolute top-3 left-3 w-full h-full bg-[#222] -z-10"></div>
        </div>
      </div>   

    </div>
  )
}

export default Community