import React from "react";

const ContentPageLayout1 = () => {
  return (
    <div className="container my-24 px-8 mx-auto">
      <section className="mb-32 text-black font-semibold text-xl">
        <h2 className="text-32l font-bold mb-12 text-center">
          Mission and Vision
        </h2>

        <div className="flex flex-wrap mb-12">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: 0.5 }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
                />
              </svg>
              Mission
            </div>
            <p className="text-gray-500 mb-6">
              Our Mission is to strive as a non-profit organization, providing
              students with access to best coaching for competitive examinations
              by bringing together the aspirants, alumnus and volunteers under a
              single umbrella.
            </p>
            {/* <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
              nulla saepe rerum aspernatur odio amet perferendis tempora
              mollitia? Ratione unde magni omnis quaerat blanditiis cumque
              dolore placeat rem dignissimos?
            </p> */}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-row-reverse mb-12">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
                  }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                />
              </svg>
              Vision
            </div>
            <p className="text-gray-500">
              Our Vision to grow as the best edTech platform providing coaching
              for all the leading competitive examinations across the globe
              thereby providing a level ground for all the aspirants by giving
              them access to quality coaching, mentorship and guidance, and
              thereby bringing down the inequality and differences in access to
              education
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentPageLayout1;
