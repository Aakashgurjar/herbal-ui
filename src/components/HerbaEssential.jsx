import React, { useState } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import single from '../assets/single.png'

import rec1 from '../assets/Rec4.png'
import rec2 from '../assets/Rec5.png'
import rec3 from '../assets/Rec6.png'
import rec4 from '../assets/Rec7.png'
import rec5 from '../assets/Rect8.png'


const HerbaEssential = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    {
      id: 0,
      type: 'front',
      bgColor: 'bg-green-800' ,
       image: rec2
      
    },
    {
      id: 1,
      type: 'back',
      bgColor: 'bg-green-700' , 
      image: rec1 
    },
    {
      id: 2,
      type: 'side1',
      bgColor: 'bg-green-600',
      image: rec4
    },
    {
      id: 3,
      type: 'logo1',
      bgColor: 'bg-green-900',
      image: rec3
    },
    {
      id: 4,
      type: 'logo2',
      bgColor: 'bg-green-800',
      image: rec5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4">
          
            <div className="flex sm:flex-col  sm:gap-y-5 gap-3 order-2 sm:order-1 border-2 mx-auto border-black ">
              {productImages.map((title, index) => (
              
                <img 
                src={title.image} 
                alt='imgddf'
                className=' w-[3.2rem] h-[3.5rem] sm:w-fit sm:h-fit gap-x-1 sm:gap-x-3'/>
                
                
              ))
              } 
            </div>

            <div className="border-2 flex-1 order-1 sm:order-2 ">
                <img 
                  src={single}
                  alt='single'
                  className='borde-2 border-300-red mx-auto'
                />
             
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-green-600"></div>
              <span className="text-green-800 font-bold text-xl">BEST SELLER</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                <span className="text-orange-400">Herba Essential</span>
                <span className="text-gray-800"> - Hair Nutrition | 250g | Take 1 sachet daily after meals</span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover our most trusted hair nutrition supplement – crafted with powerful herbs to promote thick, healthy, and youthful hair. Thousands rely on Herba Essential for visible results, naturally.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-medium">Supports Stronger, Thicker Hair Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-medium">Helps Control Hairfall & Reverse Premature Greying</span>
              </div>
            </div>

            <div className=" flex-col  sm:flex-row items-start sm:items-center gap-6 pt-6 border-2 hidden sm:flex">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-8 py-4 
              rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg ">
                Buy Now
                <FaArrowRight className="text-sm" />
              </button>
              
              <div className="text-right">
                <div className="text-4xl font-bold text-gray-800">₹599</div>
              </div>
            </div>

         
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default HerbaEssential;