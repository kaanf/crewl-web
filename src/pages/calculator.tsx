import React from 'react'
import Link from 'next/link'

const Calculator = () => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="flex flex-col justify-center items-center py-16">
        <span className="text-xs uppercase tracking-widest">ROI Calculator</span>
        <p className="font-semibold text-3xl py-4 text-center">How much could you save?</p>
        <p className="font-mono text-sm w-1/2 text-center pb-6">
          Check out our ROI Calculator to see how much your organization could
          save by using GreyNoise.
        </p>
        <div
          className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-orange-300 relative group cursor-pointer">
          <span className="text-center text-xs md:text-sm uppercase font-mono tracking-widest">
            Discover Your Savings
          </span>
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2 md:top-2.5 left-1 md:left-2 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-200"></div>
        </div>
      </div>
    </div>
  )
}

export default Calculator