import React from 'react'
import Header from '../components/shared/Header'
import PageHeader from '../components/shared/PageHeader';
import Footer from "../components/shared/Footer"
import { BiQuestionMark } from 'react-icons/bi'
import Section2 from '../components/Homepage/Section2'
import phpe from '../assets/images/partners/phpe.png'
import icon1 from '../assets/images/partners/portfolio.png'
import icon2 from '../assets/images/partners/ecommerce.png'
import icon3 from '../assets/images/partners/brokerage.png'
import icon4 from '../assets/images/partners/contract-agreement.png'
import FaqComponent from '../components/FaqComponent';
import how1 from "../assets/images/cardds/agreement.png"
import how2 from "../assets/images/cardds/milestone.png"
import how3 from "../assets/images/cardds/end.png"
import how4 from "../assets/images/cardds/secure-payment.png"
import how5 from "../assets/images/cardds/trustee verified.png"
import how6 from "../assets/images/cardds/dispute.png"






const FundProtectionCard = ({ bgColorClass, icon, title, description }) => {
  return (
    <div className={`p-6 ${bgColorClass} rounded-lg shadow-md`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};  
const BusinessUseCaseCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p>{description}</p>
    </div>
  );
};


export default function Escrow() {
  return (
    <>
      <PageHeader />
      <div className=" h-screen  bg-gradient-to-b from-[#703893] to-[#3f4195] flex flex-col md:flex-row pl-16 justify-center items-center">
        {/* Left Side Content */}
        <div className="flex-1 items-center justify-center font-custom w-full md:w-1/2 space-y-0  -translate-y-16 md:ml-36 ">
          <div className="mb-4 animate-fade-up animate-once mt-32">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Protect Your Payments with Trustopay
            </h1>
          </div>
          {/* <p className=" animate-fade-up animate-once animate-delay-[500ms] text-gray-800 text-3xl font-bold">
          Secure Transactions, Built on Trust
          </p> */}
          <div className="space-y-1 flex flex-col gap-2 animate-fade-up animate-once animate-delay-[500ms]">
            {/* <p className='font-normal font-sans text-xl text-black'>Rapid Payment Processing Across 173+ Countries Without Local Entities
          .</p>
          <p className='font-normal font-sans text-xl text-black '>Instantly access 80+ diverse local payment methods, manage multi-currency transactions, and ensure compliance.
          </p> */}

            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebfb9ea396ab9597e95508_escrow-intro-shield.eea8d1b.svg"
                  alt=""
                />
              </div>
              <div>
                <p className='text-white'>
                Trustopay is a secure escrow payment platform that safeguards funds until transactions are completed.
                </p>
              </div>
            </div>
            <div className="flex  items-center gap-2 ">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebfb9ea396ab9597e95508_escrow-intro-shield.eea8d1b.svg"
                  alt=""
                />
              </div>
              <div>
                <p className='text-white'>
                It offers milestone payments, easy communication, and fast dispute resolution for freelancers and small businesses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <div className='mb-5'>
                {/* <img
                  src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dca05d564ae2c370d071cb_tazapay-protection.svg"
                  alt=""
                /> */}
              </div>
              <div className='mb-5'>
                {/* <p className='text-white'>Trustopay</p> */}
                {/* <p className='text-white'>Trustopay Shield</p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-4">
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium text-white rounded-xl border-2 hover:text-white   border-[#703893] hover:bg-gradient-to-l from-[#703893] to-[#3f4195] shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Enquiry about Escrow
            </button>
            <button
              type="button"
              className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-gradient-to-l from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Create an Escrow
            </button>
          </div>
          <div className="animate-fade-up animate-once animate-delay-[1000ms]  font-sans flex gap-4 w-full items-center text-gray-600 ">
            {/* <div className='flex gap-2 items-center mt-4 '>
            <img 
              src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65e2c634feddec420d2fd650_CB%20INSJGHS.svg" 
              alt="CB Insights Logo" 
              className='w-40 h-auto' 
            />
            <p className='text-lg font-normal'>TOP 100 Fintechs</p>
          </div>
          <div className='flex gap-2 items-center mt-4 '>
            <img 
              src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/659d468bdaad532c6fe82609_g2.svg" 
              alt="G2 Logo" 
              className='w-34 h-auto' 
            />
            <p className='text-md font-medium'>4.3 Rating</p>
          </div> */}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2  flex justify-end items-center ">
          {/* <div className=' rounded-bl-xl animate-fade-up hidden md:block animate-once w-[500px] h-[600px] bg-gradient-to-b from-[#703893cf] to-[#3f4095b1]'>
          </div> */}
          <div className=" flex justify-start  ml-12 animate-fade-right">
            <img
              className=" md:w-[800px]  h-auto  items-start object-cover rounded-xl"
              src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ebf92e7129fa4e65835c95_Escrow-map.006d026.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="py-12 px-40 bg-white">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BusinessUseCaseCard
            icon="🛍️"
            title="Businesses without checkout function on the websites"
            description="For businesses that do not have a checkout function on their websites."
          />
          <BusinessUseCaseCard
            icon="🤝"
            title="Negotiated B2B transactions"
            description="For businesses involved in negotiated B2B transactions."
          />
          <BusinessUseCaseCard
            icon="🛒"
            title="eCommerce platforms accepting payments on behalf of their sellers"
            description="For eCommerce platforms that accept payments on behalf of their sellers."
          />
          <BusinessUseCaseCard
            icon="⚖️"
            title="Brokers facilitating transactions amongst two other parties"
            description="For brokers facilitating transactions amongst two other parties."
          />
        </div> */}
        <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up animate-once">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Escrow for every business use case
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up animate-once">
          
          {/* First Item */}
          <div className="flex flex-col items-center animate-fade-up animate-once">
            <div className="p-4 bg-purple-200 rounded-full mb-4">
              <span className="block w-12 h-12">
                <img src={icon1} alt="Business Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <p className="text-center text-lg font-medium text-gray-700">
            Protects funds during online transactions.
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center animate-fade-up animate-once">
            <div className="p-4 bg-purple-200 rounded-full mb-4">
              <span className="block w-12 h-12">
                <img src={icon2} alt="B2B Transactions Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <p className="text-center text-lg font-medium text-gray-700">
            Releases funds progressively for transparency.
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-center animate-fade-up animate-once">
            <div className="p-4 bg-purple-200 rounded-full mb-4">
              <span className="block w-12 h-12">
                <img src={icon3} alt="eCommerce Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <p className="text-center text-lg font-medium text-gray-700">
            Facilitates clear interaction between users.
            </p>
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col items-center animate-fade-up animate-once">
            <div className="p-4 bg-purple-200 rounded-full mb-4">
              <span className="block w-12 h-12">
                <img src={icon4} alt="Brokers Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <p className="text-center text-lg font-medium text-gray-700">
            Efficiently resolves conflicts and issues.
            </p>
          </div>

        </div>
      </div>
    </div>

      </section>

      

      {/* <div className='min-h-screen bg-gradient-to-b from-[#703893] to-[#3f4195] max-w-full overflow-hidden'>
        <div className='flex justify-center items-center h-24'>
          <h2 className='text-3xl md:text-5xl font-custom text-white text-center'>
            How Does Escrow Work
          </h2><BiQuestionMark size={62} color='white' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-64'>
          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>1</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>2</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>3</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>4</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>5</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>

          <div className='bg-white rounded-xl h-72 w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold text-[#703893] mb-4'>6</p>
            <img className='mx-auto mb-4' src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65ec32f465acaa4acbb1e900_icon-large_send-escrow.svg" alt="Send Escrow Request" />
            <p className='font-bold mb-2'>Send Escrow Request</p>
            <p className='text-gray-700 text-md'>
              Provide transaction details and send an escrow payment request to your vendor.
            </p>
          </div>
        </div>
      </div> */}
      <Section2 />

      <section className="bg-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-48"> {/* Change px-6 to px-8 for more padding */}
    {/* Heading and Benefits Section */}
    <div className="flex flex-col md:flex-row items-start justify-between mb-10">
      {/* Heading */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800">
        Trustopay’s Escrow: Seamless and Fully Digital Transactions
        </h1>
        <p className="mt-4 text-gray-600">
        Set up your transaction agreement in seconds for various needs, including shipments, digital assets, projects, and more.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="w-full md:w-1/2">
        <ul className="text-left">
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔️</span> Enjoy low costs with no hidden fees.
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔️</span>Always know the status of your funds.
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔️</span>Payments to escrow are processed in real-time.
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-green-500 mr-2">✔️</span> Choose from a range of fast and convenient local payment methods. 
          </li>
        </ul>
      </div>
    </div>

    {/* Table Section */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
            <th className="p-4 border"> </th>
            <th className="p-4 border">Trustopay</th>
            <th className="p-4 border">Letter of Credit</th>
            <th className="p-4 border">Banks</th>
            <th className="p-4 border">Current Escrow Players</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">Protection against fraud</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">
              Protection against delayed/canceled shipment
            </td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">Accessible to all SMEs</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">Complexity and Paperwork</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">Cost and Fees</td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">
            Speed of Transactions
            </td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">
            Flexibility and Amendments
            </td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">
            Real-Time Fund Visibility
            </td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
          <tr className="text-gray-700 text-sm">
            <td className="p-4 border">
            User Experience
            </td>
            <td className="p-4 border text-center">✔️</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
            <td className="p-4 border text-center">❌</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Contact Button */}
    <div className="mt-10 text-center">
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
        Contact Us
      </button>
    </div>
  </div>
</section>

      <section className="py-12 px-40 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Can You Buy & Sell Using Trustopay's Escrow?
          </h2>
          <p className="text-center mb-8">
            Our escrow services can help secure funds through local payment
            collection for high value transactions, such as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Column 1 */}
  <div className="flex flex-col items-justify">
    <h2 className="text-xl text-start font-semibold mb-4">Physical Goods</h2>
    <ul className="space-y-4">
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Physical Goods
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Export-import commodities
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Luxury items
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Manufacturing items
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Industrial items
      </li>
    </ul>
  </div>

  {/* Column 2 */}
  <div className="flex flex-col items-justify">
    <h2 className="text-xl font-semibold mb-4">Digital Goods</h2>
    <ul className="space-y-4">
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Digital Goods
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Social media accounts and channels
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Online stores & brands
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Email lists
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Domain names
      </li>
    </ul>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col items-justify">
    <h2 className="text-xl font-semibold mb-4">Additional Items</h2>
    <ul className="space-y-4">
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Service items
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Subscription services
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Consulting services
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Online courses
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔️</span> Digital subscriptions
      </li>
    </ul>
  </div>
</div>

        </div>
      </section>
      <section className="py-12 px-40 bg-white">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FundProtectionCard
            bgColorClass="bg-light-green"
            icon="🔒"
            title="Regulated payments partner"
            description="Your money is securely held by an institution licensed and regulated by the Monetary Authority of Singapore (MAS)."
          />
          <FundProtectionCard
            bgColorClass="bg-medium-blue"
            icon="🛡️"
            title="Safeguarded with authorised banks"
            description="In accordance with MAS regulatory requirements, all customer funds are safeguarded with an authorised bank in Singapore."
          />
          <FundProtectionCard
            bgColorClass="bg-dark-blue"
            icon="💰"
            title="Segregated customer funds"
            description="All customer funds at all times are segregated from our own corporate funds which we use to run our own business."
          />
        </div> */}
        <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
          How are Your Funds Protected with Our Escrow Services?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* First Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how1} alt="Lock Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Bank Partnerships
            </h3>
            <p className="text-center text-gray-600">
              YFunds are securely held in regulated accounts through partnerships with leading banks.
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how5} alt="Shield Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Verified by Trustees
            </h3>
            <p className="text-center text-gray-600">
             Trusted trustees oversee transactions to ensure compliance and security.
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how4} alt="Money Bag Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Secure payments
            </h3>
            <p className="text-center text-gray-600">
            Advanced payment gateways protect your financial information from frauds
            </p>
          </div>
          {/* fourth Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how2} alt="Money Bag Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Milestone Payments
            </h3>
            <p className="text-center text-gray-600">
            Funds are released only upon the successful completion of agreed milestones, ensuring satisfaction before payment.
            </p>
          </div>
          {/* fifth Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how6} alt="Money Bag Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            Dispute Resolution
            </h3>
            <p className="text-center text-gray-600">
            Our quick 3-step dispute resolution process addresses issues promptly, safeguarding your interests throughout the transaction.
            </p>
          </div>
          {/* sixth Item */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <span className="block w-12 h-12">
                <img src={how3} alt="Money Bag Icon" className="w-full h-full object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
            End-to-End Encryption
            </h3>
            <p className="text-center text-gray-600">
            We implement end-to-end encryption to secure all transaction data, providing an additional layer of protection against cyber threats.
            </p>
          </div>

        </div>
      </div>
    </div>
      </section>
      

      


      {/* <div className="min-h-screen bg-white max-w-full overflow-hidden mx-0 md:mx-36 p-8  space-y-24">
        <div className="text-center mb-12 space-y-8">
          <h2 className="text-xl w-full md:text-5xl font-bold bg-gradient-to-r from-[#703893] to-[#3f4195]  text-transparent bg-clip-text">
            Collect and Disburse to 173+ Markets with One Tazapay Account
          </h2>
          <p className="font-normal text-xl md:text-3xl bg-gradient-to-r from-[#703893] to-[#3f4195]  text-transparent bg-clip-text mt-4">
            Simple payment links and API integration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg"
                alt="icon"
                className="w-12 h-12"
              />
              <h3 className="ml-4 font-semibold text-lg text-gray-700">
                Pay with Local Bank Account
              </h3>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Lowest FX
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                No Chargebacks
              </span>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg"
                alt="icon"
                className="w-10 h-10"
              />
            </div>
            <p className=" text-md font-medium ">Available in 40+ countries</p>
            <p className="text-md font-medium">Same day to 2 days settlement</p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg"
                alt="icon"
                className="w-12 h-12"
              />
              <h3 className="ml-4 font-semibold text-lg text-gray-700">
                Pay with Local Bank Account
              </h3>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Lowest FX
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                No Chargebacks
              </span>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg"
                alt="icon"
                className="w-10 h-10"
              />
            </div>
            <p className=" text-md font-medium ">Available in 40+ countries</p>
            <p className="text-md font-medium">Same day to 2 days settlement</p>
          </div>

          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd780d0c09ce710db55e81_icon-large-localBank.svg"
                alt="icon"
                className="w-12 h-12"
              />
              <h3 className="ml-4 font-semibold text-lg text-gray-700">
                Pay with Local Bank Account
              </h3>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#703893] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Lowest FX
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                No Chargebacks
              </span>
            </div>
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/65dd7bce916442c31dddbb72_icon-paymentMethod-bankTransfer.svg"
                alt="icon"
                className="w-10 h-10"
              />
            </div>
            <p className=" text-md font-medium ">Available in 40+ countries</p>
            <p className="text-md font-medium">Same day to 2 days settlement</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border-2 hover:text-white   border-[#703893] hover:bg-gradient-to-l from-[#703893] to-[#3f4195] shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Enquiry about Escrow
          </button>
          <button
            type="button"
            className="py-3 space-y-8 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border bg-gradient-to-l from-[#703893] to-[#3f4195]  border-gray-200  text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Create an Escrow
          </button>
        </div>
      </div> */}
      <FaqComponent />

      <Footer />
    </>
  );
}
