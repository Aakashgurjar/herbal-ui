import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from "react";
import img from "../assets/main.png";
import { GiWideArrowDunk } from "react-icons/gi";
import "../pages/Home.css";

import shdw from "../assets/shadow.png";
import lef from "../assets/leafsm.png";
import leaf from "../assets/leaf.png";
import vector from "../assets/Vector.png";
import { FaStar } from "react-icons/fa";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import after from "../assets/after.png";
import before from "../assets/before.png";

import lf from "../assets/lf.png";
import lf2 from "../assets/lf2.png";

import grp from "../assets/grp.png";
import { motion } from "framer-motion";

import drop from "../assets/dropped.png";
import HerbaEssential from "../components/HerbaEssential";
import HowToUseSection from "../components/HowToUseSection";
import ProductEffect from "../components/ProductEffect";
import Frequently from "../components/Frequently";
import Herba from "../components/Herba";

// import img6 from "../assets/img6.png";
// import img7 from "../assets/img7.png";
// import img8 from "../assets/img8.png";

import img6 from "../assets/Img6.png";
import img7 from "../assets/Img7.png";
import img8 from "../assets/Img8.png";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PopupContext } from "../context/PopupContext";

import { useNavigate } from "react-router-dom";
import Blur from "../components/Blur";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Lenis from 'lenis'


const Home = () => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [otpWindow, setOtpWindow] = useState(false);

  const {
    isLoggedIn,
    showPopup,
    setShowPopup,
    closePopup,
    handlePopup,
    handleLogin,
    otpWindow,
    setOtpWindow,
  } = useContext(PopupContext);

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
    {
      name: "Robert Fox",
      role: "Customer",
      image: img8,
      rating: 5,
      quote:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    // {
    //   name: "Dianne Russell",
    //   role: "Customer",
    //   image: img7,
    //   rating: 5,
    //   quote:
    //     "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    // },
    // {
    //   name: "Eleanor Pena",
    //   role: "Customer",
    //   image: img6,
    //   rating: 5,
    //   quote:
    //     "Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    // },
  ];

  const clickwindow = () => {
    setShowPopup(false);
    setOtpWindow(true);
  };

  function cross() {
    setOtpWindow(false);
  }

  function buttonclick() {
    console.log("prss");
    navigate("/toggle");
  }

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

  // write review logic
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ rating, feedback });
    setSubmitted({ rating, feedback });

    setIsOpen(false);
    setRating(0);
    setFeedback("");
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [newhover, setNewHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };




  
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.05,     // smoothness (0.05 = very smooth)
  //     smooth: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  // }, []);




  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const lenis = new Lenis({
  //     lerp: 0.08,
  //     smooth: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     ScrollTrigger.update(); // 🔥 sync with GSAP
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  // }, []);




  return (
    <div  className=" relative mt-24">
      {/* <button
      className="relative px-8 py-4 bg-orange-500 text-white font-bold rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setNewHover(true)}
      onMouseLeave={() => setNewHover(false)}
    >
      <span className="relative z-10">Purchase Now</span>

      <span
        className={`absolute bg-white/30 rounded-full pointer-events-none transform transition-all duration-500 ease-out ${
          newhover ? "scale-100" : "scale-0"
        }`}
        style={{
          width: "300px",
          height: "300px",
          top: coords.y,
          left: coords.x,
          transform: `translate(-50%, -50%) ${newhover ? "scale(1)" : "scale(0)"}`,
        }}
      ></span>
      </button> */}

      {/* Login  */}

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
                  required
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
        <div className="w-full bg-[#0f2c14] text-white font-sans  ">
          {/* cube section */}
          <section className="relative  ">
            <div className="cube-bg ">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="cube"></span>
              ))}
               
            </div>

            <div className="  flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8  ">
              <div className="max-w-xl">
                <img src={leaf} alt="leaf" className="relative -top-24 " />

                <h1 className="hero-text text-4xl md:text-5xl font-bold leading-tight ">
                  Nourish Your Roots,
                  <br />
                  <span className="text-[#C8C45B]">Transform Your Hair</span>
                </h1>

                <p className="subtitle-text italic text-lg mt-4 text-gray-300 ">
                  100% Organic Hair Nutrition for Healthier, Thicker, Younger
                  Hair
                </p>
                <p className="subtitle-text  mt-4 text-sm md:text-base text-gray-400 ">
                  Restore your hair’s natural strength and shine with Herba
                  Essential – your daily boost of Ayurvedic goodness in a single
                  sachet.
                </p>

                {/* <img src="https://demo.awaikenthemes.com/sellsmart/cosmetic/wp-content/uploads/2025/05/premium-product-arrow.svg"
              className="text-green-600 text-[3rem] bounce-right rotate[90deg]"/> */}

                <div className="subtitle-text ">
                  <img
                    src="https://demo.awaikenthemes.com/sellsmart/cosmetic/wp-content/uploads/2025/05/premium-product-arrow.svg"
                    className=" w-20 h-20 bounce-right relative right-20   "
                  />
                </div>

                {/* old button  */}
                <button
                  onClick={handleBuyNow}
                  className="subtitle-text mt-6 px-6 py-2   font-semibold rounded-full shadow bg-[#C8C45B] relative -top-20 -right-2"
                >
                  Buy Now
                </button>
                {/* new button  */}

                {/* <button
                  className="relative px-8 py-4 bg-[#C8C45B] text-white font-bold rounded-full overflow-hidden group"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setNewHover(true)}
                  onMouseLeave={() => setNewHover(false)}
                >
                  <span className="relative z-10">Buy Now</span>

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

                <style>
                  {`

                @keyframes bounceRight {
                0%, 100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(20px);
                }
              }
              .bounce-right {
                animation: bounceRight  1s infinite;
              }


            @keyframes slideUpFade {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideUpStagger {
            0% {
                opacity: 0;
                transform: translateY(30px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

            
            .hero-text {
            opacity: 0;
            transform: translateY(60px);
            animation: slideUpFade 1.5s ease-out 0.3s forwards;
                }

             .subtitle-text {
            opacity: 0;
            transform: translateY(40px);
            animation: slideUpFade 1s ease-out 0.8s forwards;
              }

              
              `}
                </style>

                <div className="block sm:hidden fixed bottom-0 inset-x-2  rounded bg-orange-400 flex justify-between items-center px-4 py-3 text-white text-sm z-50">
                  <span className="font-semibold">
                    Total MRP: <span className="line-through">₹799</span> ₹599
                  </span>
                  <button
                    onClick={handleBuyNow}
                    className="bg-orange-400 hover:bg-orange-600 text-white border-2 font-semibold px-4 py-2 rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="relative   lg:max-w-lg max-h-full lg:h-full ">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={shdw}
                    alt="Shadow"
                    className="absolute inset-0 w-full h-[100vh] -top-56 left-12 z-0 "
                  />

                  <img
                    src={drop}
                    alt="drop"
                    className=" absolute w-2/3  top-1 lg:top-5 left-5 lg:-left-24 z-0 "
                  />

                  <img
                    src={img}
                    alt="Herba Product"
                    className="relative max-w-sm lg:max-w-lg h-5/6 -left-1 lg:-left-40 "
                  />
                </motion.div>
              </div>
            </div>

            <img
              src={leaf}
              alt="leaf"
              className="rotate-90 relative -right-[47rem] w-12 h-12"
            />
          </section>
          {/* 
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
          </> */}

          <div className="w-full bg-[#C8C45B] overflow-hidden">
            <div className="marquee py-2">
              <div className="marquee__group inline-block">
                <span>
                  Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair,
                  Every Day Shine with Confidence Nourish. Strengthen. Grow.
                  &nbsp;&nbsp;&nbsp;
                </span>
                <span className="inline-block">
                  Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair,
                  Every Day Shine with Confidence Nourish. Strengthen. Grow.
                  &nbsp;&nbsp;&nbsp;
                </span>
              </div>

              <div className="marquee__group ">
                <span>
                  Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair,
                  Every Day Shine with Confidence Nourish. Strengthen. Grow.
                  &nbsp;&nbsp;&nbsp;
                </span>
                <span>
                  Thick, Strong, Beautiful Your Hair’s Best Ally Healthy Hair,
                  Every Day Shine with Confidence Nourish. Strengthen. Grow.
                  &nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>

          <style>
            {`
            .marquee {
              display: flex;
              overflow: hidden;
              white-space: nowrap;
            }

            .marquee__group {
              display: flex;
              animation: scroll 20s linear infinite;
            }

            .marquee__group span {
              font-weight: 600;
              font-size: 1rem;
              color: black;
            }

            @keyframes scroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-100%); }
            }
            `}
          </style>
        </div>

        <HerbaEssential />
        <ProductEffect />

        <div className="py-10 px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              What is Herba Essential?
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto">
              A premium 100% organic dietary supplement designed to restore hair
              health from the inside out.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src={grp}
                alt="Herba Essential"
                className="w-60 md:w-72 h-[250px] object-contain"
              />
            </div>

            <div class="order-2 md:order-1 bg-yellow-50 rounded-xl shadow-sm p-6 flex-1 h-full mx-auto w-full max-w-lg md:max-w-none">
              <h2 class="text-xl font-semibold mb-4 text-gray-800">
                Why Choose Herba Essential?
              </h2>
              <ul class="space-y-2 text-gray-700 md:text-sm">
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>Promotes thick, healthy hair</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>Helps control hair fall</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>Supports gut health – a key to hair growth</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>May reverse premature greying</span>
                </li>
              </ul>
            </div>

            <div class="order-3 md:order-3 bg-yellow-50 rounded-xl shadow-sm p-6 flex-1 h-full mx-auto w-full max-w-lg md:max-w-none">
              <h2 class="text-xl font-semibold mb-4 text-gray-800">
                Key Features:
              </h2>
              <ul class="space-y-2 text-gray-700 md:text-sm">
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>100% Organic Ingredients</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>No Artificial Additives</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>Suitable for All Genders</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500 font-semibold shrink-0 mt-0.5">
                    ✅
                  </span>
                  <span>Holistic Hair & Wellness Formula</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <HowToUseSection />

        <div className="w-full flex flex-row md:flex-row justify-center items-center gap-6 xl:gap-20 p-6 bg-white">
          <div className="flex flex-col items-center  border-2">
            <img
              src={before}
              alt="Before"
              className="w-[400px] h-auto rounded shadow-md"
            />
          </div>

          <div className="flex flex-col items-center">
            <img
              src={after}
              alt="After"
              className="w-[400px] h-auto rounded shadow-md"
            />
          </div>
        </div>

        <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-12 relative overflow-hidden">
          <div className=" mb-10 flex flex-col justify-between items-center  sm:flex-row ">
            <div className="text-center md:mb-10  sm:p-10 w-[90%]  ">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                What Our Clients Say{" "}
                <span className="text-orange-500">About Us</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed
                pulvinar proin gravida hendrerit lectus
              </p>
            </div>

            <section className="py-3 px-2  sm:py-10 sm:px-4 text-end p-2 sm:p-5  ">
              <div className="text-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex items-center text-[0.8rem] whitespace-nowrap rounded-full bg-green-900 text-white px-3 py-2 hover:bg-green-800"
                >
                  ✍️ Write Review
                </button>
              </div>

              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                    <h2 className="text-xl font-semibold text-center mb-2">
                      Feedback
                    </h2>
                    <p className="text-gray-600 text-center mb-4">
                      Please rate your experience below
                    </p>

                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                          <label key={index}>
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                              className="hidden"
                            />
                            <FaStar
                              size={30}
                              className="cursor-pointer transition-colors"
                              color={
                                ratingValue <= (hover || rating)
                                  ? "#fbbf24"
                                  : "#e4e5e9"
                              }
                              onMouseEnter={() => setHover(ratingValue)}
                              // onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}
                    </div>

                    <form onSubmit={handleSubmit}>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Write review
                      </label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full border rounded-md p-2 mb-4"
                        placeholder="My feedback!!"
                        rows={4}
                        required
                      />

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="flex-1 bg-gray-200 rounded-md py-2 hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-green-900 text-white rounded-md py-2 hover:bg-green-800"
                        >
                          Submit Feedback
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </section>
          </div>

          <div className="block md:hidden">
            <div className="flex justify-center items-center  ">
              <div className="bg-[#FBF7E9] rounded-xl shadow-xl p-6 flex flex-col justify-between w-[100vw] max-w-sm border-2 ">
                <img
                  src={vector}
                  alt="vertor"
                  className="text-green-600 w-8 h-7 mb-4"
                />

                <p className="text-gray-700 text-sm mb-6">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex justify-between ">
                  <div className="flex  items-center gap-4 mt-auto">
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
                    {Array.from({ length: submitted.rating }).map((_, idx) => (
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
            className="relative w-16 h-16 -right-[96%] top-5 hidden lg:block "
          />

          <div className="hidden md:grid md:grid-cols-3 gap-6 ">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="flex justify-center items-center ">
                <div className="relative bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between w-full max-w-sm overflow-hidden z-0 group">
                  <div className="absolute inset-0  bg-[#FBF7E9] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out"></div>

                  <img
                    src={vector}
                    alt="vector"
                    className="relative z-10 text-green-600 w-8 h-7 mb-4"
                  />

                  <p className="relative z-10 text-gray-700 text-sm mb-6">
                    {testimonial.quote}
                  </p>

                  <div className="relative z-10 flex justify-between">
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
                      {Array.from({ length: submitted.rating }).map(
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
            className="relative w-16 h-16 hidden lg:block "
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

export default Home;

// import React, { useState } from "react";

// const HomePage = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handlePopup = () => setShowPopup(true);
//   const closePopup = () => setShowPopup(false);

//   return (
//     <div className="relative">

//       <div className={`${showPopup ? "blur-sm pointer-events-none" : ""}`}>

//         <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
//           <h1 className="text-xl font-bold">
//             <span className="text-green-800">Herba</span>{" "}
//             <span className="text-orange-600">Essential</span>
//           </h1>
//           <button
//             onClick={handlePopup}
//             className="text-green-600 border border-green-600 px-4 py-1 rounded-3xl text-sm hover:bg-green-50"
//           >
//             Login / Register
//           </button>
//         </div>

//         <div className="p-8">
//           <h2 className="text-3xl font-semibold mb-4">
//             Nourish Your Roots, Transform Your Hair
//           </h2>
//           <p className="mb-6 max-w-xl">
//             100% Organic Hair Nutrition for Healthier, Thicker, Younger Hair
//           </p>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm relative">
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Verify your mobile number
//             </h3>
//             <input
//               type="text"
//               placeholder="Enter your number"
//               className="w-full px-3 py-2 border rounded mb-4 text-sm"
//             />
//             <button
//               onClick={closePopup}
//               className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm"
//             >
//               Send OTP
//             </button>

//             <button
//               onClick={closePopup}
//               className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default HomePage;
