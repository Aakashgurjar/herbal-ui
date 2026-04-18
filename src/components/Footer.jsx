import React from 'react'

import { FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Footer = () => {


  return (

  //   <footer className=" text-white border-t border-blue-200 pt-10 pb-4 px-2 md:px-16 max-w-11/12 mx-auto">
  //   <div className="max-w-7xl bg-[#002209] mx-auto flex flex-col gap-4 ">
      
  //     <div className='flex flex-row justify-around  m-4'>
  //        <div className="md:col-span-1 flex ">
  //       <h2 className="lg:text-xl font-bold mb-2 text-3xl sm:text-lg">
  //         Herbal <span className="text-orange-500">Essential</span>
  //       </h2>
  //     </div>
  
  //     <div className="flex flex-col sm:flex-row md:col-span-2 md:gap-16 sm:gap-2 gap-1">
  //       <div className="w-fit text-left">
  //         <h3 className="font-semibold mb-2 text-[0.55rem] sm:text-lg">Help</h3>
  //         <ul className="text-[0.5rem] sm:text-sm space-y-1">
  //           <li>Help Center</li>
  //           <li>Privacy Policy</li>
  //           <li>Terms & Condition</li>
  //           <li>Return Policy</li>
  //         </ul>
  //       </div>
  //       <div className="w-fit text-left ">
  //         <h3 className="font-semibold mb-2 text-[0.55rem] sm:text-lg">Company</h3>
  //         <ul className="space-y-2 text-[0.5rem] sm:text-sm">
  //           <li>About us</li>
  //           <li>Our Blog</li>
  //           <li>Contact</li>
  //         <NavLink to="/otp" >Setting</NavLink>
  //         </ul>
  //       </div>
  //     </div>
  
  //     <div className="md:col-span-2 flex flex-col gap-4">
  //       <div className="w-fit">
  //         <h2 className="text-left sm:text-lg text-sm">Our Address</h2>
  //         <div className="flex flex-row gap-2 w-fit">
  //           <div className="flex items-center justify-center sm:h-10 sm:w-10 h-5 w-5 rounded-full text-[#002209] bg-orange-500">
  //             <MdLocationOn className='sm:text-xl text-sm'/>
  //           </div>
  //           <div className="flex flex-col w-fit h-fit text-[0.6rem] sm:text-sm">
  //             <span>4319 Wakefield Street.</span>
  //             <span>Philadelphia. PA 19126</span>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="w-fit">
  //         <h2 className="text-left sm:text-lg text-sm">Customer help</h2>
  //         <div className="flex flex-row gap-2 w-fit">
  //           <div className="flex items-center justify-center sm:h-10 sm:w-10 h-5 w-5 rounded-full text-[#002209] bg-orange-500">
  //             <IoCall className='sm:text-xl text-sm' /></div>
  //           <div className="flex flex-col text-[0.6rem] sm:text-sm">
  //             <span>(256) 289-9707</span>
  //             <span>(301) 580-7410</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     </div>
     
  //   </div>
  
  //   <hr className="my-6 border-t border-blue-400" />

  //   <div className='w-full bg-white'> 
  //     <div className="max-w-7xl mx-auto font-semibold flex  flex-row justify-between items-center text-sm px-1 gap-2 sm:gap-0">
  //     <p className="text-[0.6rem] text-black sm:text-xs md:text-sm">© 2025 HERBA ESSENTIAL. All Rights Reserved.</p>
  //     <div className="flex sm:gap-3 gap-0.5 items-center text-[0.5rem] sm:text-xs">
  //       <h2 className='text-[0.6rem] sm:text-xs md:text-sm'>Follow Us :</h2>
  //       <ul className="flex gap-2 text-[0.6rem] sm:text-xs md:text-sm text-orange-500">
  //         <li className=''>
  //           <FaWhatsapp /></li>
  //         <li><FaInstagram /></li>
  //          <li> <FaYoutube /></li>  
  //          <li><FaTwitter /> </li>
  //       </ul>
  //     </div>
  //   </div>
  //  </div>
  
   

  // </footer>



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

