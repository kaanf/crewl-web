import React from 'react'
import Link from 'next/link'

import {
  BiRightArrowAlt
} from 'react-icons/bi'

const Integrations = () => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="flex flex-col items-center py-16">
        <div className="flex items-end space-x-4">
          <span className="text-4xl font-light">Integrations</span>
          <div className="pb-2 flex items-center space-x-2 group cursor-pointer">
            <p className="font-mono text-sm underline underline-offset-4 decoration-2 decoration-orange-300">See All</p>
            <BiRightArrowAlt 
              className="group-hover:translate-x-1 transition duration-200" />
          </div>
        </div>
        <div className="py-2">
          <p className="font-mono text-sm text-center">
            GreyNoise integrates into your favorite tools.
          </p>
        </div>
        {/* <div className="pt-16">

          logos?

        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-b-2 border-[#222]">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#222] p-12 flex flex-col">
          <span className="text-orange-300 uppercase text-sm font-light">case study</span>
          <p className="py-4 text-xl font-light tracking-widest">
            Automating with Splunk.
          </p>
          <p className="text-xs hidden md:block font-mono">
            Learn how Hurricane Labs reduces noisy alerts by leveraging GreyNoise&apos;s data in their
            Splunk ES and Phantom environments.
          </p>
          <div className="flex items-center space-x-2 group cursor-pointer pt-4 md:pt-8 w-24">
            <span className="text-xs underline underline-offset-4 decoration-2 decoration-orange-300">Read More</span>
            <BiRightArrowAlt 
              className="group-hover:translate-x-1 transition duration-200" />
          </div>
        </div>
        <div className="p-12">
          <span className="text-orange-300 uppercase text-sm font-light">case study</span>
          <p className="py-4 text-xl font-light tracking-widest">
            Automating with XSOAR.
          </p>
          <p className="text-xs hidden md:block font-mono">
            Learn how the Incident Response and Operations team at a large hospitality company 
            uses GreyNoise to enrich their XSOAR alerts and reduce noise.
          </p>
          <div className="flex items-center space-x-2 group cursor-pointer pt-4 md:pt-8 w-24">
            <span className="text-xs underline underline-offset-4 decoration-2 decoration-orange-300">Read More</span>
            <BiRightArrowAlt 
              className="group-hover:translate-x-1 transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integrations