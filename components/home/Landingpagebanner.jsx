/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Navbar from '../navbar/Navbar'

export default function landingpagebanner() {
    
    
    return (
      <div className="w-full min-h-screen font-sans from-[#e6fef7] to-white text-gray-900">
        <Navbar />
        <div className="h-screen bg-gradient-to-b from-[#e6fef7] to-white px-24 ">
          {/* <img
            src="/images/blob.svg"
            alt="h"
            className="absolute top-0 right-0 pointer-events-none"
          /> */}
          {/* <div className="px-0 mx-auto max-w-6xl">
            <div className="flex justify-between items-center py-10">
              <img src="/images/logo.svg" />
              <nav className="hidden md:flex md:items-center md:space-x-10">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Try now
                </a>
              </nav>
              <button className="p-4 md:hidden">
                <img
                  src="images/location.svg"
                  className="w-6 h-6 text-gray-800"
                />
              </button>
            </div>
          </div> */}
          <div className="px-0 py-8 mx-auto max-w-7xl">
            <div className="flex flex-col-reverse gap-8 items-center justify-center md:flex-row lg:items-center">
              <div className="pt-4 px-5 pr-0 sm:pr-8 pb-24 text-center md:pb-12 md:w-2/3 md:text-left">
                <h1 className="relative z-10 text-2xl sm:text-5xl font-bold md:text-6xl font-display">
                  Take your first step towards getting into your
                  {/* <span className="relative sm:block hidden after:content-[url(/images/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1">
                    dream institution
                  </span> */}
                </h1>
                <p className="pt-8 text-sm sm:text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
                  Working at home is definitely a convenient option and makes
                  sense in these unprecedented times.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center  items-center pt-6 sm:pt-12 space-x-6 md:justify-start">
                  <button className="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-[#005249]	 rounded-xl hover:shadow-xl">
                   Join Now
                  </button>
                  <button className="flex items-center">
                    <img
                      src="/images/play-button.svg"
                      className="drop-shadow-lg hover:drop-shadow-xl"
                    />
                    <span className="pl-4 font-bold tracking-wide">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center w-1/2 border-gray-400">
                <img src="/images/illustration.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="py-12 px-6 mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <span className="absolute top-0 left-4 w-3 h-3 rounded-full opacity-50" />
                    <img src="/images/briefcase.svg" className="relative" />
                  </div>
                  <div className="relative">
                    <span className="absolute right-0 bottom-1 w-12 h-1.5 opacity-60" />
                    <h2 className="relative text-xl font-display">
                      Many remote
                    </h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Many remote jobs also come with flexible schedules, which
                  means that workers can start and end their day as they choose.
                </p>
              </div>

              <div className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <span className="absolute top-0 left-4 w-3 h-3 rounded-full opacity-50" />
                    <img src="/images/briefcase.svg" className="relative" />
                  </div>
                  <div className="relative">
                    <span className="absolute right-0 bottom-1 w-12 h-1.5 opacity-60" />
                    <h2 className="relative text-xl font-display">
                      Many remote
                    </h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Many remote jobs also come with flexible schedules, which
                  means that workers can start and end their day as they choose.
                </p>
              </div>

              <div className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <span className="absolute top-0 left-4 w-3 h-3 rounded-full opacity-50" />
                    <img src="/images/briefcase.svg" className="relative" />
                  </div>
                  <div className="relative">
                    <span className="bg-lightgreen absolute right-0 bottom-1 w-12 h-1.5 opacity-60" />
                    <h2 className="relative text-xl font-display">
                      Many remote
                    </h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  Many remote jobs also come with flexible schedules, which
                  means that workers can start and end their day as they choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      //     <div className="sm:bg-[url('/images/bg.png')] bg-[url('/images/mobbg.jpg')]  bg-hero sm:h-full h-screen bg-no-repeat bg-cover bg-center">
      //             {/* <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/images/bg.png" alt="" /> */}

      //     <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">

      //         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
      //             <div className="max-w-3xl mx-auto text-center">
      //                 <h1 className="text-4xl font-bold sm:text-6xl">
      //                     <span className="text-transparent font-display bg-clip-text bg-gradient-to-r from-green-200 to-white"> Take your first step towards getting into your dream institution </span>
      //                 </h1>

      //                 <a href="#" title="" className="inline-flex items-center px-8 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#024751] rounded-lg sm:mt-16 hover:bg-green-800 focus:bg-green-700" role="button">
      //                     Join Now
      //                     <svg className="w-6 h-6 ml-4 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      //                     </svg>
      //                 </a>

      //             </div>
      //         </div>
      //     </section>
      // </div>
    );
}
