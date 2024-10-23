import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import faq from "../assets/faq.jpg"
import faq from "../assets/faqq.jpg"
// import faq from "../assets/rb_43064.png"

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

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
        title: "Who can use Trustopay?",
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

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
      {/* Left Side Image */}
      <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
  <img 
    src={faq}
      alt="Illustration" 
      className="w-[40rem] h-[40rem] object-contain" // Set width and height to 40rem
    />
  </div>



      {/* FAQ Section */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-[#000000] text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        {data.rows.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 transition-shadow duration-300 hover:shadow-xl">
            <h3 
              className="text-lg font-semibold text-[#703893] flex justify-between items-center cursor-pointer" 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} // Toggle open index
            >
              <span>{faq.title}</span>
              {openIndex === index ? (
                <IoIosArrowUp className="text-[#0f3c53]" />
              ) : (
                <IoIosArrowDown className="text-[#0f3c53]" />
              )}
            </h3>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
              {openIndex === index && (
                <p className="text-[#241512] mt-2">{faq.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
