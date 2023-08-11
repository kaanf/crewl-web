import React from 'react'

const SignUp = () => {
  return (
    <div className="max-w-7xl mx-auto py-48">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="pt-8 max-w-4xl mx-auto text-3xl font-light">
          <span className="font-semibold">Sign up</span> or <span className="font-semibold">contact us</span> &mdash; start using GreyNoise today.
        </p>
      </div>

      <div className="flex justify-evenly py-12">
        <div className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-blue-200 relative group cursor-pointer">
          <span className="text-center text-xs md:text-sm uppercase font-mono tracking-widest">
            Search For Free
          </span>
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2 md:top-2.5 left-1 md:left-2 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-200"></div>
        </div>
        <div className="border-2 border-[#222] flex items-center justify-center py-2 px-4 bg-blue-500 group relative group cursor-pointer">
          <span className="text-center text-xs md:text-sm uppercase font-mono tracking-widest">
            Schedule A Demo
          </span>
          <div className="absolute bg-[#222] h-full w-[101%] -z-10 top-2 md:top-2.5 left-1 md:left-2 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-200"></div>
        </div>
      </div>

    </div>
  )
}

export default SignUp