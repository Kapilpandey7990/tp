import React from 'react'

export default function Test2() {
  return (
    <>
      <div className='h-auto  w-full flex flex-col px-48 pt-48 space-y-8'>
        <div className='felx justify-center items-center mb-4 '>
          <h2 className='text-blue-700 text-center font-custom text-4xl'>Case Study
          </h2>
        </div>
        <div className='bg-gray-200 flex items-center gap-12 px-24 rounded-xl h-60'>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/parul_logo.png" alt="" className='p-3' />
          </div>
          <div className='space-y-4'>
            <h2 className='text-2xl font-custom'>Parul University witnesses 60% improvement in fee collection cycle with Easebuzz payment solutions</h2>
            <p>Parul University comprises of 36 institutes with a plethora of diploma, undergraduate and post graduate programs in numerous disciplines. Offering a range of over 450 uniquely structured programs, designed to suit the career prospects of every student aspirant.</p>
          </div>


        </div>
        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Business Objective / Problem Statement -
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-3/5  p-2 '>
              <p>Parul University basic requirement was to deploy a system which manages the entire administration system digitally and make education fee collection faster, and easier for students as well as the accounts department of the university.</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span className='ml-2'>Difficulty in splitting fees between departments as per batches or courses</span>
                </li>

              </ul>
            </div>

            {/* Right part (image) */}
            <div className='w-2/5'>
              <img
                src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/feesbuzz/case-study-parul/building_image.png"
                alt="Parul University Building"
                className='p-2 w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </div>


        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Comprehensive solution-
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-1/2  p-2 '>
              <p>FeesBuzz helped Parul university to collect fees from students on a single link and splitting it to academic & hostel fees with automatic recocnciliation. With EasyCollect they were able to send payment links with payment reminders to all the fee defaulters.

              </p>

            </div>

            {/* Right part (image) */}
            <div className='w-1/2'>
              <p>Slices helped to split payment batch and course wise. The integration of payment gateway and payment links helped with fee collection for college events with customised & detailed description of event/activity.

              </p>

            </div>
          </div>
        </div>

        <div className='h-40 w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Product Offered-
          </h2>

          {/* Main container */}
          <div className="flex h-full items-center justify-between px-48 mt-2 divide-x-2">

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyCheck} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBill} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              <span className="ml-2">Product</span>
            </li>

            <li className="flex-1 flex flex-col items-center">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="ml-2">Product</span>
            </li>

          </div>


        </div>


        <div className='h-auto w-full px-2'>
          {/* Heading */}
          <h2 className='  text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
            Benefits Realised-
          </h2>

          {/* Main container */}
          <div className='flex items-start  justify-between mt-2 space-x-4'>

            {/* Left part (details) */}
            <div className='w-1/2  p-2 '>
              <ul className='mt-2 space-y-8'>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>


              </ul>

            </div>

            {/* Right part (image) */}
            <div className='w-1/2 p-2'>
            <ul className='mt-2 space-y-2'>
                <div className='flex items-center gap-2'>

                  <FontAwesomeIcon icon={faCircleCheck} className='fa fa-lg' />
                  <li>
                    <span className=''>Difficulty in splitting fees between departments as per batches or courses</span>
                  </li>
                </div>
              


              </ul>

            </div>
          </div>
        </div>


        <div className='h-30 w-full px-2'>
  {/* Impact Created Heading */}
  <h2 className='text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2'>
    Impact Created-
  </h2>

  {/* Impact Created Stats */}
  <div className='flex h-full items-center justify-between p-8 mt-2 space-x-4 px-24'>
    <div className='text-center flex flex-col'>
      <h3 className='text-4xl font-bold'>60%</h3>
      <p className='text-xl line-clamp-2'>Improvement in fees collection cycle</p>
    </div>
    <div className='text-center flex flex-col'>
      <h3 className='text-4xl font-bold'>70%</h3>
      <p className='text-xl line-clamp-2'>Operational cost reduction</p>
    </div>
    <div className='text-center flex flex-col'>
      <h3 className='text-4xl font-bold'>90%</h3>
      <p className='text-xl line-clamp-2'>Reduction in efforts of manual reconciliation of fees</p>
    </div>
  </div>

  {/* Customer Testimonials Heading */}
  <h2 className='text-xl font-bold inline-block bg-gradient-to-r from-purple-200 to-purple-100 px-2 mt-6'>
    What customers say about us -
  </h2>

  {/* Customer Testimonial */}
  <div className='flex items-center p-8 justify-between mt-4 '>
    <div className='w-1/5'>
      {/* Replace this with actual image */}
      <img src='https://trustopay.vercel.app/assets/images/our%20team/Us.png'  className='rounded-xl ' />
    </div>
    <div className='flex items-center mt-4 ml-4'>
 
  <div className='ml-4 w-4/5 pl-12'>
    <p className='italic text-gray-600'>
      "We have seen immense improvement in our fees collection process with Easebuzz as they have automated and digitized reconciliation for us..."
    </p>
    <div className='flex items-center mt-2'>
      {/* University Logo */}
      <img 
        src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/testimonial/parul_logo.png" 
        alt="Parul University Logo" 
        className='w-auto h-12 mr-2' 
      />
      {/* Name and Title */}
      <div>
        <p className='font-bold'>
          Pinak Agrawal
        </p>
        <p className='text-sm'>
          Operations Officer - Branding & Media Relations<br />
          Parul University
        </p>
      </div>
    </div>
  </div>
</div>

  </div>
</div>



      </div>


        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-24 pb-12 px-48">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/secured-complained.svg" alt="PCI-DSS Level 1" className="w-12 h-12" />
      </div>
      <p className="font-bold text-center">Secured and compliant with PCI-DSS Level 1</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/customer-support.svg" alt="Customer Support" className="w-12 h-12" />
      </div>
      <p className="font-bold text-center">24*7 Customer Support</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/use-case-educational/integration-with-tally.svg" alt="Seamless Integration" className="w-12 h-12" />
      </div>
      <p className="font-bold text-center">Seamless integration with Tally and other ERPS</p>
    </div>
  </div>



{/* //////////////////////////////////////////////////////////////////////// */}
    <div className='bg-[#FAFAFA] p-4' >
        <div className='flex justify-between'>
            <div><h3 className='text-xl font-semibold'>Overview</h3></div>
            <div><button>This Month</button></div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div className='bg-[#146EB4] shadow-md p-2 rounded-lg text-slate-100'> 
                <div className='inline-flex items-center gap-1'>
                <p>Next Payout </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                </div>
                
                <p>2,234</p>
            </div>
            <div className=' p-2 bg-[#FFFFFF] shadow-md  rounded-lg'>
                <p>Amount Pending</p>
                <p>92,312</p>
            </div>
            <div className='p-2 bg-[#FFFFFF] shadow-md  rounded-lg'>
                <p>Amount Pending</p>
                <p>23,92,312</p>
            </div>

        </div>
        <div>
            <div className=''>
                <p>Transction | This month</p>
                <div className='space-x-2'>
                    <button className='bg-gray-200 text-slate-600 rounded-xl p-1'>payouts (22)</button>
                    <button className='bg-[#146Eb4] text-white rounded-xl p-1'>Refunds(6) </button>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-xl h-screen p-2'>
            <div className='flex justify-between'>
            <div>search</div>
            <div>filters and download</div>
            </div>
            <div className='grid grid-cols-5'>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>
                <div>orderid</div>


            </div>

        </div>

    </div>


    </>
  )
}
