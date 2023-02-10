import React from 'react'

export default function Videosection() {
  return (
    <section className="bg-white 2xl:py-24">
      <div className="px-4 mx-auto bg-gradient-to-br from-[#006d47] to-[#7dc391] max-w-7xl sm:px-6 lg:px-8 2xl:rounded-t-xl">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div className="lg:order-2 2xl:-mr-24">
              <iframe
                className="w-full aspect-video rounded-lg ..."
                src="https://www.youtube.com/embed/bz0ZCUv5rYo"
              ></iframe>
            </div>

            <div className="lg:order-1 p-3">
              <h2 className="text-2xl font-bold font-display leading-tight text-white sm:text-4xl lg:text-5xl tracking-wide lg:leading-snug">
                What is stopping you from getting into your dream institution?{" "}
                <br className="hidden xl:block" />
              </h2>

              <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                <li className="flex items-center">
                  <img src="/images/icons/imoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    Lack of motivation?{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <img src="/images/icons/imoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    Lack of direction?{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <img src="/images/icons/imoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    Lack of learning materials & mentorship?{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <img src="/images/icons/imoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    Lack of access to expensive coaching?{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <img src="/images/icons/smileimoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    If yes, we are here with all you need!{" "}
                  </span>
                </li>

                <li className="flex items-center">
                  <img src="/images/icons/smileimoji.png" className="h-9 w-9" />
                  <span className="ml-3 font-light font-body text-white">
                    {" "}
                    Get Free Support{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="px-4 mx-auto bg-green-500 max-w-7xl -mt-9 sm:px-6 lg:px-8 2xl:rounded-b-xl">
        <div className="container bg-green-500 mx-auto">
          <div className="bg-primary relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-2/3">
                <h2 className="mb-6 text-xl font-body leading-snug text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                  OpenGrad: A free and open source Ed-tech curated by alumni of
                  top institutions and rank holders of various competitive exams{" "}
                  <br className="xs:block hidden" />
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="flex flex-wrap lg:justify-end"></div>
              </div>
            </div>
            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
}
