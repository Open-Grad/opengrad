//Our Mission is to strive as a non-profit organization, providing students with access to best coaching for competitive examinations by bringing together the aspirants, alumnus and volunteers under a single umbrella.

import React from "react";

const About = () => {
  return (
    <section class="py-24 flex items-center min-h-screen justify-center bg-white gap-4">
      <div class="mx-auto max-w-[43rem]">
        <div class="text-center">
          <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-green-600">
            Mission
          </h1>
          <p class="mt-3 text-lg leading-relaxed text-slate-400">
            Our Mission is to strive as a non-profit organization, providing
            students with access to best coaching for competitive examinations
            by bringing together the aspirants, alumnus and volunteers under a
            single umbrella.
          </p>
        </div>
        <div class="text-center">
          <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-green-600">
            Vision
          </h1>
          <p class="mt-3 text-lg leading-relaxed text-slate-400">
            Our Vision to grow as the best edTech platform providing coaching
            for all the leading competitive examinations across the globe
            thereby providing a level ground for all the aspirants by giving
            them access to quality coaching, mentorship and guidance, and
            thereby bringing down the inequality and differences in access to
            education
          </p>
        </div>
        <img src="https://ren-network.com/wp-content/uploads/2021/01/Blue-2021-EdTech-.jpeg" className="my-5"/>
      </div>
    </section>
  );
};

export default About;
