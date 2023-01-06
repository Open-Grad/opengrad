import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-500 grid grid-cols-2 gap-4 fixed bottom-0 left-0  w-[100vw] p-5">
        <div className="flex flex-row  items-center gap-4">
          <div className="flex flex-col justify-start items-start text-xl">
            <a href="https://www.facebook.com/">Contact Us</a>
            <a href="https://www.facebook.com/">FAQ</a>
            <a href="https://www.facebook.com/">Terms and Conditions</a>
          </div>
          <div className='flex-end justify-end items-end'>
            <button className='px-2 py-2 rounded-lg  bg-red-500 text-xl'>Donate</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <img src="./images/logo.png" alt="" className="w-30 h-30" />
        
        </div>

      </div>
    </div>
  );
}

export default Footer