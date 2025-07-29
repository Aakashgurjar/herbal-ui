import React from "react";
import msk from '../assets/mask.png'
import plate from '../assets/plate.png'
import calendar from '../assets/calender.png'
import clock from '../assets/clock.png'

const steps = [
  {
    icon: clock,
    title: "Take Daily",
    description: "Mix 1 sachet in warm water or milk every morning.",
  },
  {
    icon: plate,
    title: "Consume Post-Meal",
    description: "For best absorption, take it after breakfast or lunch.",
  },
  {
    icon: calendar,
    title: "Stay Consistent",
    description: "Use daily for at least 90 days to see visible results.",
  },
];

const HowToUseSection = () => {
  return (
    <section className="bg-[#fdf8ec] px-6 py-12">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={msk}
            alt="Herba Essential"
            className="w-[320px] md:w-[400px] rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-800 flex items-center gap-2">
            <span className="text-green-700">🌿</span> How to Use
          </h2>
          <p className="text-gray-700 mb-6 text-lg">Simple Steps to Stronger Hair</p>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start border-b border-gray-300 pb-4">
                <img src={step.icon} alt={step.title} className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
