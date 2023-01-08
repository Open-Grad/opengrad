import React from 'react'

export default function About() {
  return (
    <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="/images/about.webp" alt="" />
    </div>

    <div class="absolute inset-0 hidden bg-gradient-to-r md:block sm:from-green-900 to-transparent"></div>

    <div class="absolute inset-0 block bg-darkgreen/90 md:hidden"></div>

    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-left md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 class="text-3xl font-bold leading-tight text-white font-display sm:text-4xl lg:text-5xl">Mission & Vision</h2>
            <p class="mt-4 text-lg font-body text-gray-200">Our Mission is to strive as a non-profit organization, providing students with access to best coaching for competitive examinations by bringing together the aspirants, alumnus and volunteers under a single umbrella.</p>
            <p class="mt-4 text-lg font-body text-gray-200">Our Vision to grow as the best edTech platform providing coaching for all the leading competitive examinations across the globe thereby providing a level ground for all the aspirants by giving them access to quality coaching, mentorship and guidance, and thereby bringing down the inequality and differences in access to education</p>

          
        </div>
    </div>
</section>

  )
}
