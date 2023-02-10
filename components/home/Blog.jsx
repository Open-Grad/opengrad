import React from 'react'



function BlogCard(){
  return(
    <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
                  alt="thumbnail-1"
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        Growth
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900">•</span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>
                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default function Blog() {
  return (
    <section className="py-10 px-0 sm:px-24 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight font-display text-black sm:text-4xl lg:text-5xl">
              Blogs & Articles
            </h2>
          </div>

      
        </div>

        {/* <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
                  alt="thumbnail-1"
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        Growth
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900">•</span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>
                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
                  alt="thumbnail-1"
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        Growth
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900">•</span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>
                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png"
                  alt="thumbnail-1"
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        Growth
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900">•</span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>
                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewbox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}



        

       
      </div>
    </section>
  );
}
