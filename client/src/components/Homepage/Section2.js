import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section2() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <div className='h-auto bg-gradient-to-b from-[#703893] to-[#3f4195] max-w-full overflow-hidden'>
      <div className='flex justify-center items-center'>
        <div className='mt-12'>
          <div className='flex flex-col justify-center md:items-center text-white space-y-8 md:space-y-4'>
            <div>
              <h2
                ref={headerRef}
                className={`text-4xl text-left md:text-left font-custom pl-8 md:pl-12 ${
                  headerInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0'
                }`}
              >
                Redefining Secure Digital Payments
              </h2>
            </div>
            <div>
              <p
                ref={headerRef}
                className={`text-2xl text-left md:text-left pl-8 md:pl-12 ${
                  headerInView ? 'animate-fade-up animate-delay-500' : 'opacity-0'
                }`}
              >
                Simplify with Trustopay—your platform for seamless and safe transactions across India.
              </p>
            </div>
            <div className='flex'>
            {/* <button
            type="button"
            className="py-3 px-8 mb-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-[#703893] text-white shadow-lg hover:bg-[#3f4195] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#032A38] transition-all duration-300"
          >
            Learn More
            <svg
              className="shrink-0 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button> */}
            </div>
          </div>

          {/* Content section with flexbox */}
          <div ref={contentRef} className={`mx-2 px-48 flex flex-col md:flex-row justify-center gap-4 md:mt-4  mt-8 mb-8 md:mb-4    ${contentInView ? 'animate-fade-up animate-once animate-ease-in' : 'opacity-0'}`}>
            <div className='gap-4 w-full md:w-1/2 flex flex-col  items-center '>
              {/* 1 */}
              <div className="overflow-hidden h-[360px] md:h-60 w-80 md:w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Secure Escrow</h2>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Money held safely until both parties fulfill obligations.
                  </li>
                  {/* <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Multiple Banks Supported
                  </li> */}
                </ul>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e78496161087c9f53b9427_img_alipay-scan.svg"
                    alt="QR Code"
                    className="transform scale-100 h-30 w-80 md:h-full"
                  />
                </div>
              </div>

              {/* 2 */}
              <div className="overflow-hidden h-[360px] md:h-60 w-80 md:w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Dispute Resolution</h2>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> CreationDispute Resolution
                    Fair and fast resolution of disagreements.
                  </li>
                  {/* <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Clear, Transparent Terms
                  </li> */}
                </ul>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e779404b53d101b9e3e839_Img_credit-cards.svg"
                    alt="QR Code"
                    className="transform scale-100 h-60 w-80 md:h-full "
                  />
                </div>
              </div>
            </div>

            <div className='gap-4 w-full md:w-1/2 flex flex-col items-center'>
              {/* 3 */}
              <div className="overflow-hidden h-[360px] md:h-60 w-80 md:w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Project Managment</h2>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Tools to streamline collaboration and track progress.
                  </li>
                  {/* <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Funds Released Safely
                  </li> */}
                </ul>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/663c92eaa6d410f9f25813bc_img_accounts-screen-p-500.webp"
                    alt="Payment Screen"
                    className="transform scale-100 h-60 w-80 md:h-full"
                  />
                </div>
              </div>

              {/* 4 */}
              <div className="overflow-hidden h-[360px] md:h-60 w-80 md:w-80 bg-gradient-to-b from-white to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Secure Payments</h2>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> Advanced encryption and fraud prevention for user agreements.
                  </li>
                  {/* <li className="flex items-center">
                    <span className="mr-2 text-indigo-500">•</span> 3-Step Quick Resolution
                  </li> */}
                </ul>
                <div className="flex justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65f95da782671a4756e76d39_CREATE%20PAYOUTS%20(RESIZED).svg"
                    alt="Dispute Handling"
                    className="transform scale-100 h-60 w-80 md:h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}
