import React from 'react'

import {
  AiOutlineControl
} from 'react-icons/ai'
import {
  BiTargetLock,
  BiRadar,
  BiCheck,
  BiRightArrowAlt
} from 'react-icons/bi'
import {
  BsDot
} from 'react-icons/bs'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto pt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-[#222] pb-12 md:pb-0">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Maximize SOC efficiency by <br /> reducing noisy alerts.
          </span>
          <div className="py-12">
            <AiOutlineControl 
              className="text-6xl" />
          </div>

          {/* sm */}
          <div className="flex md:hidden flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Classification of IP intent reduces time to triage. 
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Detailed context on IPs for deeper research.
            </p>
          </div>

          {/* md + */}
          <div className="hidden md:flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Deprioritize events from benign IPs and common business services.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Classification of IP intent reduces time to triage.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Automate workflows and filter noisy alerts across SIEM, SOAR, TIP and other tools.
            </p>
          </div>

          <div className="absolute bottom-2 left-4 flex space-x-4 items-start pt-12 pb-4 text-xs font-mono w-1/2">
            <span>20% increased capacity in the SOC.</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full bottom-4 right-2 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>
        </div>

        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Defend against mass <br /> exploitation. <br />
          </span>
          <div className="pt-12 pb-12">
            <BiRadar 
              className="text-6xl" />
          </div>

          {/* sm */}
          <div className="flex md:hidden flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Visibility into mass exploit activity related to your attack surface.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              IP blocklists during windows of exposure to prioritize patching.
            </p>
          </div>

          {/* md + */}
          <div className="hidden md:flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Visibility into mass exploit activity related to your attack surface.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              IP blocklists during windows of exposure to prioritize patching.
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Block mass exploit attack IPs at your perimeter to give yourself breathing space
              to patch.
            </p>
          </div>
          <div className="absolute bottom-2 left-4 flex space-x-4 pt-12 pb-4 text-xs font-mono w-1/2">
            <span>Optimize patching & protect during &quot;window of exposure.&quot;</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full bottom-4 right-2 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>        
        </div>

        <div className="p-4 relative">
          <span className="text-sm uppercase font-semibold tracking-tight">
            Contextualize and automate <br /> threat hunting.
          </span>
          <div className="py-12">
            <BiTargetLock
              className="text-6xl" />
          </div>
          <div className="flex flex-col space-y-2 ml-4 mb-32">
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Enable threat hunters to discover the tactics, techniques, and procedures (TTPs) of 
              adversaries with attack telemetry. 
            </p>
            <p className="flex items-start text-sm font-mono">
              <span className="inline-flex"><BsDot className="text-lg" /></span>
              Bolster and automate existing cyber threat investigations with IP metadata.
            </p>
          </div>
          <div className="absolute bottom-2 left-4 flex space-x-4 pt-14 lg:pt-[6.2rem] xl:pt-[6.2rem] pb-4 text-xs font-mono w-1/2">
            <span>Gain valuable insight into emerging threats on the internet.</span>
          </div>

          <div className="cursor-pointer group absolute border-2 border-[#222] h-12 w-12 rounded-full bottom-4 right-2 bg-white flex justify-center items-center">
            <BiRightArrowAlt 
              className="text-2xl group-hover:-rotate-45 transition duration-200" />
          </div>        
        </div>
      </div>

      <div className="h-fit w-full flex flex-col p-6 py-12 border-t-2 border-[#222]">
        <div className="flex justify-between items-center text-4xl md:text-6xl font-semibold">
          <p>G</p>
          <p>R</p>
          <p>E</p>
          <p>Y</p>
          <p>N</p>
          <p>O</p>
          <p>I</p>
          <p>S</p>
          <p>E</p>
        </div>
        <div className="text-center font-mono text-xs pt-6">
          <p>Our insight is delivered through our <em>API</em>, <em>integrations</em> and <em>Visualizer</em>.</p>
        </div>
      </div>

    </div>
  )
}

export default Features