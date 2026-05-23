// AboutSection.tsx
import React from "react";

const QuoteSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f7f5] py-6 px-0 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        
        {/* LEFT SIDE - LARGE IMAGE COLLAGE */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-[420px] h-[340px]">
            
            {/* YOUR IMAGE 1 */}
            <div className="absolute top-0 left-0 w-[150px] h-[150px] rounded-sm overflow-hidden shadow-md bg-gray-200">
              <img
                src="1.jpeg"
                alt="Perfume"
                className="w-full h-full object-cover"
              />
            </div>

            {/* YOUR IMAGE 2 */}
            <div className="absolute top-10 left-[170px] w-[180px] h-[180px] rounded-sm overflow-hidden shadow-md bg-gray-200">
              <img
                src="2.jpeg"
                alt="Luxury Scent"
                className="w-full h-full object-cover"
              />
            </div>

            {/* YOUR IMAGE 3 */}
            <div className="absolute top-[170px] left-[40px] w-[140px] h-[140px] rounded-sm overflow-hidden shadow-md bg-gray-200">
              <img
                src="3.jpeg"
                alt="Model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start md:items-end">
          
          {/* TITLE */}
          <div className="text-right">
            <h1 className="font-serif text-[62px] md:text-[82px] leading-[0.9] text-black font-light italic">
             The Rare
            </h1>

            <h1 className="font-serif text-[62px] md:text-[82px] leading-[0.9] text-[#8b6439] font-light italic">
              Scents
            </h1>
          </div>

          {/* QUOTE */}
         {/* QUOTE */}
<div className="mt-14 max-w-[480px] relative">
  
  {/* Opening Quote - Top Left */}
  <span className="absolute -top-10 left-0 text-[70px] leading-none text-[#8b6439] font-serif">
    “
  </span>

  {/* Quote Text */}
  <p className="pl-8 text-[24px] md:text-[28px] leading-[1.7] text-[#2d2d2d] font-light italic text-right">
    Dare to be remembered.
  </p>

  {/* Closing Quote - Bottom Right */}
  <div className="flex justify-end">
    <span className="text-[70px] leading-none text-[#8b6439] font-serif">
      ”
    </span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;