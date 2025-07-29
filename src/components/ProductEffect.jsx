import React from "react";
import herba from "../assets/herba.png";

import star from "../assets/star.png";

import dropimg from "../assets/dropimg.png";

const ProductEffect = () => {
  
  const leftEffects = [
    "Promotes Hair Growth",
    "Reduces Hair Fall",
    "Improves Hair Texture",
    "Combats Premature Greying",
  ];
  const rightEffects = [
    "Detoxifies the Scalp",
    "Strengthens Hair Roots",
    "Balances Scalp Health",
    "Provides Essential Nutrients",
  ];

  return (
    <div>
      <section className="bg-[#EDF5EA] py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black hidden md:block ">
          Herba Essential Powder -{" "}
          <span className="text-orange-500">Product Effects</span>
        </h2>

        <h2 className="text-[1.2rem] sm:text-[2rem] font-serif font-bold text-center text-black flex items-center justify-center gap-2 md:hidden">
          <img src={star} alt="star" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Unlock the Secret to Thick, Healthy, Vibrant Hair</span>
          <img src={star} alt="star" className="w-8 h-8 sm:w-10 sm:h-10" />
        </h2>

        <div className="absolute  w-16  md:w-28">
          <img
            src={dropimg}
            alt="drpimg"
            className="border-2 relative -bottom-20  md:bottom-8 lg:-bottom-4"
          />
        </div>

        <div className=" relative flex flex-col md:flex-row items-center justify-center gap-10 border-2 ">
          <div className="relative  flex-col gap-4 border-2 border-red-300 right-5 hidden sm:flex ">
            {leftEffects.map((effect, index) => (
              <div
                key={index}
                className="flex items-center justify-end bg-[#fdfbea] px-1 py-1 rounded-r-full w-[300px] lg:w-[350px] xl:w-[500px] shadow border-2"
              >
                <span className="font-normal md:text-[1rem]  whitespace-nowrap text-black pr-2">
                  {effect}
                </span>
                <span className="bg-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  01
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <img
              src={herba}
              alt="Herba"
              className="w-[300px] md:w-[350px] lg:w-[375px] xl:w-[400px] h-auto"
            />
          </div>

          <div className="relative  flex-col gap-4 border-2 border-red-300 left-5 hidden sm:flex ">
            {rightEffects.map((effect, index) => (
              <div
                key={index}
                className="flex items-center justify-start bg-[#fdfbea] px-1 py-1 rounded-l-full w-[300px] lg:w-[350px] xl:w-[500px] shadow"
              >
                <span className="bg-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  01
                </span>
                <span className="font-normal md:text-[1rem]  whitespace-nowrap pl-2 text-black text-start ">
                  {effect}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductEffect;
