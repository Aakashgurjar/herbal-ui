import { useState, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Toggle from "./pages/Toggle";
import Otp from "./pages/Otp";
import Footer from "./components/Footer";

import Navbar from "./components/common/Navbar";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import OTPModal from "./pages/OTPModal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { PopupProvider } from "./context/PopupContext";
import  { Toaster } from "react-hot-toast";
import Lenis from "@studio-freight/lenis";

import React from "react";

function App() {


  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,     // smoothness (0.05 = very smooth)
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

 

  return (

<div className=" overflow-x-hidden">
      <PopupProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otpmodel" element={<OTPModal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Toaster position="top-right" reverseOrder={false} />
        
        <Footer />
      </PopupProvider>
    </div>
  );
}

export default App;
