import React, { useState } from "react";
import gp from '../assets/Group.png'

import b from '../assets/B.png'


const Frequently = () => {


  const [openIndex, setOpenIndex] = useState(0);
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Herba Essential Powder?",
      answer:
        "Herba Essential Powder is a 100% organic hair care supplement formulated to promote healthy hair growth, reduce hair fall, and improve overall hair strength. It is crafted using Ayurvedic ingredients known for their beneficial properties.",
    },
    {
      question: "How does Herba Essential Powder help with hair care?",
      answer:
        "It nourishes the scalp, strengthens roots, and helps control dandruff and premature greying.",
    },
    {
      question: "How do I use Herba Essential Powder?",
      answer:
        "Mix the powder with water or oil and apply to scalp or consume as directed by your healthcare provider.",
    },
    {
      question: "Is Herba Essential Powder safe to use?",
      answer:
        "Yes, it is made with 100% organic ingredients and is generally safe. However, consult a doctor if you have any allergies.",
    },
    {
      question: "Can Herba Essential Powder reverse greying of hair?",
      answer:
        "It may help delay or reduce greying by nourishing the hair roots and improving melanin production.",
    },
  ];



  return (
      <div>
        <section className="max-w-7xl mx-auto lg:px-4 py-10 flex flex-row justify-around xl:gap-4 lg:gap-3 border-2 px-3 border-black ">
          <div className="border-2 hidden  border-black md:flex flex-col items-center md:items-start text-center md:text-left w-fit h-fit">
            <img
              src={gp}
              alt="Herba Essential"
              className="w-72  xl:h-[30rem] xl:w-[30rem] lg:w-[22rem] lg:h-[22rem]"
            />
          </div>
          <div className="w-[30rem] ">
            <div className="flex flex-col ">
              <div className="bg-green-300  rounded-br-full rounded-tr-full w-fit pl-4 sm:pr-10 pr-4 text-center  ">
                <h2 className="sm:text-2xl text-lg font-semibold  flex justify-center md:py-4 sm:py-3 py-2 items-center sm:gap-2 gap-1 text-center ">
                  <span className="sm:text-2xl text-lg">Frequently </span>
                  <span className="text-orange-500 sm:text-2xl text-lg">
                    Asked Questions
                  </span>
                </h2>
              </div>
              <div>
                <hr className="border-b mt-1 w-full " />
              </div>
            </div>
            {faqData.map((item, index) => (
              <div key={index} className="border-b lg:py-4 sm:py-1 py-2 ">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left flex justify-between items-center font-medium text-gray-800"
                >
                  <span className="text-sm sm:text-lg">
                    Q{index + 1}: {item.question}
                  </span>
                  <span className="sm:text-3xl text-sm">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index ? (
                  <p className="mt-2 text-gray-600 sm:text-sm text-[0.8rem]">
                    {item.answer}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="flex mx-auto w-fit">
          <img src={b} />
        </div>
      </div>
  
  );
};

export default Frequently;



