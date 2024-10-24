import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import taskSvg from "../../assets/images/task_svg.svg";
import bgImg from "../../assets/images/bg_image.svg";
import { useNavigate } from 'react-router-dom';

export default function Section5() {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  return (
    <div className=' md:h-[1300px]  max-w-full overflow-hidden'>
      <div className=" h-[1930px] md:h-[800px]">
        <div className=' h-[360px] md:h-[300px] pt-8 md:pt-0 text-white bg-[#F2F2F2] flex flex-col justify-start md:justify-center items-center space-y-6'>
          <h2 className='font-bold text-black text-4xl ml-8'>Efficiency in Every Transaction</h2>
          <p className='flex text-black font-normal w-3/4 text-xl text-center '>
            Trustopay offers comprehensive protection for your transactions, ensuring secure payments, fraud prevention, and seamless compliance.
          </p>
        </div>
        <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: 'center bottom',  // Horizontally centered, vertically aligned to bottom
      backgroundSize: 'cover',              // Ensures the image covers the entire area
      backgroundRepeat: 'no-repeat',        // Prevents image repetition
    }}
          className='  '
        >
          <div className='relative flex flex-col space-y-8 justify-center items-center md:mx-36'>
            {/* First Section */}
            <div
            ref={ref1}
            className={`relative w-5/6 md:w-3/4 flex flex-col-reverse md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 1 }} // Ensures that the content stays on top
          >
            {/* Text will appear on top for mobile, left for larger screens */}
            <div className="flex flex-col items-start md:w-1/2 p-2">
              <img
                src={taskSvg}
                alt="Vector Image"
                className="w-12 h-12 mb-4 hidden md:block"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2">Streamlined Local Compliance</h2>
                <p className="text-gray-600">
                  Effortlessly meet global and local standards with Trustopay. We manage the complexities, so you can focus on growing your business.
                </p>
              </div>
            </div>

            {/* Image will appear below the text for mobile, right for larger screens */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>


          {/* Second Section */}
          <div
            ref={ref2}
            className={`relative w-5/6 md:w-3/4 flex flex-col-reverse md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView2 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col items-start md:w-1/2 p-2">
              <img
                src={taskSvg}
                alt="Vector Image"
                className="w-12 h-12 mb-4 hidden md:block"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2">Advanced Risk Management</h2>
                <p className="text-gray-600">
                  With Trustopay, your transactions are safeguarded by cutting-edge technology, reducing risks and enhancing security.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Third Section */}
          <div
            ref={ref3}
            className={`relative w-5/6 md:w-3/4 flex flex-col-reverse md:flex-row items-center justify-center bg-white p-6 rounded-xl shadow-lg transform -translate-y-14 transition-opacity duration-1000 ${
              inView3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col items-start md:w-1/2 p-2">
              <img
                src={taskSvg}
                alt="Vector Image"
                className="w-12 h-12 mb-4 hidden md:block"
              />
              <div className='flex flex-col space-y-4'>
                <h2 className="text-2xl font-semibold mb-2  ">Optimized Payment Solutions</h2>
                <p className="text-gray-600">
                  Benefit from efficient payment processes and competitive rates with Trustopay, enhancing your financial performance and operational efficiency.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e3f46e69c02bd90f4d9c55_illustration__global-compliance-simplified.svg"
                alt="Right Side Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          </div>
          <div className='flex justify-center items-center '>
            <a href='/contact'>
          <button
            type="button"
            className="py-3 px-8 mb-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-[#8965e4] text-white shadow-lg hover:bg-[#703893] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#032A38] transition-all duration-300"
          >
            Contact Us
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
          </button>
          </a>
        </div>
          
        </div>

        
      </div>
    </div>
  );
}
