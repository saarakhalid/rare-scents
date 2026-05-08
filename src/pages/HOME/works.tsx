import React from "react";
import { Icon } from "@iconify/react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: "mdi:magnify",
      title: "Search for Destinations",
      desc: "Find exciting places across the world with just a few clicks.",
    },
    {
      icon: "mdi:image-plus",
      title: "Add to Bucketlist",
      desc: "Save destinations you love and build your personal travel list.",
    },
    {
      icon: "mdi:map-marker",
      title: "Organize & Mark Spots",
      desc: "Track where you’ve been and plan your future adventures easily.",
    },
    {
      icon: "mdi:image-outline",
      title: "Post",
      desc: "Share your travel moments with others and inspire new journeys.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      {/* Title */}
      <h2 className="text-3xl font-medium uppercase text-center mb-4">
        How It Works
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover how our platform helps you explore, plan, and share your
        travel adventures in just a few steps.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-4 transition-transform duration-300 hover:scale-105"
          >
            <Icon
              icon={step.icon}
              className="w-16 h-16 text-[#486A47] transition-colors duration-300"
            />
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
