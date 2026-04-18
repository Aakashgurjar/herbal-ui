import React from 'react'
import decor from '../assets/decor.png'
import bg from '../assets/bg1.png'

const Herba = () => {
  return (
    
    <section
      className="w-full bg-white mt-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 md:py-0 px-4 gap-4">
        
        <div className="flex items-center gap-2 text-center md:text-left  md:relative right-32">
          <img 
          src={decor}
           alt="leaf" className="w-36 h-32 object-contain hidden md:block mr-5 pt-3" />
           
          <div className=''> 
            <h2 className="text-lg md:text-xl font-semibold text-green-900">
              Join the Herba Essential
            </h2>
            <p className=" text-sm md:text-md text-gray-600">
              You will receive a FREE STAMP and a 10% discount
              <br className="hidden sm:block" /> for your next purchase.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-auto ">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 md:w-[28rem] w-full px-2 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-green-800 text-white px-6 py-2 rounded-r-lg hover:bg-green-700">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  
      

  )
}

export default Herba
