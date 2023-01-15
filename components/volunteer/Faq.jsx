import React from 'react'

export default function Faq() {

 
    const [open1, setOpen1] = React.useState(false);
      const [open2, setOpen2] = React.useState(false);
      const [open3, setOpen3] = React.useState(false);


  const opening1 = () => {
    setOpen1(!open1);
    };
      const opening2 = () => {
    setOpen2(!open2);
    };
      const opening3 = () => {
    setOpen3(!open3);
        };
        
    return (
      <div>
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight font-display text-black sm:text-4xl lg:text-5xl">FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50">
                <button type="button" onClick={opening1} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> What are the expectations out of a volunteer? </span>

                    <svg className={'w-6 h-6 text-gray-400 ${open1 && "rotate-180"}'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                      {open1 && (<div className="px-4 pb-5 sm:px-6 sm:pb-6">
                          <p>There are no specific skill sets or requirements that is expected out a volunteer. If you have cracked any of the competitive examinations which is mentored by OpenGrad / is an alumnus from a top institute /  is willing to involve in content development for an ongoing course / Willing to start a new program in OpenGrad. We are good to go</p>
                      </div>)}
            </div>

              <div className="transition-all duration-200 bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50">
                <button type="button" onClick={opening2} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> How much is the time commitment required? </span>

                    <svg className={'w-6 h-6 text-gray-400 ${open1 && "rotate-180"}'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                      {open2 && (<div className="px-4 pb-5 sm:px-6 sm:pb-6">
                          <p>We will update the ongoing requirements from the volunteers. If you are ready to spare your time for the specific requirement, you can commit. Please make sure that the task once committed is completed within the deadline.  </p>
                      </div>)}
            </div>

           <div className="transition-all duration-200 bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50">
                <button type="button" onClick={opening3} className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                    <span className="flex text-lg font-semibold text-black"> Will I get a certificate for volunteering </span>

                    <svg className={'w-6 h-6 text-gray-400 ${open1 && "rotate-180"}'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                      {open3 && (<div className="px-4 pb-5 sm:px-6 sm:pb-6">
                          <p>You can download a certficate at any point of time. The level of contribution to OpenGrad will be mentioned in the certificate. Apart from that, you will get access to Goodies occasionally and most importantly the biggest takeaway is the “Joy of Volunteering” itself. </p>
                      </div>)}
            </div>

          
        </div>

          </div>
          
          

      </section>
      <section className="py-10 bg-gradient-to-r from-green-600 to-green-400 sm:py-16">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
            <h2 className="text-3xl font-display tracking-wide font-bold text-white">Sign up as a mentor and be a Part of the Revolution</h2>

            <a href="#" title="" className="inline-flex items-center justify-center flex-shrink-0 px-6 font-body py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-green-700 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
               Join as a Volunteer
            </a>
        </div>
    </div>
            </section>
            </div>

  )
}
