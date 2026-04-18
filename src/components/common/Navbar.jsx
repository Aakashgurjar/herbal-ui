import React, { useState, useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { User, LogIn } from "lucide-react";
import Mininav from "../Mininav";
import Home from "../../pages/Home";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { PopupContext } from "../../context/PopupContext";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const {
    user,
    handleLogout,
    handlePopup,
    isLoggedIn,
    setShowProfileDropdown,
    showProfileDropdown,
    handleLogin,
  } = useContext(PopupContext);

  const [showPopup, setShowPopup] = useState(false);

  // const handlePopup = () => {
  //   setShowPopup(true);
  // }

  const closePopup = () => {
    setShowPopup(false);
  };

  // const handlePopup = () =>  setShowPopup(true);
  // const closePopup = () => setShowPopup(!showPopup)

  const navigate = useNavigate();

  function profileclick() {
    navigate("/otp");
    setShowProfileDropdown();
  }

  function click() {
    navigate("/signup");
  }

  // const { showPopup, setShowPopup, closePopup, handlePopup , handleLogin} =  useContext(PopupContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   setUser({  });
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  // };

  // const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleContinuelogout = () => {
    handleLogout();
    navigate("/");
  };

  function homepage() {
    navigate("/");
    setIsOpen(false);
  }

  function aboutuspage() {
    navigate("/aboutus");
    setIsOpen(false);
  }

  function contactpage() {
    navigate("/contact");
    setIsOpen(false);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 w-full z-10  ">
        <Mininav />

        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16 mr-5 items-center">
            <div className="  sm:hidden">
              <div className="flex items-center justify-between p-1  ">
                <button
                  onClick={toggleSidebar}
                  className="text-xl p-1 rounded-md hover:bg-gray-200 transition"
                >
                  <FaBars />
                </button>
              </div>

              {isOpen && (
                <div
                  onClick={toggleSidebar}
                  className="fixed inset-0 bg-black bg-opacity-40 z-40"
                >  </div>
              )}

              <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button onClick={toggleSidebar} className="text-2xl">
                    <IoClose />
                  </button>
                </div>

                <nav className="p-4 space-y-4">
                  <button
                    onClick={homepage}
                    className="block py-2 text-gray-700 hover:text-green-600"
                  >
                    Home
                  </button>

                  <button
                    onClick={aboutuspage}
                    className="block py-2 text-gray-700 hover:text-green-600"
                  >
                    About
                  </button>
                  <button
                    onClick={contactpage}
                    className="block py-2 text-gray-700 hover:text-green-600"
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </div>

            <div className="text-xl font-bold text-green-700">
              <button onClick={homepage}>
                HERBA <span className="text-orange-400"> ESSENTIAL</span>{" "}
              </button>
            </div>

            <div className="hidden sm:flex space-x-5  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-md font-medium transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-green-600"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `rounded-md font-medium transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-green-600"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-md font-medium transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-green-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex justify-center">
              {!isLoggedIn ? (
                <button
                  // onClick={handleLogin}
                  onClick={handlePopup}
                  className="flex items-center gap-2 text-green-500 px-3 py-1 rounded-lg  border-2 font-semibold transition-colors duration-200 "
                >
                  <FaRegUser className="text-[0.8rem] text-green-500" />
                  Login
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="flex items-center gap-2   px-3 py-3 rounded-full font-medium transition-colors duration-200 border-2"
                  >
                    <FaRegUser className="text-[1rem] text-green-500" />
                  </button>

                  {showProfileDropdown && (
                    <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-48 z-10">
                      <div className="border-b border-gray-200 pb-3 mb-3">
                        <button
                          onClick={profileclick}
                          className="text-green-500 px-2 py-1"
                        >
                          Profile
                        </button>
                      </div>
                      <button
                        onClick={handleContinuelogout}
                        className="w-full text-left px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors duration-150"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* <div className="relative">

      <div className="hidden sm:flex text-green-500 border-2 border-green-500 rounded-3xl px-3 py-1 items-center gap-2">
        <FaRegUser onClick={profileclick}
        className="text-[0.9rem] cursor-pointer"  />

        <button 
        onClick={handlePopup}
        >Login /</button>
      </div>

      <div className="sm:hidden flex items-center text-green-500">
        <button
          onClick={() => setOpen(!open)}
          className="border-2 border-green-500 p-2 rounded-full"
        >
          <FaRegUser className="text-[1rem]"  />
        </button>

        {open && (
          <div className="absolute top-12 right-0 bg-white border rounded shadow-md px-4 py-2 z-50">
            <button
            onClick={handlePopup}
             className="block w-full text-left text-sm py-1">
              Login
            </button>
            <button onClick={profileclick}
             className="block w-full text-left text-sm py-1">
              Profile 
            </button>
            <button onClick={click} className="block w-full text-left text-sm py-1">
              Signup
            </button>
          </div>
        )}
      </div>
    </div> */}
          </div>
        </div>

        {/* {isOpen && (
          <div className="sm:hidden px-4 pb-4 ">

            <button onClick={homepage}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Home
            </button>

            <button onClick={aboutuspage}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              About
            </button>
            <button onClick={contactpage}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Contact
            </button>
          </div>
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* 
       <div className=" bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 rounded-md hover:bg-gray-200 transition"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleSidebar} className="text-2xl">
            <IoClose />
          </button>
        </div>

        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-green-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-green-500">
            About
          </a>
         
          <a href="#" className="block text-gray-700 hover:text-green-500">
            Contact
          </a>
        </nav>
      </div>

      
      </div>  */
}
