import React from "react";
import { Icon } from "@iconify/react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="holiday.jpeg" // replace with your image path
        alt="Holiday"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#19461A] to-[#486A47] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">The World is waiting for youuuu!!</h1>
        <button className="bg-gradient-to-r from-green-900 to-green-600 px-6 py-3 rounded-md text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center gap-2 mx-auto">
          Explore Now
          <Icon icon="mdi:arrow-right" width="20" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
