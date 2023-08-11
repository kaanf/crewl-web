import React from 'react'
import Image from 'next/image'

const Video = () => {
  return (
    <div className="max-w-7xl mx-auto pb-16 pt-24">
      <div className="border-2 border-[#222] bg-orange-300 mr-2 p-8 pt-32 pb-16 md:pt-24 md:p-2 md:py-28 relative flex flex-col md:flex-row justify-center items-center gap-12">
        <h3 className="text-4xl font-light">
          Solving internet <span className="font-semibold">noise</span>.
        </h3>
        <p className="md:w-1/2 font-mono text-lg">
          We collect, analyze, and label data on IPs that scan the internet and saturate security tools with noise.
          This unique perspective helps analysts spend less time on irrelevant or harmless activity,
          and more time on targeted and emerging threats. 
        </p>
        <div className="absolute bg-[#222] w-full h-full -z-10 top-3 left-3"></div>

        <div className="absolute border-2 border-[#222] bg-blue-800 w-24 h-24 rounded-full -top-12 -left-1 z-30"></div>
        <div className="absolute bg-[#222] w-24 h-24 rounded-full -top-10 left-1 z-20"></div>

        <div className="absolute border-2 border-[#222] bg-blue-500 w-20 h-20 rounded-full top-4 left-32 z-30"></div>
        <div className="absolute bg-[#222] w-20 h-20 rounded-full top-6 left-[8.5rem] z-20"></div>

        <div className="absolute border-2 border-[#222] bg-blue-300 w-16 h-16 rounded-full -top-24 left-64 z-30"></div>
        <div className="absolute bg-[#222] w-16 h-16 rounded-full -top-[5.6rem] left-[16.4rem] z-20"></div>

        <div className="absolute border-2 border-[#222] bg-blue-100 w-10 h-10 rounded-full bottom-4 left-64 z-30"></div>
        <div className="absolute bg-[#222] w-10 h-10 rounded-full bottom-3 left-[16.2rem] z-20"></div>

        <div className="absolute border-2 border-[#222] bg-blue-700 w-20 h-20 rounded-full -bottom-10 right-36 z-30"></div>
        <div className="absolute bg-[#222] w-20 h-20 rounded-full -bottom-12 right-[8.7rem] z-20"></div>
      </div>
    </div>
  )
}

export default Video