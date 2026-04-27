import React from 'react'

import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Footer = () => {


  return (

   <footer className="bg-[#002209] text-white">

      <div className="px-4 py-8 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="sm:hidden">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                Herba <span className="text-orange-500">Essential</span>
              </h2>
              <div className="w-full h-px  bg-white mt-3"> </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-semibold mb-3 text-base">HELP</h3>
                <ul className="text-sm space-y-2">
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Return Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-base">COMPANY</h3>
                <ul className="text-sm space-y-2">
                  <li>About Us</li>
                  <li>Our Blog</li>
                  <li>Contact us</li>
                  <li className='mt-1 underline'> <NavLink to="/otp"  >Setting</NavLink> </li>

                </ul>
              </div>
            </div>

            <div className="w-full h-px  bg-white mb-6"></div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-base">Our Address</h3>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-[#002209] flex-shrink-0 mt-1">
                  <MdLocationOn className="text-lg" />
                </div>
                <div className="text-sm">
                  <p>4319 Wakefield Street,</p>
                  <p>Philadelphia, PA 19126</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-base">Customer Help</h3>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-[#002209] flex-shrink-0 mt-1">
                  <IoCall className="text-lg" />
                </div>
                <div className="text-sm">
                  <p>(256) 289-9707</p>
                  <p>(301) 580-7410</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="grid grid-cols-4 gap-8 lg:gap-16">

              <div className="col-span-1">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Herba <span className="text-orange-500">Essential</span>
                </h2>
                {/* <div className="w-full h-px bg-white mt-4"></div> */}
              </div>

              <div className="col-span-1">
                <h3 className="font-semibold mb-4 text-lg">HELP</h3>
                <ul className="text-sm space-y-3">
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Return Policy</li>
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="font-semibold mb-4 text-lg">COMPANY</h3>
                <ul className="text-sm space-y-3">
                  <li>About Us</li>
                  <li>Our Blog</li>
                  <li>Contact us</li>
                  <li className='mt-1 underline'> <NavLink to="/otp"  >Setting</NavLink> </li>
                 

                </ul>
              </div>

              <div className="col-span-1">
                <div className="mb-6">
                  <h3 className="font-semibold mb-4 text-lg">Our Address</h3>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-[#002209] flex-shrink-0">
                      <MdLocationOn className="text-xl" />
                    </div>
                    <div className="text-sm">
                      <p>4319 Wakefield Street,</p>
                      <p>Philadelphia, PA 19126</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-lg">Customer Help</h3>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-[#002209] flex-shrink-0">
                      <IoCall className="text-xl" />
                    </div>
                    <div className="text-sm">
                      <p>(256) 289-9707</p>
                      <p>(301) 580-7410</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 px-4 py-4 pb-7 sm:pb-7 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4   ">
          <p className="text-sm text-center sm:text-left">
            © 2025 HERBA ESSENTIAL . All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Follow Us :</span>
            <div className="flex gap-3 text-orange-500">
              <FaInstagram className="text-lg hover:text-orange-600 cursor-pointer" />
              <FaYoutube className="text-lg hover:text-orange-600 cursor-pointer" />
              <FaWhatsapp className="text-lg hover:text-orange-600 cursor-pointer" />
              <FaTwitter className="text-lg hover:text-orange-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      
    </footer>

  
  )
}

export default Footer

