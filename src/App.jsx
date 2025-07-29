import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Toggle from './pages/Toggle';
import Otp from './pages/Otp';
import Footer from './components/Footer';

import Navbar from './components/common/Navbar';
import Contact from './pages/Contact';



function App() {



  return (
    <div className='border-2 border-red-300 '> 

     <Navbar />

          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/toggle" element={<Toggle />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/otp" element={<Otp />} />
           
           
          </Routes> 
        <Footer />
       
   
    </div>
  )
}

export default App
