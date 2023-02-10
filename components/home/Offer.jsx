import React from 'react'

export default function Offer() {
  return (
    <section className="py-10 px-7 sm:px-4 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
              <img src="/images/icons/1.png" className="w-10 h-10" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Get mentored by rank-holders of the respective exams
            </h3>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
              <img src="/images/icons/2.png" className="w-10 h-10" />{" "}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Live Mock Tests and analysis by experts
            </h3>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
              <img src="/images/icons/3.png" className="w-10 h-10" />{" "}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Goal Setting Session by alumnus of top institutions
            </h3>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
              <img src="/images/icons/4.png" className="w-10 h-10" />{" "}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Concept Videos covering the entire syllabus
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}


