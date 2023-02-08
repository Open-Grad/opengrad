import React, { useRef, useState } from "react";

export default function mentors() {
 

  return (
    <section className=" px-8 pb-16 pt-16 bg-gray-50 ">
      <div className="flex flex-col items-center p-0">
        <p className="text-lg font-medium text-gray-600 font-pj">
          World class Service
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Testimonials
        </h2>
      </div>

      {/* carousel */}

      <div class="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10  ">
        <div class="md:2/3 relative aspect-[3/3] w-[90%] shrink-0 snap-start snap-always rounded-xl sm:w-[44%] md:w-[30%]">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-2sm leading-relaxed text-gray-900 font-pj">
                  &quot; I am thrilled to come across this new edtech concept, 
                    Opengrad bringing together the aspirants, converts and the alumni.
                     This will give the aspirants  a never before experience. 
                     This is one of a kind platform that offers top quality content curated by the 
                     converts and students from premier universities. 
                     With Opengrad the competitive exams are no longer a monopoly of students with
                      access to expensive coaching materials, because here the best is offered for free! &quot;

                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                  Reshi Kiran 
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">
                  IIT Roorkee ‘18               
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:2/3 relative aspect-[3/3] w-[90%] shrink-0 snap-start snap-always rounded-xl sm:w-[44%] md:w-[30%]">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-lg leading-relaxed text-gray-900 font-pj">
                    “Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.”
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                    Jacob Jones
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">
                    Digital Marketer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:2/3 relative aspect-[3/3] w-[90%] shrink-0 snap-start snap-always rounded-xl sm:w-[44%] md:w-[30%]">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-lg leading-relaxed text-gray-900 font-pj">
                    “Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.”
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                    Jacob Jones
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">
                    Digital Marketer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:2/3 relative aspect-[3/3] w-[90%] shrink-0 snap-start snap-always rounded-xl sm:w-[44%] md:w-[30%]">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-lg leading-relaxed text-gray-900 font-pj">
                    “Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.”
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                    Jacob Jones
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">
                    Digital Marketer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
