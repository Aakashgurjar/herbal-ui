import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { GiWideArrowDunk } from "react-icons/gi";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { FaPinterestP } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import mask from "../assets/mask.png";
import vector from "../assets/Vector.png";

import items from "../assets/items.png";
import hair from "../assets/hair.png";

import grp from "../assets/grp.png";
import gp from "../assets/Group.png";

import lf from "../assets/lf.png";
import lf2 from "../assets/lf2.png";

import fox from "../assets/fox.png";
import Jane from "../assets/jane.png";
import Cody from "../assets/cody.png";
import Jenny from "../assets/jenny.png";
import leaf from "../assets/leaf.png";

import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import Toggle from "./Toggle";

import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Frequently from "../components/Frequently";
import Mininav from "../components/Mininav";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PopupContext } from "../context/PopupContext";
import Herba from "../components/Herba";
import Blur from "../components/Blur";

import truck from "../assets/truck.png";
import packages from "../assets/packages.png";
import headphone from "../assets/headphone.png";
import Group6 from "../assets/Group6.png";
import star from "../assets/stars2.png";
import lef from "../assets/leaf2.png";

const AboutUs = () => {
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
    {
      name: "kapil ok",
      role: "eeeeeeeeeeee",
      image: img8,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
      name: "Dianne hero",
      role: "erer",
      image: img7,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
  ];

  const navigate = useNavigate();

  const checklistItems = [
    "Fast & Reliable Delivery",
    "Freshness Guaranteed",
    "Hassle-Free Process",
    "Customer Satisfaction First",
    "Eco-Friendly Packaging",
  ];

  const features = [
    {
      icon: lef,
      title: "Pure Ingredients",
      description: "100% Fresh herba Essential.",
    },
    {
      icon: headphone,
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      icon: star,
      title: "Sustainably Sourced",
      description: "We prioritize ethical sourcing practices.",
    },
    {
      icon: Group6,
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      icon: truck,
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      icon: packages,
      title: "100% Organic Food",
      description: "100% healthy & Fresh food.",
    },
  ];

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

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
  //   );
  // };

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

  // const [otpWindow, setOtpWindow] = useState(false);
  const {
    showPopup,
    setShowPopup,
    closePopup,
    handlePopup,
    handleLogin,
    otpWindow,
    setOtpWindow,
    isLoggedIn,
  } = useContext(PopupContext);

  const clickwindow = () => {
    setShowPopup(false);
    setOtpWindow(true);
  };

  function cross() {
    setOtpWindow(false);
  }

  // function buttonclick() {
  //   navigate("/toggle");
  // }

  const handleContinueClick = () => {
    handleLogin();
    setOtpWindow(false);
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      handlePopup();
    } else {
      console.log("already logged in user .");
      navigate("/toggle");
    }
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [newhover, setNewHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="mt-24">
      {/* {showPopup && (
        <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-t-3xl sm:rounded-xl shadow-2xl w-full sm:w-[90%] sm:max-w-sm relative animate-in slide-in-from-bottom-4 sm:slide-in-from-top-4 duration-300 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 sm:hidden flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 z-10"
            >
              ×
            </button>

            <div className="p-6 pt-8">
              <div className="sm:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
                Verify your mobile number
              </h3>

              <span className="text-green-900 font-semibold text-sm block mb-2">
                Mobile Number
              </span>

              <div className="flex mb-4">
                <span className="px-3 py-3 text-sm flex items-center bg-orange-100 border border-r-0 border-gray-300 rounded-l-lg">
                  +91
                  <MdOutlineKeyboardArrowDown className="text-base ml-1" />
                </span>
                <input
                  type="tel"
                  placeholder="6260XXXX54"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm placeholder:text-green-900"
                />
              </div>

              <p className="text-center text-sm text-green-900 mb-6 font-medium">
                Fetch my shipping address based on past order!
              </p>

              <button
                onClick={clickwindow}
                className="w-full bg-green-900 hover:bg-green-800 text-white font-bold py-4 rounded-lg text-base transition-colors duration-200 mb-4"
              >
                SEND OTP
              </button>

              <p className="text-center text-xs text-green-900 leading-relaxed px-2">
                Entering the OTP, I Agree to the{" "}
                <span className="text-green-800 font-semibold underline cursor-pointer">
                  Terms of use & Privacy policy
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {otpWindow && (
        <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-t-3xl sm:rounded-xl shadow-2xl w-full sm:w-[90%] sm:max-w-sm relative animate-in slide-in-from-bottom-4 sm:slide-in-from-top-4 duration-300 max-h-[90vh] overflow-y-auto">
            <button
              onClick={cross}
              className="absolute top-4 right-4 w-8 h-8 sm:hidden flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 z-10"
            >
              ×
            </button>

            <div className="p-6 pt-8">
              <div className="sm:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
                OTP Verification
              </h3>

              <span className="text-green-900 font-sans font-semibold text-sm block mb-2">
                OTP
              </span>

              <input
                type="text"
                placeholder="******"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 text-sm bg-[#faeee1] placeholder:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <p className="text-end text-sm mb-6">
                Didn't receive OTP?{" "}
                <span className="text-gray-400 cursor-pointer hover:text-gray-600">
                  click here
                </span>{" "}
                <span className="text-green-700 font-semibold">00:23</span>
              </p>

              <button
                onClick={handleContinueClick}
                className="w-full bg-green-900 hover:bg-green-800 text-white font-bold py-4 rounded-lg text-base transition-colors duration-200"
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      )} */}

      <Blur />

      <div
        className={`${
          showPopup || otpWindow ? "blur-sm pointer-events-none " : ""
        } transition-all duration-300`}
      >
        <div className="bg-white w-full ">
          <div className="bg-[#0d3b1e] text-white py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          </div>

          <img
            src={leaf}
            alt="leaf"
            className="relative -top-28 -right-20 hidden xl:block"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 leading-snug">
                100% Trusted Organic Herba Essential
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Herba Essential guarantees the purest organic formulations, free
                from harmful chemicals and synthetic additives, ensuring
                complete trust and quality in every product.
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
                At Herba Essential, we pride ourselves on delivering truly
                organic products that you can trust. Our commitment to purity,
                safety, and authenticity ensures that every ingredient is
                derived from nature and processed with care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl bg-orange-100 text-green-700 rounded-full w-10 h-10 flex items-center justify-center">
                      <img src={feature.icon} className="w-6 h-7" />
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
                At Herba Essential, we ensure a seamless and satisfying
                experience from the moment you place your order to the time it
                reaches your hands.
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
                onClick={handleBuyNow}
                className="flex items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-200"
              >
                Shop Now
                <FaArrowRight />
              </button>

              {/* <button
                className="relative px-8 py-4 bg-green-800 text-white font-bold rounded-full overflow-hidden group"
                onClick={handleBuyNow}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setNewHover(true)}
                onMouseLeave={() => setNewHover(false)}
              >
                <span className="relative z-10 whitespace-nowrap">  Shop Now    <FaArrowRight /> </span>

                <span
                  className={`absolute bg-white/30 rounded-full pointer-events-none transform transition-all duration-500 ease-out ${
                    newhover ? "scale-100" : "scale-0"
                  }`}
                  style={{
                    width: "300px",
                    height: "300px",
                    top: coords.y,
                    left: coords.x,
                    transform: `translate(-50%, -50%) ${
                      newhover ? "scale(1)" : "scale(0)"
                    }`,
                  }}
                ></span>
              </button> */}

            </div>

            <div className="flex justify-center">
              <img src={grp} alt="grp" className="w-full max-w-md rounded-md" />
            </div>
          </div>
        </section>

        <div className="lg:w-11/12 w-full mx-auto">
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

          <div className="flex flex-row justify-start md:gap-x-5 gap-x-2 border-2 border-blue-300   sm:mt-4 mt-1 px-2 overflow-x-auto flex-nowrap">
            {arr.map((val, index) => (
              <div
                key={index}
                className={`rounded-sm  mx-auto min-w-[250px] sm:min-w-[300px] flex-shrink-0 ${
                  index === 0 && "shadow-2xl "
                }`}
              >
                <div className="relative flex flex-col justify-between ">
                  <img
                    className="rounded-t-3xl w-full h-auto "
                    src={val.img}
                    alt={val.name}
                  />

                  {index === 0 && (
                    <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 flex text-white gap-x-1 sm:gap-x-2 sm:text-xl text-[10px] ">
                      <div className="hover:bg-red-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                        <FaPinterestP />
                      </div>
                      <div className="hover:bg-green-400 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                        <FaTwitter />
                      </div>
                      <div className="hover:bg-pink-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                        <FaInstagram />
                      </div>
                      <div className="hover:bg-blue-600 rounded-full flex justify-center items-center sm:w-10 sm:h-10 w-5 h-5">
                        <TiSocialFacebook />
                      </div>
                    </div>
                  )}
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
              Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed
              pulvinar proin gravida hendrerit lectus
            </p>
          </div>

          <div className="block md:hidden ">
            <div className="flex justify-center items-center gap-4">
              <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between w-full max-w-sm">
                <img
                  src={vector}
                  alt="vertor"
                  className="text-green-600 w-8 h-7 mb-4"
                />

                <p className="text-gray-700 text-sm mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex justify-between ">
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
                    {Array.from({
                      length: testimonials[currentIndex].rating,
                    }).map((_, idx) => (
                      <span key={idx} className="text-orange-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src={lf2}
            alt="lf2"
            className="relative w-16 h-16 -right-[96%] hidden lg:block "
          />

          {/* <div className=" hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto border-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between"
              >
              <div className="flex flex-col"> 
                <img
                  src={vector}
                  alt="vertor"
                  className="text-green-600 w-8 h-7 mb-4"
                />

                <p className="text-gray-700 text-sm mb-6">
                  {testimonials[currentIndex].quote}
                  </p>
                
                <div className="flex justify-between ">
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full border-2 border-white shadow-md"
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
                    {Array.from({ length: testimonials[currentIndex].rating , }).map((_, idx) => (
                      <span key={idx} className="text-orange-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between w-full max-w-sm">
                  <img
                    src={vector}
                    alt="vector"
                    className="text-green-600 w-8 h-7 mb-4"
                  />

                  <p className="text-gray-700 text-sm mb-6">
                    {testimonial.quote}
                  </p>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      {Array.from({ length: testimonial.rating }).map(
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
            ))}
          </div>

          <img
            src={lf}
            alt="lf"
            className="relative w-20 h-20 -left-3 -top-2 hidden lg:block "
          />

          <div className="flex justify-center items-center mt-8 gap-2">
            <div>
              <button
                onClick={handlePrev}
                className="text-2xl px-1 py-1 bg-gray-100 rounded-full shadow"
                disabled={currentIndex === 0}
              >
                <IoIosArrowBack />
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
                className="text-2xl px-1 py-1 bg-gray-100 rounded-full shadow"
                disabled={currentIndex === testimonials.length - 1}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </section>

        <Frequently />
        <Herba />
      </div>
    </div>
  );
};

export default AboutUs;
