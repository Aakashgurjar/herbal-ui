import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); 
    const [active, setActive] = useState(null);

  return (
    
    <div>
        <nav className="bg-white shadow-md fixed top-0 w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-green-700">HERBA <span className='text-orange-400'> ESSENTIAL</span> </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6  ">
       <NavLink
        to="/"
        className={({ isActive }) =>
          `rounded-md font-medium transition ${
            isActive ? "text-orange-500" : "text-gray-700 hover:text-green-600"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `rounded-md font-medium transition ${
            isActive ? "text-orange-500" : "text-gray-700 hover:text-green-600"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `rounded-md font-medium transition ${
            isActive ? "text-orange-500" : "text-gray-700 hover:text-green-600"
          }`
        }
      >
        Contact
      </NavLink>
       
        </div>
          <div className='space-x- text-green-500 flex border-2  rounded-3xl px-4 py-1 border-green-500'>
            <div className=''> 
              <button> Login/ </button>
              </div>
             <div>
               <button>Signup </button>
             </div>
           
          </div>
       

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="sm:hidden px-4 pb-4">
  
        <NavLink to="/" className="block py-2 text-gray-700 hover:text-green-600" >Home</NavLink>
        <NavLink to="/aboutus" className="block py-2 text-gray-700 hover:text-green-600" >About</NavLink>
        <NavLink to="/contact" className="block py-2 text-gray-700 hover:text-green-600" >Contact</NavLink>


      </div>
    )}
  </nav>
      
    </div>
  )
}

export default Navbar
