import React from "react";
import { Icon } from "@iconify/react";

const Home: React.FC = () => {
  return (
    <section
    className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
    style={{
      backgroundImage: "url('/portugal.jpeg')", // ✅ Correct way
    }}
  >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-white opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
  <div className="flex items-center justify-start">
    <span className="text-[#19461A]">“</span>
  </div>
  Dream It. Plan It. Do It.
  <div className="flex items-center justify-end">
    <span className="text-[#19461A]">”</span>
  </div>
</h1>

        <p className="text-lg md:text-xl mb-6">
          Every great adventure starts with a single click—start building your
          journey today.
        </p>

        {/* Button */}
        <button className="bg-gradient-to-r from-green-900 to-green-600 px-6 py-3 rounded-md text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center gap-2 mx-auto">
          Explore Now
          <Icon icon="mdi:arrow-right" width="20" />
        </button>
      </div>

      {/* Feature Cards */}
      <div className="absolute bottom-[-70px] flex flex-wrap justify-center gap-6 z-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-52 h-40 bg-gradient-to-t from-[#19461A] to-[#486A47] text-white rounded-md shadow-lg flex flex-col justify-center items-center p-4 opacity-80"
          >
            <Icon icon={feature.icon} width="40" className="mb-3" />
            <p className="text-center font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: "mdi:heart-outline",
    text: "save favorite destination",
  },
  {
    icon: "mdi:note-plus-outline",
    text: "Add notes and photos",
  },
  {
    icon: "mdi:map-marker-check-outline",
    text: "mark visited places",
  },
  {
    icon: "mdi:map-outline",
    text: "interactive map view",
  },
];

export default Home;
