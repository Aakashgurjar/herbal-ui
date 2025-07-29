import React, { useState } from "react";
import img from "../assets/main.png";
import shdw from "../assets/shadow.png";
import lef from "../assets/leafsm.png";

import grp from "../assets/grp.png";

import drop from "../assets/dropped.png";
import HerbaEssential from "../components/HerbaEssential";
import HowToUseSection from "../components/HowToUseSection";
import ProductEffect from "../components/ProductEffect";
import Frequently from "../components/Frequently";

import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  const testimonials = [
    {
      name: "Robert Fox",
      role: "Customer",
      image: img8,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
      name: "Dianne Russell",
      role: "Customer",
      image: img7,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
      name: "Eleanor Pena",
      role: "Customer",
      image: img6,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
  ];

  return (
    <div className="border-2 border-red-300">
     
     <div className="h-10 w-full bg-[#C8C45B] flex justify-center mt-16">
         <p>FLAT 100 Use code: HERBA200</p>
     </div>

      <div className="w-full bg-[#0f2c14] text-white font-sans  ">
        <div className="border-2 border-yellow-400 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8  ">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nourish Your Roots,
              <br />
              <span className="text-yellow-400">Transform Your Hair</span>
            </h1>
            <p className="italic text-lg mt-4 text-gray-300">
              100% Organic Hair Nutrition for Healthier, Thicker, Younger Hair
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              Restore your hair’s natural strength and shine with Herba
              Essential – your daily boost of Ayurvedic goodness in a single
              sachet.
            </p>
            <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300">
              Buy Now
            </button>
          </div>

        

          <div className="relative  border-2 max-w-lg h-full">
            <img
              src={shdw}
              alt="Shadow"
              className="absolute inset-0 w-full h-full z-0 "
            />

            <img
              src={drop}
              alt="drop"
              className=" absolute w-1/2 top-5 -left-24 z-10"
            />

            <img
              src={img}
              alt="Herba Product"
              className="relative max-w-md h-3/6 -left-40 z-10"
            />
          </div>
        </div>

        <div className="w-full bg-[#C8C45B] overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-black text-base font-semibold py-2 inline-block">
            Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair, Every
            Day Shine with Confidence Nourish. Strengthen. Grow.
            &nbsp;&nbsp;&nbsp; Thick, Strong, Beautiful Your Hair’s Best Ally
            Healthy Hair, Every Day Shine with Confidence Nourish. Strengthen.
            Grow.Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair,
            Every Day Shine with Confidence Nourish. Strengthen. Grow.
          </div>
        </div>

        <style>
          {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-100%); }

          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
      
        `}
        </style>
      </div>

      <HerbaEssential />
      <ProductEffect />

      <div className="py-10 px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            What is Herba Essential?
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            A premium 100% organic dietary supplement designed to restore hair
            health from the inside out.
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Image (Mobile first, middle in desktop) */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={grp}
              alt="Herba Essential"
              className="w-60 md:w-72 h-[250px] object-contain"
            />
          </div>

          {/* Left Box (Why Choose) */}
          <div className="order-2 md:order-1 bg-[#fffbe7] rounded-xl shadow-sm p-6 sm:w-auto h-full  mx-auto ">
            <h2 className="text-xl font-semibold mb-4">
              Why Choose Herba Essential?
            </h2>
            <ul className="sm:space-y-2 text-gray-700 md:text-sm  ">
              <li>✅ Promotes thick, healthy hair</li>
              <li>✅ Helps control hair fall</li>
              <li>✅ Supports gut health – a key to hair growth</li>
              <li>✅ May reverse premature greying</li>
            </ul>
          </div>

          {/* Right Box (Key Features) */}
          <div className="order-3 md:order-3 bg-[#fffbe7] rounded-xl shadow-sm p-6 sm:w-auto  h-full mx-auto">
            <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
            <ul className="sm:space-y-2 text-gray-700 md:text-sm">
              <li>🟢 100% Organic Ingredients</li>
              <li>🟢 No Artificial Additives</li>
              <li>🟢 Suitable for All Genders</li>
              <li>🟢 Holistic Hair & Wellness Formula</li>
            </ul>
          </div>
        </div>
      </div>

      <HowToUseSection />
      



     <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-16 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
          What Our Clients Say <span className="text-orange-500">About Us</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed pulvinar
          proin gravida hendrerit lectus
        </p>
      </div>

      <div className="block md:hidden">
        <div className="flex justify-center items-center gap-4">
       

          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between w-full max-w-sm">
            <span className="text-green-600 text-4xl mb-4">“</span>
            <p className="text-gray-700 text-sm mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
            <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-xs">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3">
              {Array.from({ length: testimonials[currentIndex].rating }).map(
                (_, idx) => (
                  <span key={idx} className="text-orange-400 text-sm">
                    ★
                  </span>
                )
              )}
            </div>
          </div>

        
        </div>
      </div>

      <div className=" hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between"
          >
            <span className="text-green-600 text-4xl mb-4">“</span>
            <p className="text-gray-700 text-sm mb-6">{t.quote}</p>

            <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                />
            <div>
              
                <h4 className="font-semibold text-gray-900 text-sm">
                  {t.name}
                </h4>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
            <div className="flex items-center mt-3">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <span key={idx} className="text-orange-400 text-sm">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-2">
      
      <div> 
        <button
            onClick={handlePrev}
            className="text-2xl px-3 py-1 bg-gray-100 rounded-full shadow"
            disabled={currentIndex === 0}
          >
            ⬅
          </button>
          </div>
         
          
             {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-green-600" : "bg-gray-300"
            }`}
          ></span>
        ))} 
         

        <div> 
          <button
            onClick={handleNext}
            className="text-2xl px-3 py-1 bg-gray-100 rounded-full shadow"
            disabled={currentIndex === testimonials.length - 1}
          >
            ➡
          </button>
          </div>
          
      </div>
      
    </section>


      <Frequently />
    </div>
  );
};

export default Home;
