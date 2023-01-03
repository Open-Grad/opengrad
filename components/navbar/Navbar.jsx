import React from "react";
import useState from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className=" bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between lg:justify-end h-16 lg:h-20">
            <div className="lg:absolute lg:-translate-x-1 lg:inset-y-5 lg:left-1">
              <div className="flex-shrink-0">
                <a href="/" title="" className="flex">
                  <img
                    className="w-auto h-8 lg:h-12"
                    src="/images/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={opening}
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="/" title="" className="text-base font-medium text-black">
                {" "}
                Home{" "}
              </a>

              <a
                href="/"
                title=""
                className="text-base font-medium text-black"
              >
                {" "}
                Sign up{" "}
              </a>

              
            </div>
          </nav>
        </div>
      </div>

      {open && (
        <nav className="py-4 bg-white lg:hidden">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>
              <button
                type="button"
                onClick={opening}
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* <div className="mt-6">
              <hr className="my-4 border-gray-200" />

              <div className="flex flex-col space-y-2">
                <a
                  href="/"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Home{" "}
                </a>

                <a
                  href="/signup"
                  title=""
                  className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
                >
                  {" "}
                  Sign up{" "}
                </a>
              </div>
            </div> */}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar
