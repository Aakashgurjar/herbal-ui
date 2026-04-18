import React, { useContext, useState } from "react";
import bgword from "../assets/bgword.png";
import lf from "../assets/lf.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Mininav from "../components/Mininav";
import lf2 from '../assets/lf2.png'

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PopupContext } from "../context/PopupContext";
import Blur from "../components/Blur";

const Contact = () => {
  // const [otpWindow, setOtpWindow] = useState(false);

  const { showPopup, setShowPopup, closePopup, handlePopup, handleLogin , otpWindow , setOtpWindow  } =
    useContext(PopupContext);

  const clickwindow = () => {
    setShowPopup(false);
    setOtpWindow(true);
  };

  function cross() {
    setOtpWindow(false);
  }

  function buttonclick() {
    navigate("/toggle");
  }

  const handleContinueClick = () => {
    handleLogin();
    setOtpWindow(false);
  };










  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  // Validation rules
  const validate = () => {
    let newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Only letters and single spaces are allowed.";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Please enter first and last name.";
    }

    // Phone Number
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if( formData.phone.length !== 10 ){
      newErrors.phone = "Mobile number must be 10 digits";
    } 



    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear specific error
  };

  // add here toast form submitted successfully !!!
  const handleSubmit = (e) => {
    e.preventDefault();
     console.log("submitted");
    if (validate()) {
      alert("Form submitted successfully ✅");
    }
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
        {/* 
        <div className="relative w-full h-[90svh] lg:h-svh  flex flex-row items-center justify-center overflow-x-hidden  ">
          <div
            className="absolute top-0 left-0 w-full h-[50%] bg-cover bg-center "
            style={{ backgroundImage: `url(${bgword})` }}
          ></div>

          <div className="absolute top-40 left-10 z-0  hidden md:block">
            <img src={lf} alt="Leaf" className="w-fit h-fit " />
          </div>

          <div className="absolute top-5 xl:w-[80rem] w-fit  text-black">
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">
                Get In Touch
              </h2>
            </div>

            <div className="flex  flex-col sm:flex-row justify-center  mb-8 gap-2 sm:gap-3 border-2 border-yellow-400 p-2 sm:p-3 rounded-lg">
              <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-9 lg:py-4 gap-x-3 sm:gap-x-4 lg:gap-x-5 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-800 text-base sm:text-lg md:text-xl">
                    <BsFillTelephoneFill />
                  </span>
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Contact
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    T: +(406)555-0120
                  </span>
                </div>
              </div>

              <div className="bg-white text-center flex flex-row border-2 rounded-md items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-9 lg:py-4 gap-x-3 sm:gap-x-4 lg:gap-x-5 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-800 text-base sm:text-lg md:text-xl">
                    <MdEmail />
                  </span>
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Email
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    example@email.com
                  </span>
                </div>
              </div>

              <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-9 lg:py-4 gap-x-3 sm:gap-x-4 lg:gap-x-5 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-800 text-base sm:text-lg md:text-xl">
                    <FaLocationDot />
                  </span>
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    New York, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute  mt-96 lg:mt-2 lg:top-52 border-4 sm:px-20  px-5 py-4 bg-white shadow rounded-lg lg:w-[70rem] md:w-[50rem] w-full mx-auto">
            <h3 className="lg:text-4xl text-2xl font-bold text-center  mb-4">
              Leave Us a Message
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Fill all information details to consult with us to get services
              from us
            </p>
            <form className="space-y-4 w-full">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="+91 9876543210"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Type your queries or suggestions here"
                className="w-full p-2 border rounded h-24"
              ></textarea>

              <div>
                <button
                  type="submit"
                  className="sm:w-[20%] text-center flex justify-center mx-auto bg-green-800 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> */}

        <div className="relative w-full h-auto min-h-[100svh] lg:min-h-[100vh] flex flex-col items-center justify-start overflow-x-hidden  pt-20 pb-10">
          <div
            className="absolute top-0 left-0 w-full h-[50%] bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${bgword})` }}
          ></div>

                      <img
                        src={lf2}
                        alt="lf2"
                        className="absolute right-20 w-16 h-16  hidden lg:block "
                      />

          <div className="absolute top-60 left-5 z-0 hidden xl:block">
            <img src={lf} alt="Leaf" className="w-fit h-fit" />
          </div>

        
          <div className="w-full max-w-[80rem] text-black px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Get In Touch
            </h2>

                  

            <div className="flex flex-col sm:flex-row justify-center mb-10 gap-4   p-4 sm:p-5 rounded-lg  ">
              <div className="bg-white text-center flex flex-row rounded-md border items-center px-4 py-3 flex-1 gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-800 text-lg sm:text-xl">
                    <BsFillTelephoneFill />
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Contact
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    T: +(406)555-0120
                  </span>
                </div>
              </div>

              <div className="bg-white text-center flex flex-row rounded-md border items-center px-4 py-3 flex-1 gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-800 text-lg sm:text-xl">
                    <MdEmail />
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Email
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    example@email.com
                  </span>
                </div>
              </div>

              <div className="bg-white text-center flex flex-row rounded-md border items-center px-4 py-3 flex-1 gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-green-800 text-lg sm:text-xl">
                    <FaLocationDot />
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base md:text-lg font-medium block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base text-gray-700 block">
                    New York, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[70rem] px-4 py-8 bg-white  shadow rounded-lg">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
              Leave Us a Message
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Fill all information details to consult with us to get services
              from us
            </p>


            {/* <form className="space-y-4 w-full">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  required
                  className="w-full sm:w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="+91 9876543210"
                  required
                  className="w-full sm:w-1/2 p-2 border rounded"
                />
              </div>
              <input
                type="email"
                placeholder="name@example.com"
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Type your queries or suggestions here"
                className="w-full p-2 border rounded h-24"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full sm:w-[200px] bg-green-800 text-white px-4 py-2 rounded mx-auto"
                >
                  Submit
                </button>
              </div>
            </form> */}





    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
         <h1 className="pb-1"> Full Name </h1>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.fullName ? "border-red-500" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>

        <div className="w-full flex  flex-col sm:w-1/2">
        <h1 className="pb-1"> Mobile Number </h1>

        <div className="flex"> 
        <span className="px-3 flex items-center bg-orange-100 border border-r-0 rounded-l">
            +91
          </span>
          <input
            type="text"
            name="phone"
            placeholder="9856XXXX10"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            className={`w-full p-2 border rounded ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
           </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
      <h1 className="pb-1"> Email </h1>

        <input
          type="email"
          name="email"
          placeholder="abc@example.com"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
      <h1 className="pb-1"> Message </h1>

        <textarea
          name="message"
          placeholder="Type your queries or suggestions here"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-2 border rounded h-24 ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full sm:w-[200px] bg-green-800 text-white px-4 py-2 rounded mx-auto"
        >
          Submit
        </button>
      </div>
    </form>









          </div>
        </div>

        <div className="w-full sm:w-[52rem] md:w-[50rem] lg:w-[70rem] mx-auto p-4 mb-10  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.031291189895!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8e9ddefb3d%3A0x29f9f4783e7b78e7!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1668167675249!5m2!1sen!2sin"
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
            style={{ border: "1px solid black" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>


    </div>
  );
};

export default Contact;

{
  /* <div className=" flex flex-col sm:flex-row justify-around mb-3 gap-1 border-2 border-yellow-400">

          <div className="bg-white text-center  flex flex-row rounded-md border-2 items-center lg:px-9 lg:gap-x-5 lg:py-2 ">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-800 text-md sm:text-xl">
              <BsFillTelephoneFill /> </span>
            </div>
            <div className="text-start ">
              <div>
                <span className="text-[0.7rem] sm:text-[1rem]">Contact</span>
              </div>
              <div>
                <span className="text-[0.7rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+(406)555-0120</span>
              </div>
            </div>
          </div>

          <div className="bg-white  text-center flex flex-row border-2 rounded-md  items-center lg:px-9 lg:gap-x-5 lg:py-2">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto ">
              <span className="text-green-800 text-md sm:text-xl">
              <MdEmail /></span>
            </div>
            <div className="text-start my-2 ">
              <div>
                <span className="text-[0.7rem] sm:text-[1rem]">Email</span>
              </div>
              <div>
                <span className="text-[0.7rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+(406)555-0120</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-center flex flex-row rounded-md border-2 items-center lg:px-9 lg:gap-x-5 lg:py-2">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-800 text-md sm:text-xl">  <FaLocationDot /></span>
            </div>
            <div className="text-start ">
              <div>
                <span className="text-[0.7rem] sm:text-[1rem]">Location</span>
              </div>
              <div>
                <span className="text-[0.7rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+91 0000000000</span>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* <div className="flex flex-col sm:flex-row justify-around mb-3 gap-2 border-2 border-yellow-400 p-2">

  <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-3 py-3 sm:px-6 sm:py-2 lg:px-9 lg:gap-x-5 lg:py-2 gap-x-3">
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
      <span className="text-green-800 text-lg sm:text-xl">
        <BsFillTelephoneFill />
      </span>
    </div>
    <div className="text-start">
      <div>
        <span className="text-sm sm:text-[1rem] font-medium">Contact</span>
      </div>
      <div>
        <span className="text-sm sm:text-[1rem] sm:whitespace-normal whitespace-nowrap text-gray-700">
          T:+(406)555-0120
        </span>
      </div>
    </div>
  </div>

  <div className="bg-white text-center flex flex-row border-2 rounded-md items-center px-3 py-3 sm:px-6 sm:py-2 lg:px-9 lg:gap-x-5 lg:py-2 gap-x-3">
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
      <span className="text-green-800 text-lg sm:text-xl">
        <MdEmail />
      </span>
    </div>
    <div className="text-start">
      <div>
        <span className="text-sm sm:text-[1rem] font-medium">Email</span>
      </div>
      <div>
        <span className="text-sm sm:text-[1rem] sm:whitespace-normal whitespace-nowrap text-gray-700">
          example@email.com
        </span>
      </div>
    </div>
  </div>

  <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-3 py-3 sm:px-6 sm:py-2 lg:px-9 lg:gap-x-5 lg:py-2 gap-x-3">
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center">
      <span className="text-green-800 text-lg sm:text-xl">
        <FaLocationDot />
      </span>
    </div>
    <div className="text-start">
      <div>
        <span className="text-sm sm:text-[1rem] font-medium">Location</span>
      </div>
      <div>
        <span className="text-sm sm:text-[1rem] sm:whitespace-normal whitespace-nowrap text-gray-700">
          New York, USA
        </span>
      </div>
    </div>
  </div>
</div> */
}

{
  /* <div className="flex flex-col sm:flex-row justify-around mb-3 gap-1 sm:gap-3 border-2 border-yellow-400 p-1 sm:p-3">
 
  <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-2 py-2 xs:px-3 xs:py-3 sm:px-6 sm:py-4 lg:px-9 lg:gap-x-5 lg:py-4 gap-x-2 xs:gap-x-3 sm:gap-x-4 min-w-16 flex-1">
    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-green-800 text-sm xs:text-base sm:text-lg md:text-xl">
        <BsFillTelephoneFill />
      </span>
    </div>
    <div className="text-start min-w-0 flex-1">
      <div>
        <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium block">Contact</span>
      </div>
      <div>
        <span className="text-xs xs:text-sm sm:text-base text-gray-700 block truncate sm:whitespace-normal">
          T:+(406)555-0120
        </span>
      </div>
    </div>
  </div>

  <div className="bg-white text-center flex flex-row border-2 rounded-md items-center px-2 py-2 xs:px-3 xs:py-3 sm:px-6 sm:py-4 lg:px-9 lg:gap-x-5 lg:py-4 gap-x-2 xs:gap-x-3 sm:gap-x-4 min-w-0 flex-1">
    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-green-800 text-sm xs:text-base sm:text-lg md:text-xl">
        <MdEmail />
      </span>
    </div>
    <div className="text-start min-w-0 flex-1">
      <div>
        <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium block">Email</span>
      </div>
      <div>
        <span className="text-xs xs:text-sm sm:text-base text-gray-700 block truncate sm:whitespace-normal">
          example@email.com
        </span>
      </div>
    </div>
  </div>

  <div className="bg-white text-center flex flex-row rounded-md border-2 items-center px-2 py-2 xs:px-3 xs:py-3 sm:px-6 sm:py-4 lg:px-9 lg:gap-x-5 lg:py-4 gap-x-2 xs:gap-x-3 sm:gap-x-4 min-w-0 flex-1">
    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-green-800 text-sm xs:text-base sm:text-lg md:text-xl">
        <FaLocationDot />
      </span>
    </div>
    <div className="text-start min-w-0 flex-1">
      <div>
        <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium block">Location</span>
      </div>
      <div>
        <span className="text-xs xs:text-sm sm:text-base text-gray-700 block truncate sm:whitespace-normal">
          New York, USA
        </span>
      </div>
    </div>
  </div>
</div> */
}
