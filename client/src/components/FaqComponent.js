import React from 'react';
import Faq from 'react-faq-component';
import { IoIosArrowDown } from "react-icons/io";

const FaqComponent = () => {

  const data = {
    rows: [
      {
        title: "What is Trustopay?",
        content: "Trustopay is a secure online escrow platform designed to ensure safe payments between buyers and sellers. We hold funds in escrow until both parties are satisfied with the transaction, minimizing risks such as fraud and non-payment."
      },
      {
        title: "How does Trustopay work?",
        content: "Trustopay acts as a trusted third party in online transactions. When a buyer makes a payment, the funds are held securely in escrow until the product or service is delivered as agreed. Once the transaction is completed to both parties' satisfaction, the funds are released to the seller."
      },
      {
        title: "Who can use trustopay?",
        content: "Trustopay is designed for freelancers, small businesses, e-commerce platforms, and individuals engaging in online transactions. Whether you’re a service provider, seller, or buyer, Trustopay provides a secure and transparent way to manage payments."
      },
      {
        title: "What types of transactions are supported?",
        content: "Trustopay supports a wide range of transactions, including freelance services, e-commerce purchases, digital marketing projects, software development, and even high-value transactions like real estate and import-export services."
      },
      {
        title: "How are disputes handled?",
        content: "Trustopay has a simple 3-step, 7-day dispute resolution process. If there’s a disagreement between the buyer and seller, both parties can submit their claims. Trustopay’s team will review the case and resolve the issue quickly and fairly."
      },
      {
        title: "What are milestone payments, and how do they work?",
        content: "Milestone payments allow funds to be released in stages as portions of a project are completed. This feature is especially useful for freelancers and clients working on long-term projects, ensuring that payments are made for completed work incrementally."
      },
      {
        title: "What are the fees for using Trustopay?",
        content: "Trustopay charges a small service fee for managing the escrow process. The exact fee depends on the type and value of the transaction. The fee will be clearly displayed before the transaction begins."
      }
    ]
  };

  const styles = {
    bgColor: 'white',
    titleTextColor: "#703893",
    rowTitleColor: "#000000",
    rowContentColor: "#241512",
    arrowColor: "#0f3c53",
    rowTitleTextSize: '18px',
    rowContentTextSize: '16px',
    titleTextSize: '24px'
  };

  const config = {
    animate: true,
    arrowIcon: <IoIosArrowDown />,
    openOnStart: 0,
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
      <div className="flex flex-col lg:flex-col items-center lg:space-x-12 md:mx-36 ">
        <div className=" mb-8 lg:mb-0 flex flex-col-reverse md:flex-col gap-y-8 md:gap-y-0">
          <h2 className="text-[#000000] flex text-3xl font-bold mb-4 ">Frequently Asked Questions</h2>
          <div className='flex justify-center lg:justify-start'>
            {/* <button
              type="button"
              className="py-3 px-4 flex items-center gap-x-2 text-sm font-medium rounded-3xl border bg-[#8965e4] text-white shadow-lg hover:bg-[#703893] border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8965e4] transition"
            >
              Book a Demo
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
        </div>

        <div className="lg:w-2/3  ">
          <Faq styles={styles} config={config} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
