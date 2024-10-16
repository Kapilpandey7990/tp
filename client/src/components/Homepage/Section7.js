import { useInView } from 'react-intersection-observer';
import React, {useEffect, useRef, useState} from 'react';

export default function Section7() {

  // const [bottonIsVisible, setbuttonVisible] = useState();
  const {ref: buttonRef, inView: bottonIsVisible} = useInView();
  
    // console.log("myElementIsVisible", bottonIsVisible);


  return (
    // <div className="bg-gradient-to-b from-[#703893] to-[#3f4195] h-auto">
    //   <div className="h-1/2 text-[#EDFEF3] flex flex-col justify-center items-center space-y-4 p-6">
    //     <h2 className="font-bold text-4xl  text-center">Trusted by Businesses Worldwide</h2>
    //     <p className="w-4/3 md:mx-60 text-xl font-medium text-center ">
    //       Discover stories from our clients about how we've enhanced their experience and that of their customers. 
    //       These testimonials reflect our dedication to exceptional service and shared satisfaction.
    //     </p>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
    //     <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
    //       <img className="w-auto h-auto object-cover rounded-md" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e41d9bcd127654ade57d64_asanify.webp" alt="Client Logo" />
    //       <p className="text-gray-700">FX Transactions are sensitive and we always need assurance that the payment partner is process-driven and has great customer support. With Tazapay, we have been working for over a year now and our payment processing has been seamless. I find Tazapay to be top-notch. Assured FX Txns, Great customer support!</p>
    //       <div className="flex items-center space-x-4">
    //         <img className="w-12 h-12 rounded-full" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e80b2e140a10ba51714483_Gaurav%20Prasad.webp" alt="Gaurav Prasad" />
    //         <div>
    //           <p className="font-bold text-gray-800">Gaurav Prasad</p>
    //           <p className="text-sm text-gray-600">Co-founder</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl space-y-4">
    //       <img className="w-full h-full object-cover rounded-xl" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660a9abcc64a944cac499df1_AdobeStock_579650177-p-800.webp" alt="Client Image" />
    //       {/* Additional content here if needed */}
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
    //       <img className="w-auto h-auto object-cover rounded-md" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e41d9bcd127654ade57d64_asanify.webp" alt="Client Logo" />
    //       <p className="text-gray-700">FX Transactions are sensitive and we always need assurance that the payment partner is process-driven and has great customer support. With Tazapay, we have been working for over a year now and our payment processing has been seamless. I find Tazapay to be top-notch. Assured FX Txns, Great customer support!</p>
    //       <div className="flex items-center space-x-4">
    //         <img className="w-12 h-12 rounded-full" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e7f679d06050fdd9755e0d_bosco.webp" alt="Gaurav Prasad" />
    //         <div>
    //           <p className="font-bold text-gray-800">Gaurav Prasad</p>
    //           <p className="text-sm text-gray-600">Co-founder</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl  space-y-4">
    //       <img className="w-full h-full object-cover rounded-xl" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660a9abcc64a944cac499df1_AdobeStock_579650177-p-800.webp" alt="Client Image" />
    //       {/* Additional content here if needed */}
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
    //       <img className="w-auto h-auto object-cover rounded-md" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e41d9bcd127654ade57d64_asanify.webp" alt="Client Logo" />
    //       <p className="text-gray-700">FX Transactions are sensitive and we always need assurance that the payment partner is process-driven and has great customer support. With Tazapay, we have been working for over a year now and our payment processing has been seamless. I find Tazapay to be top-notch. Assured FX Txns, Great customer support!</p>
    //       <div className="flex items-center space-x-4">
    //         <img className="w-12 h-12 rounded-full" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e80b2e140a10ba51714483_Gaurav%20Prasad.webp" alt="Gaurav Prasad" />
    //         <div>
    //           <p className="font-bold text-gray-800">Gaurav Prasad</p>
    //           <p className="text-sm text-gray-600">Co-founder</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white shadow-lg rounded-xl space-y-4">
    //       <img className="w-full h-full object-cover rounded-xl" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/660a9abcc64a944cac499df1_AdobeStock_579650177-p-800.webp" alt="Client Image" />
    //       {/* Additional content here if needed */}
    //     </div>
    //   </div>
    //   <div className='h-20 mt-4'>
    //     <div className='flex justify-center items-center mb-12'>
    //       < button
    //       ref={buttonRef} 
    //         type="button"
    //         className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 text-[#051B23] bg-white shadow-lg hover:bg-[#032A38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#032A38] transition-all duration-300"
    //       >
    //         Contact Sales
    //         <svg
    //           className="shrink-0 h-5 w-5"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         >
    //           <path d="M5 12h14"></path>
    //           <path d="m12 5 7 7-7 7"></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>


      

      





    // </div>
    <section className="bg-gradient-to-b from-[#703893] to-[#3f4195] py-8 text-white hover:cursor-default max-w-full overflow-hidden">
    <div className="container text-center px-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:ml-28 flex justify-center md:justify-start mx-auto md:mx-24">
        Your Money Matters. Let Us Safeguard it For You.
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:mx-24">
        <div className="p-4 flex flex-col items-start">
          <h3 className="flex md:text-xl font-semibold mb-4 text-start">
            Robust Dispute Resolution
          </h3>
          <h3 className=" hidden md:text-xl font-semibold mb-4 text-start">
          Robust Dispute <br /> Resolution

          </h3>
          <div className="w-10 h-1 bg-gradient-to-r from-[#dfda46] to-[#dddef0] mb-4"></div>
          <p className='text-start'>
            If you’re not happy with your purchase, we’ll withhold your seller’s funds and mediate disagreements until all issues are resolved.
          </p>
        </div>
        <div className="p-4 flex flex-col items-start">
          <h3 className=" md:text-xl font-semibold mb-4 text-start">
            100% of Your Money Back - No Strings Attached
          </h3>
          <div className="w-10 h-1 bg-gradient-to-r from-[#dfda46] to-[#dddef0] mb-4"></div>
          <p className='text-start'>
            We’ll make sure you get the amount refunded for, including any platform fees from Tazapay.
          </p>
        </div>
        <div className="p-4 flex flex-col items-start">
          <h3 className="flex md:text-xl font-semibold mb-4 text-start">
            60-day Coverage for  Unauthorized Transactions
          </h3>
          <h3 className="hidden md:text-xl font-semibold mb-4 text-start">
            60-day Coverage for <br /> Unauthorized Transactions
          </h3>
          <div className="w-10 h-1 bg-gradient-to-r from-[#dfda46] to-[#dddef0] mb-4"></div>
          <p className='text-start'>
            Noticed a transaction you didn’t make? You have all the time you need to raise any unauthorized transaction dispute with us.
          </p>
        </div>
      </div>
    </div>
  </section>
  




  );
}
