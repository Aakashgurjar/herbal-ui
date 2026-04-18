import React, { useState, useContext, useRef } from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import single from "../assets/single.png";

import rec1 from "../assets/Rec4.png";
import rec2 from "../assets/Rec5.png";
import rec3 from "../assets/Rec6.png";
import rec4 from "../assets/Rec7.png";
import rec5 from "../assets/Rect8.png";
import { useAsyncError, useNavigate } from "react-router-dom";
import { PopupContext } from "../context/PopupContext";

const HerbaEssential = () => {
  const [imgg, setImgg] = useState(single);
  const [isZoomed, setZoomed] = useState(false);

  const [selectedImage, setSelectedImage] = useState(0);
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

  const navigate = useNavigate();

  const productImages = [
    {
      id: 0,
      type: "front",
      bgColor: "bg-green-800",
      image: rec2,
    },
    {
      id: 1,
      type: "back",
      bgColor: "bg-green-700",
      image: rec1,
    },
    {
      id: 2,
      type: "side1",
      bgColor: "bg-green-600",
      image: rec4,
    },
    {
      id: 3,
      type: "logo1",
      bgColor: "bg-green-900",
      image: rec3,
    },
    {
      id: 4,
      type: "logo2",
      bgColor: "bg-green-800",
      image: rec5,
    },
  ];

  const handleBuyNow = () => {
    // if user not logged In
    if (!isLoggedIn) {
      handlePopup();
    } else {
      // if user Loggend In
      console.log("already logged in user .");
      navigate("/toggle");
    }
  };





  const [direction, setDirection] = useState("from-left");

  const handleMouseEnter = (e) => {
    const { left, right, top, bottom } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    const fromLeft = Math.abs(x - left);
    const fromRight = Math.abs(right - x);
    const fromTop = Math.abs(y - top);
    const fromBottom = Math.abs(bottom - y);

    const min = Math.min(fromLeft, fromRight, fromTop, fromBottom);

    if (min === fromLeft) setDirection("from-left");
    else if (min === fromRight) setDirection("from-right");
    else if (min === fromTop) setDirection("from-top");
    else setDirection("from-bottom");
  };


  const [Hover , setHover] = useState();



  return (
    <div className="min-h-[90vh] bg-gray-50 py-7 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4">
            <div className="flex sm:flex-col  sm:gap-y-5 gap-3 order-2 sm:order-1  mx-auto  ">
              {productImages.map((title, index) => (
                <img
                  src={title.image}
                  alt={`img${title.id}`}
                  onClick={() => {
                    setImgg(title.image), setZoomed((prev) => !prev);
                  }}
                  className={` w-[2.8rem] h-[3.5rem] sm:w-fit sm:h-fit gap-x-1 sm:gap-x-3 cursor-pointer  `}
                />
              ))}
            </div>

            <div className=" flex-1 order-1 sm:order-2 ">
              <img
                src={imgg}
                alt="single"
                className={`border-2 border-red-300 mx-auto  ${
                  isZoomed
                    ? "w-[60%] h-[100%] sm:w-[50%] sm:h-[70%] md:w-[55%] md:h-[90%] lg:w-[70%] lg:h-[80%] lg:mt-10 sm:mt-9"
                    : "w-[60%] h-[100%] sm:w-[50%] sm:h-[70%] md:w-[55%] md:h-[90%] lg:w-[70%] lg:h-[80%] lg:mt-10 sm:mt-9"
                } `}
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-green-600"></div>
              <span className="text-green-800 font-bold text-xl animate-bounce">
                BEST SELLER
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                <span className="text-orange-400">Herba Essential</span>
                <span className="text-gray-800 font-semibold">
                  {" "}
                  - Hair Nutrition | 250g | Take 1 sachet daily after meals
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover our most trusted hair nutrition supplement – crafted
                with powerful herbs to promote thick, healthy, and youthful
                hair. Thousands rely on Herba Essential for visible results,
                naturally.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-medium">
                  Supports Stronger, Thicker Hair Growth
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-medium">
                  Helps Control Hairfall & Reverse Premature Greying
                </span>
              </div>
            </div>

            <div className=" flex-col  sm:flex-row items-start sm:items-center gap-6 pt-6 hidden sm:flex">
              {/* <button onClick={handleBuyNow} className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 
              rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg ">
                Buy Now
                <FaArrowRight className="text-sm" />

              </button> */}



              {/* <button
                onClick={handleBuyNow}
                className="  ease-in-out  bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 
              rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg "
              >
                Buy Now
                <FaArrowRight className="text-sm" />
              </button> */}



              <button
                onMouseEnter={handleMouseEnter}
                onClick={handleBuyNow} 
                className="relative px-8 py-4 rounded-lg font-bold text-white text-lg shadow-lg flex items-center gap-2 overflow-hidden group bg-orange-400"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Buy Now
                  <FaArrowRight className="text-sm" />
                </span>

                <span
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-500 ease-in-out
          ${
            direction === "from-left"
              ? "-translate-x-full group-hover:translate-x-0 "
              : ""
          }
          ${
            direction === "from-right"
              ? "translate-x-full group-hover:translate-x-0 "
              : ""
          }
          ${
            direction === "from-top"
              ? "-translate-y-full group-hover:translate-y-0 "
              : ""
          }
          ${
            direction === "from-bottom"
              ? "translate-y-full group-hover:translate-y-0 "
              : ""
          }
        `}
                />
              </button>





              <div className="text-right">
                <div className="text-4xl font-bold text-gray-800">₹599</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbaEssential;
