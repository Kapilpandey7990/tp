import React, { useState } from 'react';
import PageHeader from '../components/shared/PageHeader';
import Footer from '../components/shared/Footer';
import ImageAutoSlider from "../utils/ImageAutoSlider"
import collage from "../assets/images/about_us/collage.png"
import { FaAngleRight, FaTwitter, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function Buyer (){
    return (
      <>
        <section className="bg-gradient-to-r from-[#703893] to-[#3f4195] py-16 px-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            {/* Left Side - Heading and Points */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-white mb-6">
                Welcome to Trustopay
              </h1>
              <div className="text-lg text-white mb-4">
                <p className="mb-2">
                  Secure and reliable payment processing for businesses
                  worldwide.
                </p>
                <p>
                  Fast, transparent, and trusted escrow services you can count
                  on.
                </p>
              </div>
              <button className="mt-6 bg-white text-[#703893] font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
                Get Started
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/2 text-center md:text-right">
              <img
                src="/path-to-your-image.png"
                alt="Trustopay Hero"
                className="max-w-xs md:max-w-sm lg:max-w-md mx-auto md:ml-auto"
              />{" "}
              {/* Replace with your image path */}
            </div>
          </div>
        </section>

        <div className="container mx-auto py-10 px-20">
          {/* Header section with the central icon */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-4 rounded-full">
              <img
                src="/path-to-icon/z-icon.png" // Replace with the correct path to your icon
                alt="Z Icon"
                className="h-16 w-16"
              />
            </div>
          </div>

          {/* Flow sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Step 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <img
                    src="/path-to-icon/purchase-icon.png" // Replace with the correct icon
                    alt="Purchase Icon"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Make your purchase</h2>
              <p className="text-gray-600">
                Buyer pays Tazapay and Tazapay verifies the necessary documents
                before releasing payment to the seller. Buyer automatically
                becomes eligible for buyer protection.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <img
                    src="/path-to-icon/claim-icon.png" // Replace with the correct icon
                    alt="Claim Icon"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Submit a claim</h2>
              <p className="text-gray-600">
                If the customer does not receive the goods or services, the
                customer drops an email to{" "}
                <a
                  href="mailto:buyerprotection@tazapay.com"
                  className="text-blue-500"
                >
                  buyerprotection@tazapay.com
                </a>{" "}
                with the transaction ID and a description of the transaction.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full">
                  <img
                    src="/path-to-icon/dispute-icon.png" // Replace with the correct icon
                    alt="Dispute Icon"
                    className="h-10 w-10"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Dispute resolution and refund
              </h2>
              <p className="text-gray-600">
                Tazapay reviews the evidence submitted by the buyer and seller
                to mediate a resolution.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white py-12 px-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:gap-8">
            {/* Left Side - Card with Question Heading and Two Points */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  What is Trustopay?
                </h2>
                <div className="flex items-start mb-4">
                  <img
                    src="/path-to-icon1.png"
                    alt="Icon 1"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 1: Secure and reliable payment processing.
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/path-to-icon2.png"
                    alt="Icon 2"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 2: Transparent and trusted escrow services.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-600">
                Our platform is designed to bring transparency and trust to
                every transaction.
              </p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Right Side - Card with Heading and Five Points */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Why Choose Trustopay?
                </h2>
                <div className="flex items-start mb-2">
                  <img
                    src="/path-to-icon3.png"
                    alt="Icon 3"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 1: Fast and efficient transaction processing.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <img
                    src="/path-to-icon4.png"
                    alt="Icon 4"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 2: Global accessibility for all users.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <img
                    src="/path-to-icon5.png"
                    alt="Icon 5"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 3: High-level encryption for transaction security.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <img
                    src="/path-to-icon6.png"
                    alt="Icon 6"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 4: Easy setup and management of escrow accounts.
                  </p>
                </div>
                <div className="flex items-start">
                  <img
                    src="/path-to-icon7.png"
                    alt="Icon 7"
                    className="w-6 h-6 mr-3"
                  />{" "}
                  {/* Replace with actual icon */}
                  <p className="text-gray-600">
                    Point 5: Transparent and fair handling of disputes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              How to Raise a Buyer Protection Dispute
            </h2>

            <div className="space-y-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                  {/* Image */}
                  <img
                    src="/path-to-image-step1.png"
                    alt="Step 1 Icon"
                    className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                  />{" "}
                  {/* Replace with your image */}
                  {/* Step Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Step 1
                    </h3>
                    <p className="text-gray-600">
                      Log in to your Trustopay account and navigate to your
                      transaction history. Locate the transaction in question
                      and click "Raise Dispute."
                    </p>
                  </div>
                </div>

                {/* Arrow pointing down */}
                <div className="w-12 h-12 mt-4 text-gray-400 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                  {/* Image */}
                  <img
                    src="/path-to-image-step2.png"
                    alt="Step 2 Icon"
                    className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                  />{" "}
                  {/* Replace with your image */}
                  {/* Step Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Step 2
                    </h3>
                    <p className="text-gray-600">
                      Provide a detailed description of the issue you're facing.
                      Upload any relevant documents or images as evidence for
                      your claim.
                    </p>
                  </div>
                </div>

                {/* Arrow pointing down */}
                <div className="w-12 h-12 mt-4 text-gray-400 flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                  {/* Image */}
                  <img
                    src="/path-to-image-step3.png"
                    alt="Step 3 Icon"
                    className="w-16 h-16 mb-4 md:mb-0 md:mr-6"
                  />{" "}
                  {/* Replace with your image */}
                  {/* Step Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Step 3
                    </h3>
                    <p className="text-gray-600">
                      Submit the dispute. Trustopay will review your case, and
                      you'll be notified of any updates or additional
                      information required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Our Investors
            </h2>

            {/* Logos in a Single Row */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Logo 1 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo1.png"
                  alt="Investor 1"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 2 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo2.png"
                  alt="Investor 2"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 3 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo3.png"
                  alt="Investor 3"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 4 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo4.png"
                  alt="Investor 4"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 5 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo5.png"
                  alt="Investor 5"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 6 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo6.png"
                  alt="Investor 6"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>

              {/* Logo 7 */}
              <div className="flex justify-center">
                <img
                  src="/path-to-logo7.png"
                  alt="Investor 7"
                  className="h-16"
                />{" "}
                {/* Replace with actual logo */}
              </div>
            </div>
          </div>
        </section>  
      </>
    );


}