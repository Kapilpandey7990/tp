import React from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer';
import PageHeader from '../components/shared/PageHeader';
import Coming from '../components/shared/Coming';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faFileAlt, faDollarSign, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function API() {
  return (
    <>
      <div className="h-90">
        <Header />
        <Coming />
        {/* <div
          style={{ "clip-path": "polygon(0 0, 100% 0, 100% 90%, 0% 100%)" }}
          className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[700px] w-full justify-center items-center"
        >
          
          <div className="flex-1  items-center justify-center font-custom w-full md:w-1/2 space-y-6  md:ml-36 ">
            <div className="mb-4 animate-fade-up animate-once">
              <h1 className="text-3xl md:text-7xl font-bold text-white mb-2">
                Scale Your Business Worldwide
              </h1>
            </div>
            <p className=" animate-fade-up animate-once animate-delay-[500ms] text-white text-3xl font-normal">
              Secure Transactions, Built on Trust
            </p>
            <div className="space-y-6 animate-fade-up animate-once animate-delay-[500ms]">
              <p className="font-light font-sans text-xl text-white ">
                Rapid Payment Processing Across 173+ Countries Without Local
                Entities .
              </p>
              <p className="font-light font-sans text-xl text-white  ">
                Instantly access 80+ diverse local payment methods, manage
                multi-currency transactions, and ensure compliance.
              </p>
            </div>
            <div className="flex justify-start items-center">
              <button
                onClick={() => (window.location = "/")}
                type="button"
                className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-3xl border bg-gradient-to-r from-[#3f4195] to-[#703893]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Get Started
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="animate-fade-up animate-once animate-delay-[1000ms]  font-sans flex gap-4 w-full items-center text-white ">
              <div className="flex gap-2 items-center mt-4 decoration-white">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e2c634feddec420d2fd650_CB%20INSJGHS.svg"
                  alt="CB Insights Logo"
                  className="w-40 h-auto "
                />
                <p className="text-lg font-extralight text-white">
                  TOP 100 Fintechs
                </p>
              </div>
              <div className="flex gap-2 items-center mt-4 ">
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d468bdaad532c6fe82609_g2.svg"
                  alt="G2 Logo"
                  className="w-34 h-auto"
                />
                <p className="text-md font-extralight text-white">4.3 Rating</p>
              </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2  flex justify-center items-center ">
            <div className=' rounded-tl-xl animate-fade-up hidden md:block animate-once w-[500px] h-[600px] bg-gradient-to-r from-[#3f4195] to-[#703893]'>
          </div>
            <div className=" animate-fade-right transform -translate-x-12 ">
              <img
                className=" w-[400px] h-[500px] items-center object-cover rounded-xl"
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/66600d60135813c3ae3189a1_img_saas-localpayment-stock-p-500.webp"
                alt=""
              />
            </div>
          </div>
        </div> */}

        {/* <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Track record</h3>
                <p className="text-gray-600 text-sm">
                  Incorporated in 1999 by Fidelity National Financial, over US$5
                  billion in transactions have been protected. Escrow.com has
                  over 21 years of operating a licensed, regulated, and
                  regularly audited escrow service.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">No chargebacks</h3>
                <p className="text-gray-600 text-sm">
                  Buyers get to inspect the goods or services before accepting
                  them, protecting the buyer. Likewise, sellers are protected
                  from counterparty risk with no chargebacks, ever.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Cost effective</h3>
                <p className="text-gray-600 text-sm">
                  With no minimum fee and priced as low as 0.89%, the Escrow API
                  is cheaper than credit cards and many other online payment
                  methods.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Award winning</h3>
                <p className="text-gray-600 text-sm">
                  Escrow.com is the winner of the 2017 BBB Torch Award for
                  Ethics for Silicon Valley, San Francisco, and the Bay Area, an
                  award presented to a business that goes above and beyond in
                  their business dealings.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white py-12">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Heading</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ut
              sunt in accusantium! Illo modi, deleniti, in obcaecati numquam,
              expedita dicta molestiae eius cupiditate quibusdam possimus
              asperiores tenetur quaerat exercitationem.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 m-5 rounded-lg shadow hover:bg-green-600">
              View Documentation
            </button>
          </div>
        </section> */}

        {/* <section className="bg-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              Left Column: API Description
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="API Icon"
                      className="h-16 w-16"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">
                  Built for developers, by developers
                </h2>
                <p className="text-gray-600">
                  Any business can integrate the safety and security of escrow
                  payments to their platform as simply as common payment methods
                  such as Stripe.
                </p>
                <p className="text-gray-600">
                  We engineered our API to let you spend more time running your
                  business and less time worrying about payments code and
                  compliance overhead. Now you can manage your most important
                  transactions without the risk of chargebacks, all with fees
                  lower than credit cards or PayPal.
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600">
                  View Documentation
                </button>
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">📄</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Beautiful Docs</h4>
                    <p className="text-gray-600">
                      Our step-by-step integration guides, code examples, and
                      centralized API reference make it simple to understand and
                      easy to integrate so you spend less time writing code.
                    </p>
                  </div>
                </div>

                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">🔗</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Versioning</h4>
                    <p className="text-gray-600">
                      Time to take control of your roadmap - your integration
                      will work the same as it does today as it will tomorrow.
                    </p>
                  </div>
                </div>

                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">📊</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Real-time Insights</h4>
                    <p className="text-gray-600">
                      Stay up to date on the progress of each of your
                      transactions through our portal or use our webhooks to get
                      real-time updates on the progress of each transaction.
                    </p>
                  </div>
                </div>

                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">👨‍💻</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Developers First</h4>
                    <p className="text-gray-600">
                      With a new developer portal, interactive documentation,
                      and real-time dashboards, we are putting developers first.
                      We can’t wait to see what you build!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white py-12 flex justify-center items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            
            Left Side: Image

            <div className="flex justify-end w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/400"
                alt="Placeholder"
                className="max-w-full h-auto"
              />
            </div>

            Right Side: Heading and Paragraph

            <div className="flex flex-col justify-start w-full md:w-1/2 text-left mt-8 md:mt-0 md:ml-8">
              <h2 className="text-3xl font-bold mb-4">Your Heading Here</h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, molestiae fugit. Quam, id. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section className="py-16 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Track record</h3>
                <p className="text-gray-600 text-sm">
                  Incorporated in 1999 by Fidelity National Financial, over US$5
                  billion in transactions have been protected. Escrow.com has
                  over 21 years of operating a licensed, regulated, and
                  regularly audited escrow service.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">No chargebacks</h3>
                <p className="text-gray-600 text-sm">
                  Buyers get to inspect the goods or services before accepting
                  them, protecting the buyer. Likewise, sellers are protected
                  from counterparty risk with no chargebacks, ever.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Cost effective</h3>
                <p className="text-gray-600 text-sm">
                  With no minimum fee and priced as low as 0.89%, the Escrow API
                  is cheaper than credit cards and many other online payment
                  methods.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Award winning</h3>
                <p className="text-gray-600 text-sm">
                  Escrow.com is the winner of the 2017 BBB Torch Award for
                  Ethics for Silicon Valley, San Francisco, and the Bay Area, an
                  award presented to a business that goes above and beyond in
                  their business dealings.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Secure Transactions
                </h3>
                <p className="text-gray-600 text-sm">
                  Our platform ensures that all transactions are secure,
                  protecting both buyers and sellers from fraud and misuse.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-gray-600 text-sm">
                  Our API is designed for easy integration, allowing you to
                  start protecting transactions with minimal effort.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 text-sm">
                  No hidden fees or surprises. We provide clear and transparent
                  pricing so you know what to expect.
                </p>
              </div>

              
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-blue-500 text-4xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600 text-sm">
                  We pride ourselves on providing exceptional service and
                  ensuring customer satisfaction with every transaction.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium text-center mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl font-normal text-center mb-8 mx-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda repudiandae accusamus modi eligendi voluptatibus laborum
              facilis asperiores consectetur iusto cumque error placeat,
              temporibus soluta nesciunt! Blanditiis neque voluptatibus libero
              et.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "The service provided by this platform has been outstanding! I
                  felt secure during my transaction, and the support team was
                  always there to help."
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "I was skeptical at first, but this platform changed my mind.
                  The process was seamless, and I couldn’t be happier with the
                  results."
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-gray-500">Graphic Designer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "This platform has transformed the way I conduct business
                  online. I highly recommend it to anyone looking for a reliable
                  service."
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Michael Brown</h4>
                    <p className="text-gray-500">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-gradient-to-b from-[#703893] to-[#3f4195] py-16 bg-blue-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
              <p className="text-lg mr-20">
                Sign up now to unlock exclusive features and stay updated with
                our latest offerings.
              </p>
            </div>
            <div className="flex space-x-4 md:w-1/2 justify-center">
              <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                Sign Up
              </button>
              <button className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section> */}

        <Footer />
      </div>
    </>
  );
}
