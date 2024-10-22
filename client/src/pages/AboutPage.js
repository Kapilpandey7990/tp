import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import ImageAutoSlider from "../utils/ImageAutoSlider"
import collage from "../assets/images/about_us/collage.png"
import { FaAngleRight, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import sunish from "../assets/images/about_us/IMG-20241016-WA0006.jpg"
import nilesh from "../assets/images/about_us/IMG-20241016-WA0007.jpg"
import jaydeep from "../assets/images/about_us/IMG-20241016-WA0008.jpg"
import pierc from "../assets/pierc.png"
import FaqComponent from '../components/FaqComponent';
import bcg from "../assets/rb_6520.png"
import person from "../assets/workingper.png"
import integrity from "../assets/images/cardds/integrity.png"
import innovation from "../assets/images/cardds/innovation.png"
import collaboration from "../assets/images/cardds/collaboration.png"
import security from "../assets/images/cardds/security.png"
import customer from "../assets/images/cardds/target.png"
import efficiency from "../assets/images/cardds/time.png"
import fairness from "../assets/images/cardds/fair-trade.png"
import global from "../assets/images/cardds/protection.png"




export default function AboutPage() {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState("https://trustopay.vercel.app/assets/images/image.jpeg");

  // Function to handle the click on a small image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };


  const teamMembers = [
    {
      name: "Utkarsh Mishra",
      role: "CMO",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/Us.png", // Actual image path for Utkarsh Mishra
      linkedin: "https://linkedin.com/in/utkarshmishra", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/utkarshmishra", // Replace with actual Twitter URL
    },
    {
      name: "Ankit Sharma",
      role: "CEO",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/As.png", // Actual image path for Ankit Sharma
      linkedin: "https://linkedin.com/in/ankitsharma", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/ankitsharma", // Replace with actual Twitter URL
    },
    {
      name: "Jainish Gupta",
      role: "CTO",
      imgSrc: "https://trustopay.vercel.app/assets/images/our%20team/Js.png", // Actual image path for Jainish Gupta
      linkedin: "https://linkedin.com/in/jainishgupta", // Replace with actual LinkedIn URL
      twitter: "https://twitter.com/jainishgupta", // Replace with actual Twitter URL
    },
  ];
  

  return (
    <div className='h-90'>
      <PageHeader />

      <div  className="flex bg-gradient-to-r from-[#703893] to-[#3f4195] h-[600px] w-full justify-center items-center"
      >

        <div className='flex justify-center items-center md:px-48 w-5/6 -translate-y-18'>
          <h1 className='text-4xl font-custom text-white font-semibold  leading-tight w-5/3 text-center'>Trustopay is India's Largest growing Startup solving all problem around the payments frauds through Escrow
          </h1>
        </div>


      </div>

      <div className='h-auto mb-24 space-y-8 flex flex-col justify-center items-center my-12'>
        {/* Heading Section */}
        <h2 className='text-3xl font-custom text-center '>About Us </h2>
        <p className='text-center text-gray-600 md:px-48 px-8'>
          Founded in the year 2024, Trustopay is a full-stack technology platform that has launched its operations in the year 2015. We are building an ecosystem of products and services to solve business problems around payment acceptance, payouts, and financial operations. The team at Easebuzz focuses on creating workflows that enable businesses to process digital payments and manage end-to-end financial operations through plug-and-play APIs.
        </p>
        {/* <img 
    src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/group.png" 
    alt="Easebuzz Team" 
    className="w-full md:w-5/6 rounded-lg"
  /> */}
        {/* <div className='w-full md:w-5/6'>
          <ImageAutoSlider />
        </div> */}
      </div>

      {/* New section like the image */}
      {/* <div className="w-full py-12 bg-gradient-to-r from-[#3f4195] to-[#3f4195] rounded-lg px-8 md:px-48 space-y-8">
        <div className='grid grid-cols-2 md:grid-cols-6 gap-8 text-center'>
          
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Calendar Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>2024</h3>
            <p className='text-white'>Founding year</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Clients Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>150+</h3>
            <p className='text-white'>Happy clients</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="API Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>10+</h3>
            <p className='text-white'>API plugins</p>
          </div>
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/1.svg" alt="Transactions Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>10L+</h3>
            <p className='text-white'>Transactions processed per day</p>
          </div>
          
          <div>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/stats-icon/5.svg" alt="Offices Icon" className="w-12 mx-auto" />
            <h3 className='text-white text-3xl font-bold'>2 </h3>
            <p className='text-white'>Round Of Funds Raised</p>
          </div>
        </div>
      </div> */}

      {/* Vision and Mission Section */}
      <div className='h-auto bg-gradient-to-b from-[#703893] to-[#3f4195] relative flex justify-center items-center py-24 px-48'>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
          <div>
          <img className='absolute top-0 left-0 z-10' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/matrix_pattern.svg" alt="" />
        </div>
        <div>
          <img className='absolute h-1/4 bottom-0 right-0 z-10 ' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/our_mission_bg.png" alt="" />

        </div>
        <div className='flex justify-center w-full mr-12'>
          <img className='h-1/2 w-full z-20' src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/tricolor_logo.png" alt="" />
          
        </div>
          </div>
        
        <div className='flex w-1/2 flex-col justify-start  items-center z-20 space-y-12 text-white'>
          <div className='space-y-4'>
            <h2 className='font-custom text-4xl'>Our Vision</h2>
            <p className='font-medium' > Trustopay aims to reach a turnover of INR 5000 Crore by 2030, driven by innovation and excellence in payment solutions. We are committed to expanding our impact and redefining the payment landscape with cutting-edge technology.</p>
          </div>
          <div className=' space-y-4'>
            <h2 className='font-custom text-4xl '>Our Mission</h2>
            <p className='font-medium'>Our mission is to achieve INR 5000 Crore in turnover by 2030 through strategic growth, advanced technology, and exceptional service. We focus on building strong partnerships and delivering value to set new industry standards.</p>
          </div>
        </div>

      </div>


      {/* <div class="flex flex-col h-[500px] md:flex-row items-center  md:items-start justify-center w-full p-12 pl-24">
      <div class="md:w-1/3 pr-8 flex flex-col justify-center  h-[400px] items-center ">
    <div class='h-1/2 flex items-start justify-center flex-col '>
      <h2 class="text-4xl font-bold mb-4">Our culture</h2>
      <p class="text-lg mb-4">
        At Trustopay, we care about making an impact that truly matters. Together, we foster a culture in which our people feel empowered to drive positive change every day.The culture at Trustopay is very inclusive and diverse. The innovation ethos at Trustopay empowers our employees to bring their best in solving deeper problems around the payments life cycle of varied businesses of the economy.
      </p>
    </div>
  </div>

      <div class="md:w-1/2 mt-6 md:mt-0 pr-12">
        <img src={collage} alt="Our People and Culture" class="w-full rounded-lg "/>
      </div>
    </div> */}
    

    <div className="relative flex flex-col md:flex-row items-center justify-between bg-white p-8 md:px-40">
  <div className="flex-1 mb-8 md:mb-0 order-2 md:order-1">
    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Our Culture</h2>
    <p className="mt-4 text-gray-600">
    At Trustopay, we care about making an impact that truly matters. Together, we foster a culture in which our people feel empowered to drive positive change every day.The culture at Trustopay is very inclusive and diverse. The innovation ethos at Trustopay empowers our employees to bring their best in solving deeper problems around the payments life cycle of varied businesses of the economy.
    </p>
    <a href="mailto:hr@trustopay.com?body=Join our team">
    <button className="mt-6 bg-gradient-to-r from-[#703893] to-[#3f4195] text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300 transition ease-in duration-200">
      Join our team
    </button>
    </a>
  </div>
  
  <div className="flex-1 relative order-1 md:order-2">
    {/* Illustration Wrapper with Relative Position */}
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Background Circle Design */}
      {/* <div className="absolute bg-orange-200 w-20 h-20 md:w-40 md:h-40 lg:w-96 lg:h-80 rounded-full -z-8"></div> */}

      {/* Illustration Image */}
      <img
        src={bcg}
        alt="Team Illustration"
        className="relative max-w-xs md:max-w-md lg:max-w-lg mx-auto z-10"
      />
    </div>
  </div>
</div>




      {/* <div className='h-100  flex w-full px-48 py-24 space-x-2'>
            <div className='w-30 bg-red-400 flex flex-col items-center justify-center h-auto'>
            <h2 className='text-2xl font-custom '>Our Culture</h2>
              <p>At Easebuzz, we care about making an impact that truly matters. Together, we foster a culture in which our people feel empowered to drive positive change every day.</p>
              <p>The culture at Easebuzz is very inclusive and diverse. The innovation ethos at Easebuzz empowers our employees to bring their best in solving deeper problems around the payments life cycle of varied businesses of the economy.</p>
          
            </div>
          <div className='w-auto h-full '>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/easebuzz/about-new/our-people-our-brand/culture-1.png" alt="" />

          </div>
          
        </div>
         */}

<section className="bg-gradient-to-r from-[#703893] to-[#3f4195] py-10 px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start">
          <h2 className="text-3xl font-bold text-white">We live by our values.</h2>
          <p className="mt-2 text-lg text-white w-1/2">
            At Trustopay, our values guide everything we do. These principles ensure that we deliver secure, transparent, and reliable services that our users can trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={integrity} alt="Integrity First icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Integrity First</h3>
            <p className="mt-2 text-black">
              We operate with honesty and transparency, ensuring that every transaction is handled with the utmost trustworthiness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={customer} alt="Customer-Centric icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Customer-Centric</h3>
            <p className="mt-2 text-black">
              Our users are at the heart of everything we do. We prioritize your needs, offering seamless, secure, and reliable payment solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={security} alt="Security as a Priority icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Security as a Priority</h3>
            <p className="mt-2 text-black">
              Protecting your transactions is our top concern. We use cutting-edge technology to safeguard your funds and data at every step.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={efficiency} alt="Efficiency in Action icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Efficiency in Action</h3>
            <p className="mt-2 text-black">
              We value your time, which is why we make escrow setup and transaction management quick, easy, and hassle-free.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={innovation} alt="Innovation Driven icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Innovation Driven</h3>
            <p className="mt-2 text-black">
              We are committed to continuous improvement, integrating the latest technologies to enhance our platform and keep up with evolving needs.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={fairness} alt="Fairness and Equality icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Fairness and Equality</h3>
            <p className="mt-2 text-black">
              Every user, regardless of size or status, is treated equally. We ensure fair handling of every transaction and dispute resolution process.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={global} alt="Global Accessibility icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Global Accessibility</h3>
            <p className="mt-2 text-black">
              We believe secure transactions should be available to everyone, everywhere. Our platform is accessible and reliable for users worldwide.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-[#f8e6f8] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={collaboration} alt="Collaboration and Support icon" className="w-12 h-12" /> {/* Replace with actual image path */}
            <h3 className="mt-4 text-xl font-semibold text-black">Collaboration and Support</h3>
            <p className="mt-2 text-black">
              We work closely with our users to provide the best experience possible, offering support and guidance every step of the way.
            </p>
          </div>

        </div>
      </div>
    </section>


<div className="w-full flex flex-col h-auto px-12 md:px-28 py-12 bg-white text-center">
  <div className="mb-8 flex justify-center">
    <h2 className="font-custom text-3xl md:text-4xl font-semibold leading-tight text-gray-900 md:w-1/2 ">
      Backed by some of the best investors in the business
    </h2>
  </div>

  <div className="flex flex-col md:flex-row w-full mt-6">
    <div className="flex w-full md:w-1/2 justify-center items-center px-4 md:px-12">
      <p className="text-lg leading-relaxed text-start text-gray-700">
        We are backed by Fintech world's most influential investors. Their encouragement is driving the innovations at Easebuzz and enabling us every day to solve the complex business use cases around payments and financial operations across varied sectors of the Indian Economy.
      </p>
    </div>

    <div className="flex flex-col w-full md:w-1/2 justify-between mt-8 md:mt-0 md:pr-24">
      <div className="flex justify-center md:justify-between space-x-6 mb-6">
        <div className="w-60 h-auto  border-gray-300 flex items-center justify-center">
          {/* Investor 1 Image */}
          <img src="https://miro.medium.com/v2/1*hRFl1Fa6uGppqxf3BmGEoA.png" alt="Investor 1" className="w-auto h-auto object-cover rounded-full" />
        </div>
        <div className=" w-60 h-auto border-gray-300 flex items-center justify-center">
          {/* Investor 2 Image */}
          <img src="https://static.wixstatic.com/media/8436e2_657c4b658c6949338b5139848e4ca8b9~mv2.png/v1/fill/w_126,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8436e2_657c4b658c6949338b5139848e4ca8b9~mv2.png" alt="Investor 2" className="w-auto h-auto object-cover rounded-full" />
        </div>
        {/* <div className=" w-28 h-24  border-gray-300 flex items-center justify-center">
          
          <img src="https://apideltech.com/wp-content/uploads/2023/06/logo_new.png" alt="Investor 3" className="w-auto h-auto object-cover rounded-full" />
        </div>
        <div className=" w-28 h-24  border-gray-300 flex items-center justify-center">
          
          <img src={pierc} alt="Investor 3" className="w-auto h-auto object-cover rounded-full" />
        </div> */}
      </div>
      <div className="flex justify-center md:justify-between space-x-6 mb-6">
        
        <div className=" w-40 h-24  border-gray-300 flex items-center justify-center">
          
          <img src="https://apideltech.com/wp-content/uploads/2023/06/logo_new.png" alt="Investor 3" className="w-auto h-auto object-cover rounded-full" />
        </div>
        <div className=" w-40 h-24  border-gray-300 flex items-center justify-center">
          
          <img src={pierc} alt="Investor 3" className="w-auto h-auto object-cover rounded-full" />
        </div>
      </div>

     
    </div>
  </div>
</div>

{/* <div className="w-full h-auto px-12 py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Meet our leadership team</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:cursor-pointer rounded-lg shadow-lg w-72 bg-gray-50 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={member.imgSrc}
              alt={`${member.name}`}
            />
            <div className="bg-[#041440] text-white w-full p-4 flex justify-between items-center">
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-200"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-200"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}

<div className='h-auto flex items-center justify-center py-24'>
  {/* Image and content container */}
  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

    {/* Image section */}
    <div className="flex justify-center">
      <img
        src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/PS.svg"
        alt="Payment Solutions Illustration"
        className="w-full max-w-sm"
      />
    </div>

    {/* Text and button section */}
    <div>
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center md:text-left">
        Payment solutions that are easy to understand, and simple to use
      </h2>

      {/* Feature List */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        <ul className='text-lg text-gray-700 space-y-2'>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Quick onboarding</p>
          </li>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Easy Integration</p> {/* Changed text to avoid duplication */}
          </li>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Highlight Unique Features</p> 
          </li>
        </ul>
        <ul className='text-lg text-gray-700 space-y-2'>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Seamless Transactions</p> {/* Changed text to avoid duplication */}
          </li>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Customizable Options</p> {/* Changed text to avoid duplication */}
          </li>
          <li className='flex items-center space-x-4'>
            <img src="https://easebuzz.in/static/base/assets_aug_2021/img/home/homepage_new/bullet_point_icon.svg" alt="" />
            <p>Offer Incentives</p> 
          </li>
        </ul>
      </div>

      {/* Sign Up Button */}
      <div className="flex justify-center md:justify-start">
        <Link to={"https://play.google.com/store/search?q=trustopay&c=apps&hl=en_US"}>
          <button className='inline-flex items-center gap-1 bg-gradient-to-b from-[#703893] to-[#3f4195] hover:bg-[#703893] text-white py-3 px-8 rounded-xl text-lg transition'>
            Download Our App <span><FaAngleRight /></span>
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#703893] to-[#3f4195] p-8 md:py-16 md:px-20 mx-4 md:mx-40 rounded-xl">
  <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
    <h1 className="text-4xl md:text-3xl text-white mb-4">Careers at Trustopay</h1>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our team is expanding!</h2>
    {/* Illustration image */}
    <div className="flex justify-center md:justify-start mb-4">
      <img
        src={person} // Add the correct path to the image file
        alt="Growing Team Illustration"
        className="w-60 h-60 max-w-xs md:max-w-sm lg:max-w-md"
      />
    </div>
  </div>

  <div className="flex-1 text-center md:text-left">
    <p className="text-white md:text-lg mb-6">
      At Trustopay, we prioritize our users, uphold our values, and focus on making a lasting impact in the digital payment space. We believe that every contribution drives us forward. Are you ready to be part of our mission? Explore our careers page to see how you can join our growing team.
    </p>
    <a href="mailto:hr@trustopay.com?body=Join our team">
      <button className="bg-transparent border text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-200">
        Apply Now
      </button>
    </a>
  </div>
</div>


 
      <FaqComponent />

      <Footer />
    </div>
  );
}
