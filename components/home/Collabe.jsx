import React from 'react'

export default function Collabe() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            Our Collaborations
          </h2>
        </div>

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
          <div>
            <img
              className="object-contain w-full h-24 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/IIM_Kozhikode_Logo.svg/1200px-IIM_Kozhikode_Logo.svg.png"
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-24 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/IIM_Kozhikode_Logo.svg/1200px-IIM_Kozhikode_Logo.svg.png"
            />
          </div>

          <div>
            <img
              className="object-contain w-full h-24 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/IIM_Kozhikode_Logo.svg/1200px-IIM_Kozhikode_Logo.svg.png"
            />
          </div>

          <div>
            <img
              className="object-contain w-full mx-auto h-24"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/IIM_Kozhikode_Logo.svg/1200px-IIM_Kozhikode_Logo.svg.png"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>
      </div>
    </section>
  );
}
