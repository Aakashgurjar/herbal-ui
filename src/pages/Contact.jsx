import React from 'react'
import bgword from '../assets/bgword.png'
import lf from '../assets/lf.png'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";



const Contact = () => {

  return (
    <div>
        <div className="relative w-full h-svh flex flex-row items-center justify-center overflow-x-hidden mt-20">
      <div
        className="absolute top-0 left-0 w-full h-[50%] bg-cover bg-center "
        style={{ backgroundImage: `url(${bgword})`}}
      ></div>

      <div className="absolute top-40 left-10 z-10  hidden sm:block">
        <img src={lf} alt="Leaf" className="w-fit h-fit " />
      </div>

      <div className="absolute top-5 xl:w-[80rem] w-fit border-2 border-black text-black">
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="flex justify-around mb-6">
          <div className="text-center flex flex-row rounded-md border-2 border-black items-center lg:px-9 lg:gap-x-5 lg:py-2 ">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-800 text-md sm:text-xl">
              <BsFillTelephoneFill /> </span>
            </div>
            <div className="text-left ">
              <div>
                <span className="text-[0.8rem] sm:text-[1rem]">Contact</span>
              </div>
              <div>
                <span className="text-[0.8rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+(406)555-0120</span>
              </div>
            </div>
          </div>

          <div className="text-center flex flex-row  rounded-md border-2 border-black items-center lg:px-9 lg:gap-x-5 lg:py-2">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto ">
              <span className="text-green-800 text-md sm:text-xl">
              <MdEmail /></span>
            </div>
            <div className="text-left my-2 ">
              <div>
                <span className="text-[0.8rem] sm:text-[1rem]">Email</span>
              </div>
              <div>
                <span className="text-[0.8rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+(406)555-0120</span>
              </div>
            </div>
          </div>

          <div className="text-center flex flex-row rounded-md border-2 border-black items-center lg:px-9 lg:gap-x-5 lg:py-2">
            <div className="sm:w-10  sm:h-10 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-800 text-md sm:text-xl">  <FaLocationDot /></span>
            </div>
            <div className="text-left ">
              <div>
                <span className="text-[0.8rem] sm:text-[1rem]">Location</span>
              </div>
              <div>
                <span className="text-[0.8rem] sm:text-[1rem] sm:whitespace-normal whitespace-nowrap">T:+91 0000000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-30  sm:px-20  px-5 py-4 bg-white shadow-lg rounded-lg lg:w-[70rem] md:w-[50rem] w-full mx-auto">
        <h3 className="lg:text-4xl text-2xl font-bold text-center  mb-4">
          Leave Us a Message
        </h3>
        <p className="text-center text-gray-600 mb-4">
          Fill all information details to consult with us to get services from
          us
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
          </button></div>

        </form>
      </div>

     
    </div> 
    <div className=" sm:w-[52rem] w-full  lg:w-[70rem] md:w-[50rem] mx-auto p-4    mb-20 ">
        <iframe
          src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.031291189895!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8e9ddefb3d%3A0x29f9f4783e7b78e7!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1668167675249!5m2!1sen!2sin"
          className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
          style={{ border: "1px solid black" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      
    </div>
  )
}

export default Contact
