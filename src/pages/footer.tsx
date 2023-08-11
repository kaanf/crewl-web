import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#222] text-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 p-8 gap-8">
          <div className="flex flex-col text-xs">
            <span className="font-light text-sm">Solutions</span>
            <p className="uppercase pt-1.5 pb-1">verticals</p>
            <ul className="flex flex-col space-y-1 font-mono text-neutral-400">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Healthcare</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Financial Services</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Government</li>
            </ul>
            <p className="uppercase pt-1.5 pb-1">use cases</p>
            <ul className="flex flex-col space-y-1 font-mono text-neutral-400">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Accelerated Alert Triage</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Mass Exploitation Defense</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Contextualized Threat Hunting</li>
            </ul>
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-light text-sm">Company</span>
            <ul className="pt-1.5 text-neutral-400 font-mono flex flex-col space-y-1">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">News</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Press Releases</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Events</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Community Love</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Request Swag</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-light text-sm">Resources</span>
            <ul className="pt-1.5 flex flex-col space-y-1 font-mono text-neutral-400">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Resource Hub</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Glossary of Terms</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">ROI Calculator</li>
            </ul>
            <p className="pt-[1.25rem] pb-1 font-light text-sm">Partners</p>
            <ul className="flex flex-col space-y-1 font-mono text-neutral-400">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">GreyNoise Partners</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Reseller Partners</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Technical Alliances</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">OEM Partners</li>
            </ul>
          </div>
          <div className="flex flex-col text-xs">
            <ul className="md:pt-6 flex flex-col space-y-1 font-mono text-neutral-400">
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Community</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Pricing</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Documentation</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Blog</li>
              <li className="cursor-pointer hover:text-orange-300 transition duration-200">Log In</li>
            </ul>
          </div>
        </div>
        <div className="px-2 pb-2 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xs font-mono">
            <span>&copy; GreyNoise, Inc. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-2 text-xs pt-2 md:pt-0">
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Terms</p>
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Privacy</p>
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Security</p>
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Cookies</p>
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Patents</p>
            <p className="cursor-pointer hover:text-orange-300 transition duration-200">Principles</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer