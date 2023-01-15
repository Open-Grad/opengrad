import Link from 'next/link'
import React from 'react'

export default function News() {
  return (
    <section className="py-10 bg-darkgreen sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight font-display text-white sm:text-4xl lg:text-5xl">News and Notifications</h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div className="flex flex-col justify-start flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                        <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> CAT </span>
                    </div>

                    <div className="flex-1 mt-8">
                        <p className="text-2xl font-semibold">
                            <a href="#" title="" className="text-black"> CAT 2022 Result released on iimcat.ac.in, link to download CAT scorecard</a>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ullam cupiditate quam! Voluptatum ex ullam nihil voluptates excepturi atque sed perspiciatis deserunt</p>
                    </div>
                </div>

                <div className="border-t border-gray-200">
                    <div className="flex justify-end">
                      

                        <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-green-600 hover:text-white">
                            Read more
                            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                        <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> CAT </span>
                    </div>

                    <div className="flex-1 mt-8">
                        <p className="text-2xl font-semibold">
                            <a href="#" title="" className="text-black"> CAT 2022 Result released on iimcat.ac.in, link to download CAT scorecard </a>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ullam cupiditate quam! Voluptatum ex ullam nihil voluptates excepturi atque sed perspiciatis deserunt</p>
                    </div>
                </div>

               <div className="border-t border-gray-200">
                    <div className="flex justify-end">
                      

                        <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-green-600 hover:text-white">
                            Read more
                            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl">
                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                        <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase"> JEE </span>
                    </div>

                    <div className="flex-1 mt-8">
                        <p className="text-2xl font-semibold">
                            <Link href="#" title="" className="text-black"> CAT 2022 Result released on iimcat.ac.in, link to download CAT scorecard </Link>
                        </p>
                        <p className="mt-4 text-base text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ullam cupiditate quam! Voluptatum ex ullam nihil voluptates excepturi atque sed perspiciatis deserunt</p>
                    </div>
                </div>

            <div className="border-t border-gray-200">
                    <div className="flex justify-end">
                      

                        <a href="#" title="" className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-green-600 hover:text-white">
                            Read more
                            <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
