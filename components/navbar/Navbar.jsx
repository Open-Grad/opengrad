import React from "react";
import useState from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "flowbite-react";


const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };

const [dopen, setDopen] = React.useState(false);

  const dopening = () => {
    setDopen(!dopen);
  };



  return (
    <>
      <div className=" bg-gray-100 border-b border-gray-200 w-100  ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <nav className="relative flex items-center justify-between lg:justify-end h-16 lg:h-20">
            <div className="lg:absolute lg:-translate-x-1 lg:inset-y-5 lg:left-1">
              <div className="flex-shrink-0">
                <Link href="/" title="" className="flex">
                  <img
                    className="w-auto h-8 lg:h-12"
                    src="/images/logo.png"
                    alt=""
                  />
                </Link>
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
              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Home
              </Link>
              <Link
                href="/about"
                title=""
                className="text-base font-medium text-black"
              >
                {" "}
                About Us{" "}
              </Link>

              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Programs
              </Link>
              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Donate
              </Link>
              <Link
                href="/volunteer"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Volunteer
              </Link>
              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Collaboration
              </Link>
          <div class="relative inline-block text-left">
  <div>
    <button type="button" onClick={dopening} class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      About
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
                {dopen && (
                  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                   <Link href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Humen@OG</Link>
                      <Link href="/about" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Mission and Vision</Link>
                      <Link href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">What we do</Link>
                    </div>
                  </div>)}
</div>
              
                <Link
                href="/"
                title=""
                className="text-base font-body bg-green-800 px-4 py-2 font-medium text-white rounded-md"
              >
                
                Sign Up
              </Link>
              
              

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

            <div className="mt-6">
              <hr className="my-4 border-gray-200" />

              <div className="flex gap-2 flex-col space-y-2">
                 <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Home
              </Link>

              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Programs
              </Link>
              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Donate
              </Link>
              <Link
                href="/volunteer"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Volunteer
              </Link>
              <Link
                href="/"
                title=""
                className="text-base font-body font-medium text-black"
              >
                
                Collaboration
                </Link>
       <div class="relative inline-block text-left">
  <div>
    <button type="button" onClick={dopening} class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      About
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
                {dopen && (
                  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                      <Link href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Humen@OG</Link>
                      <Link href="/about" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Mission and Vision</Link>
                      <Link href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">What we do</Link>
            
                    </div>
                  </div>)}
</div>
              
                <Link
                href="/"
                title=""
                className="text-base w-fit font-body bg-green-800 px-4 py-2 font-medium text-white rounded-md"
              >
                
                Sign Up
              </Link>
              
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
