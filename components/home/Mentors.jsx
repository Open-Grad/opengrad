import React, { useRef, useState } from "react";

export default function mentors() {
 

  return (
    <section className=" m:px-16 px-0 sm:px-24 pb-16 pt-16 bg-gray-50 ">
      <div className="flex flex-col items-center p-0">
        <p className="text-lg font-medium text-gray-600 font-pj">
          World class Service
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Testimonials
        </h2>
      </div>

      {/* carousel */}

      <div class="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-24">
        <div class="md:2/3 relative w-80 sm:w-2/3 md:w-2/3 lg:w-1/3 shrink-0 snap-start snap-always rounded-xl">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243] h-full">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-2sm leading-relaxed text-gray-900 font-pj">
                    &quot; I am thrilled to come across this new edtech concept,
                    Opengrad bringing together the aspirants, converts and the
                    alumni. This will give the aspirants a never before
                    experience. This is one of a kind platform that offers top
                    quality content curated by the converts and students from
                    premier universities. With Opengrad the competitive exams
                    are no longer a monopoly of students with access to
                    expensive coaching materials, because here the best is
                    offered for free! &quot;
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="/images/avatars/reshi.jpg"
                  alt="Reshi"
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

        <div class="md:2/3 relative w-80 sm:w-2/3 md:w-2/3 lg:w-1/3 shrink-0 snap-start snap-always rounded-xl">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243] h-full">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-2sm leading-relaxed text-gray-900 font-pj">
                    &quot; When money is removed from ed-tech, competitive exams
                    become a lot easier, because they are way more easier than
                    what the aspirants think. When you have mentors who have
                    gone through what you are going through right now the
                    journey will be enjoyable and fun. I feel that OpenGrad will
                    revolutionize the edtech space and provide a level ground
                    for all the aspirants.&quot;
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="/images/avatars/rohit.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                    Rohit Pradeep
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">
                    IIM Bangalore ‘24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:2/3 relative w-80 sm:w-2/3 md:w-2/3 lg:w-1/3 shrink-0 snap-start snap-always rounded-xl">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243] h-full">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
              <div className="flex-1">
                <blockquote className="flex-1 mt-8">
                  <p className="text-2sm leading-relaxed text-gray-900 font-pj">
                    “While the majority of the organized coaching institutes
                    were focused on Engineering and Medical entrances, I found
                    it difficult to connect and understand the opportunities and
                    preparation strategies when it comes to Law entrance
                    examinations. The concept of Opengrad is promising. This
                    will help a lot of people like me who was struggling for the
                    right direction, mentorship and preparation materials during
                    my entrance days”
                  </p>
                </blockquote>
              </div>

              <div className="flex items-center bg-slate-500  mt-8">
                <img
                  className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                  src="/images/avatars/female.png"
                  alt="Kavya"
                />
                <div className="ml-4">
                  <p className="text-base font-bold text-gray-900 font-pj">
                    Kavya
                  </p>
                  <p className="mt-0.5 text-sm font-pj text-gray-600">NUALS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
