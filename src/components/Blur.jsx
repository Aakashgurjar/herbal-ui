import React, { useContext, useState } from "react";
import { PopupContext } from "../context/PopupContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Blur = () => {
  const {
    showPopup,
    otpWindow,
    closePopup,
    setOtpWindow,
    setShowPopup,
    handleLogin,
  } = useContext(PopupContext);


  // mobile number validation
  
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);

    if (value.length > 10) {
      setError("Mobile number should be 10 digits ");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    if (mobile.length !== 10) {
      setError("Mobile number must be 10 digits ");
    }
  };



  //   Otp validation
  const [otp, setOtp] = useState("");
  const [otperror, setOTPError] = useState("");

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setOtp(value);

    if (value.length > 6) {
        setOTPError("OTP should be exactly 6 digits");
    } else {
        setOTPError("");
    }
  };

  const handleOtpBlur = () => {
    if (otp.length !== 6) {
        setOTPError("OTP must be 6 digits ");
    }
  };







  const clickwindow = () => {
    setShowPopup(false);
    setOtpWindow(true);
  };

  function cross() {
    setOtpWindow(false);
  }

  const handleContinueClick = () => {
    handleLogin();
    setOtpWindow(false);
  };

  return (
    
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-t-3xl sm:rounded-xl shadow-2xl w-full sm:w-[90%] sm:max-w-sm relative animate-in slide-in-from-bottom-4 sm:slide-in-from-top-4 duration-300 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8  flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 z-10"
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

              <div className="flex flex-col justify-around mb-4">
                <div className="flex mb-1">
                  <span className="px-3 py-3 text-sm flex items-center bg-orange-100 border border-r-0 border-gray-300 rounded-l-lg">
                    +91
                    <MdOutlineKeyboardArrowDown className="text-base ml-1" />
                  </span>

                  <input
                    type="tel"
                    value={mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="6260XXXX54"
                    maxLength={10}
                    required
                    className={`flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm placeholder:text-green-900 ${
                      error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-green-500"
                    }`}
                  />
                </div>
                <div className="pt-0">
                  {" "}
                  {error && (
                    <p className="text-red-500 pt-0 text-[0.7rem]">⚠️{error}</p>
                  )}{" "}
                </div>
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
              className="absolute top-4 right-4 w-8 h-8  flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 z-10"
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

              {/* <input
                type="text"
                placeholder="******"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 text-sm bg-[#faeee1] placeholder:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              /> */}

              <div className="flex flex-col gap-2 w-full ">
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  onBlur={handleOtpBlur}
                  maxLength={6}
                  placeholder="******"
                  className={`w-full px-4 py-3 border rounded-lg text-sm bg-[#faeee1] placeholder:text-green-900 focus:outline-none focus:ring-1 ${
                    error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-green-300 focus:ring-green-500"
                  }`}
                />
                {otperror && <p className="text-red-500 text-xs">⚠️{otperror}</p>}
              </div>




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
      )}

    </div>
  );
};

export default Blur;
