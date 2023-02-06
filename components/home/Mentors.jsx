
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function mentors() {
  return (
    <section className="py-12 px-0 sm:px-24 bg-gray-50 sm:py-16 lg:py-20">
      <div className="sm-hidden flex px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              World class Service
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Testimonials
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
            </div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" w-screen"
      >
            {/* <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3"> */}
            <SwiperSlide>
              <div className="flex rounded-2xl flex-col overflow-hidden shadow-xl shadow-[#d8fee243]">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “I am thrilled to come across this new edtech concept, Opengrad bringing together the aspirants, converts and the alumni. This will give the aspirants  a never before experience. This is one of a kind platform that offers top quality content curated by the converts and students from premier universities. With Opengrad the competitive exams are no longer a monopoly of students with access to expensive coaching materials, because here the best is offered for free!

”
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “When money is removed from ed-tech, competitive exams become a lot easier, because they are way more easier than what the aspirants think. When you have mentors who have gone through what you are going through right now the journey will be enjoyable and fun. I feel that OpenGrad will revolutionize the edtech space and provide a level ground for all the aspirants..”
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
                        
                        Rohit Pradeep
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                      IIM Bangalore ‘24
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-[#d8fee243]">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-900 font-pj">
                        “While the majority of the organized coaching institutes were focused on Engineering and Medical entrances,  I found it difficult to connect and  understand the opportunities and preparation strategies when it comes to Law entrance examinations. The concept of Opengrad is promising. This will help a lot of people like me who was struggling for the right direction, mentorship and preparation materials during my entrance days..”
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900 font-pj">
                      Kavya 
                      </p>
                      <p className="mt-0.5 text-sm font-pj text-gray-600">
                      NUALS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            {/* </div> */}
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  );
}
