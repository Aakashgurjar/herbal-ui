import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

import { FaPinterestP } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import mask from "../assets/mask.png";

import items from "../assets/items.png";
import hair from "../assets/hair.png";

import grp from "../assets/grp.png";
import gp from "../assets/Group.png";


import fox from "../assets/fox.png";
import Jane from "../assets/jane.png";
import Cody from "../assets/cody.png";
import Jenny from "../assets/jenny.png";


import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import Toggle from "./Toggle";

import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Frequently from "../components/Frequently";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/toggle"); 
  };

  const checklistItems = [
    "Fast & Reliable Delivery",
    "Freshness Guaranteed",
    "Hassle-Free Process",
    "Customer Satisfaction First",
    "Eco-Friendly Packaging",
  ];

  const features = [
    {
      icon: "🍃",
      title: "Pure Ingredients",
      description: "100% Fresh herba Essential.",
    },
    {
      icon: "📞",
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      icon: "🌿",
      title: "Sustainably Sourced",
      description: "We prioritize ethical sourcing practices.",
    },
    {
      icon: "💳",
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      icon: "📦",
      title: "100% Organic Food",
      description: "100% healthy & Fresh food.",
    },
  ];

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

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };


  const arr = [
    {
      img: Jenny,
      name: "Jenny Wilson",
      role: "CEO & Founder",
    },
    {
      img: Jane,
      name: "Jane Cooper",
      role: "CEO & Founder",
    },
    {
      img: Cody,
      name: "Cody Fisher",
      role: "Manager",
    },
    {
      img: fox,
      name: "Robert Fox ",
      role: "Manager",
    },
  ];

  return (
    <div>

      <div className="bg-white w-full mt-16">
        <div className="bg-[#0d3b1e] text-white py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 leading-snug">
              100% Trusted Organic Herba Essential
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Herba Essential guarantees the purest organic formulations, free
              from harmful chemicals and synthetic additives, ensuring complete
              trust and quality in every product.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={mask}
              alt="Herba Essential Product"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>



      <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={items}
              alt="Herba Essential Product"
              className="w-full max-w-md mx-auto"
            />

          
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
              100% Trusted Organic Herba Essential
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-6">
              At Herba Essential, we pride ourselves on delivering truly organic
              products that you can trust. Our commitment to purity, safety, and
              authenticity ensures that every ingredient is derived from nature
              and processed with care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl bg-orange-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>







      <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 leading-snug">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              At Herba Essential, we ensure a seamless and satisfying experience
              from the moment you place your order to the time it reaches your
              hands.
            </p>

            <ul className="space-y-3 mb-6">
              {checklistItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-700"
                >
                  <span className="text-xl mr-2">✅</span> {item}
                </li>
              ))}
            </ul>

            <button
              onClick={handleClick}
              className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-200"
            >
              Shop Now
              <FaArrowRight />
            </button>
          </div>

          <div className="flex justify-center">
            <img src={grp} alt="grp" className="w-full max-w-md rounded-md" />
          </div>
        </div>
      </section>



      <div className="lg:w-10/12 w-full border-2 mx-auto border-black">
        <div className="flex flex-col justify-center mx-auto py-3 mb-10">
          <div className="flex justify-center text-center sm:py-4 py-2">
            <h2 className="sm:text-3xl text-xl font-semibold">
              Our Awesome Team
            </h2>
          </div>
          <div className="flex justify-center mx-auto text-center mt-1 w-11/12 sm:w-6/12">
            <p className="text-gray-600 md:text-lg sm:text-md text-[0.7rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorib
              possimus vero. Ex vitae voluptates hic quia iusto tate ducimus
              unde dolorem, quidem consequuntur?
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-start md:gap-x-5 gap-x-2 border-2 bg-gray-100 border-black sm:mt-4 mt-1 px-2 overflow-x-auto flex-nowrap">
          {arr.map((val, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-black mx-auto min-w-[250px] sm:min-w-[300px] flex-shrink-0 "
            >
              <div className="relative flex flex-col justify-between ">
                <img
                  className="rounded-t-3xl w-full h-auto"
                  src={val.img}
                  alt={val.name}
                />

                <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 flex text-white gap-x-1 sm:gap-x-2 sm:text-xl text-[10px] ">
                  <div className="hover:bg-red-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                    <FaPinterestP />
                  </div>
                  <div className="hover:bg-sky-400 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                    <FaTwitter />
                  </div>
                  <div className="hover:bg-pink-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                    <FaInstagram />
                  </div>
                  <div className="hover:bg-blue-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                    <TiSocialFacebook />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:text-md lg:text-lg rounded-b-3xl sm:text-sm py-5 px-4 bg-white text-[0.6rem] font-semibold">
                <span className="text-slate-800">{val.name}</span>
                <span className="text-gray-500">{val.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>



      <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-16 relative overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
            What Our Clients Say{" "}
            <span className="text-orange-500">About Us</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed pulvinar
            proin gravida hendrerit lectus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

        <div className="flex justify-center mt-8 gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      <Frequently />
    </div>
  );
};

export default AboutUs;
