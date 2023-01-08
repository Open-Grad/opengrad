import React from 'react'

export default function landingpagebanner() {
  return (
    <div className="sm:bg-[url('/images/bg.png')] bg-[url('/images/mobbg.jpg')]  bg-hero sm:h-full h-screen bg-no-repeat bg-cover bg-center">
            {/* <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/images/bg.png" alt="" /> */}


    <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
        

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    <span className="text-transparent font-display bg-clip-text bg-gradient-to-r from-green-200 to-white"> Take your first step towards getting into your dream institution </span>
                </h1>

                <a href="#" title="" className="inline-flex items-center px-8 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#024751] rounded-lg sm:mt-16 hover:bg-green-800 focus:bg-green-700" role="button">
                    Join Now
                    <svg className="w-6 h-6 ml-4 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

               
            </div>
        </div>
    </section>
</div>

  )
}
