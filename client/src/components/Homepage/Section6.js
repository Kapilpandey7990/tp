import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import phpe from "../../assets/images/partners/phpe.png"
import ps1 from "../../assets/images/partners/ps1.svg";
import ps2 from "../../assets/images/partners/ps2.svg";
import ps3 from "../../assets/images/partners/ps3.svg";
import ps4 from "../../assets/images/partners/ps4.svg";
import ps5 from "../../assets/images/partners/ps5.svg";

export default function Section6() {
  const [activeSection, setActiveSection] = useState('first');
  const [flash, setFlash] = useState(false);
  const navigate = useNavigate();

  const handleClick = (section) => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setActiveSection(section);
    }, 300);
  };

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const benefits = [
    {
      title: "Reach Customers Everywhere",
      description: "Share payment links through WhatsApp, SMS, email, chat, or any medium, reaching customers wherever they are.",
      color: "purple",
      logo: ps1 // Placeholder logo
    },
    {
      title: "Optimise Sales by 2X",
      description: "Customise your payment links by setting up your brand logo, send automatic payment reminders, set expiry dates to limit payments, or cancel links if your plans change.",
      color: "orange",
      logo: ps2 // Placeholder logo
    },
    {
      title: "Leverage Social Media to Boost Your Brand",
      description: "Utilise platforms like Facebook, Instagram, and WhatsApp to boost your D2C brand's visibility. Share payment links directly through these channels, ensuring a convenient and rapid checkout process for your customers.",
      color: "red",
      logo: ps3 // Placeholder logo
    },
    {
      title: "Offer Diverse Payment Methods",
      description: "Offer convenience with diverse payment options including UPI, credit/debit cards, and net banking options, with a secure checkout experience.",
      color: "green",
      logo: ps4 // Placeholder logo
    },
    {
      title: "Experience Real Time Tracking",
      description: "Stay updated with your transactions, monitor daily sales, and access detailed settlement reports for a clear view of funds in your account.",
      color: "blue",
      logo: ps5 // Placeholder logo
    }
  ];
  

  return (
    // <div className='bg-white font-custom h-auto min-h-screen flex flex-col justify-between max-w-full overflow-hidden'>
    //   <div>
    //     {/* Main Section */}
    //     <div className='h-1/4 flex flex-col justify-center items-center px-4 md:px-0'>
    //       <h2 className='font-bold text-3xl text-center bg-gradient-to-r from-[#703893] to-[#703893]  bg-clip-text text-transparent'>Integration Made Easy for Every Business</h2>
    //       <p className='font-light w-full md:w-2/3 text-xl text-center text-gray-600 mt-4'>
    //         We guarantee a swift and seamless setup, getting you up and running in no time.
    //       </p>
    //     </div>

    //     {/* Buttons Section - Visible on md+ */}
    //     <div className='hidden md:flex justify-center space-x-8'>
    //       <button
    //         className={`py-3 px-10 text-xl font-medium transition-all duration-300 ${
    //           activeSection === 'first' ? 'text-black' : 'text-gray-600'
    //         }`}
    //         onClick={() => handleClick('first')}
    //       >
    //         API Integration
    //       </button>
    //       <button
    //         className={`py-3 px-10 text-xl font-medium transition-all duration-300 ${
    //           activeSection === 'second' ? 'text-black' : 'text-gray-600'
    //         }`}
    //         onClick={() => handleClick('second')}
    //       >
    //         Low-code Solution
    //       </button>
    //     </div>

    //     {/* Content Section */}
    //     <div className={`mt-12 px-4 md:px-8 mx-auto md:mx-80 transition-opacity duration-300 ${flash ? 'opacity-50' : 'opacity-100'}`}>
    //       {/* API Integration Section */}
    //       {activeSection === 'first' && (
    //         <div
    //           ref={firstSectionRef}
    //           className={`grid grid-cols-1 gap-y-8 transition-transform duration-700 ${
    //             firstSectionInView ? 'transform-none opacity-100' : 'transform translate-y-12 opacity-0'
    //           }`}
    //         >
    //           {/* Row 1 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">White Label & Native Solutions</h3>
    //               <p className="text-gray-200">
    //                 Experience fully customizable integration that mirrors your brand identity, ensuring a consistent user experience.
    //               </p>
    //             </div>
    //             <div className=" hidden md:flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed4673761f210afc4174_img_solutions-mobile_1.webp" alt="API Integration" />
    //             </div>
    //           </div>

    //           {/* Row 2 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">Second Option <br /> Feature</h3>
    //               <p className="text-gray-200">
    //                 Information about the second option, showcasing its features and customization potential.
    //               </p>
    //             </div>
    //             <div className="hidden md:flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed46883e3c62c8f0a020_img_solutions-mobile_2.webp" alt="Second Option" />
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       {/* Low-code Solution Section */}
    //       {activeSection === 'second' && (
    //         <div
    //           ref={secondSectionRef}
    //           className={`grid grid-cols-1 gap-y-8 transition-transform duration-700 ${
    //             secondSectionInView ? 'transform-none opacity-100' : 'transform translate-y-12 opacity-0'
    //           }`}
    //         >
    //           {/* Row 1 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">Low-code Option</h3>
    //               <p className="text-gray-200">
    //                 Fully customizable integration that requires minimal coding, perfect for businesses looking for a swift setup.
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8efea70242584aa1e8_img_solutions-payment-link-illust-p-800.webp" alt="Low-code Solution" />
    //             </div>
    //           </div>

    //           {/* Row 2 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">Another Low-code Feature</h3>
    //               <p className="text-gray-200">
    //                 Further details about low-code solutions and how it benefits businesses with minimal technical requirements.
    //               </p>
    //             </div>
    //             <div className="flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8e3e3a56e7d3b1fc8c_img_solutions-code-illust-p-800.webp" alt="Low-code Feature" />
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //         <div
    //           className={` md:hidden grid grid-cols-1 gap-y-8 transition-transform duration-700 transform translate-y-12 `}
    //         >
    //           {/* Row 1 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">Low-code Option Feature</h3>
    //               <p className="text-gray-200">
    //                 Fully customizable integration that requires minimal coding, perfect for businesses looking for a swift setup.
    //               </p>
    //             </div>
    //             <div className="hidden md:flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8efea70242584aa1e8_img_solutions-payment-link-illust-p-800.webp" alt="Low-code Solution" />
    //             </div>
    //           </div>

    //           {/* Row 2 */}
    //           <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#703893] to-[#3f4195] text-white rounded-lg shadow-lg">
    //             <div className="flex flex-col items-start justify-center p-8 md:w-1/2 space-y-4">
    //               <h3 className="text-2xl font-semibold">Another Low-code Feature</h3>
    //               <p className="text-gray-200">
    //                 Further details about low-code solutions and how it benefits businesses with minimal technical requirements.
    //               </p>
    //             </div>
    //             <div className="hidden md:flex items-center justify-center bg-gray-100 ml-4 rounded-r-lg shadow-lg md:w-1/2 h-full">
    //               <img className="object-cover h-full max-h-64 rounded-lg" src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6663ed8e3e3a56e7d3b1fc8c_img_solutions-code-illust-p-800.webp" alt="Low-code Feature" />
    //             </div>
    //           </div>
    //         </div>
          
    //     </div>
    //   </div>

    //   {/* Bottom Center Button */}
    //   <div className='mt-24 md:mt-4'>
    //     <div className='flex justify-center items-center mb-12'>
    //       <a href='/product/api'>
    //       <button 
    //         type="button"
    //         className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-[#8965e4] text-white shadow-lg hover:bg-[#703893] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#032A38] transition-all duration-300"
    //       >
    //         Product
    //         <svg className="shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <path d="M5 12h14"></path>
    //           <path d="m12 5 7 7-7 7"></path>
    //         </svg>
    //       </button>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <section className='bg-gray-50 py-10 '>
       {/* Heading */}
  <div className="w-full text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">Why Choose Trustopay App ?</h2>
  </div>
    <div className="flex flex-col md:flex-row bg-gray-50 py-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex items-center justify-center md:sticky md:top-0">
          <img
            src={phpe} // Replace with your image URL
            alt="Description"
            className="w-2/3 md:w-1/2 rounded shadow-lg"
          />
        </div>

        {/* Right Side - Points */}
        <div className="md:w-1/2 px-6">
          {/* Points List */}
          <div className="overflow-y-auto max-h-[calc(100vh-2.5rem)]">
            {benefits.map((benefit, index) => (
              <div key={index} className={`mb-8 border-b pb-4`}>
                {/* Point Content */}
                <div className="flex items-start">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full  text-white mr-4`}
                  >
                    <img
                      src={benefit.logo}
                      alt={`${benefit.title} logo`}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
  );
}
