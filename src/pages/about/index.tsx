import React from "react";
import WhyChooseUs from "./why";

const About: React.FC = () => {
  return (
    <><>
      {/* First Hero Section with Background + Overlay */}
      <section className="relative w-full h-[500px] flex items-center justify-start">
        {/* Background Image */}
        <img
          src="/home.jpeg" // replace with your image path
          alt="House"
          className="absolute top-0 left-0 w-full h-full object-cover" />

        {/* Overlay (diagonal with opacity) */}
        <div className="absolute top-0 left-0 h-full w-1/2 bg-[#19461A]/80 clip-path-diagonal flex items-center justify-center">
          <div className="text-white px-8">
            <h1 className="text-4xl font-light">
              <span className="font-bold">About Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Who <span className="font-bold">We Are?</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-bold">Metal Roof Masters</span> is an
              innovative metal roofing company dedicated to customer satisfaction.
              Our combined roofing experience spans almost four decades and we
              are able to service all of your metal roofing needs, from metal
              panel production all the way to custom gutters. Because we love this
              planet as much as you do, we even have{" "}
              <span className="font-bold">“Go Green”</span> energy-efficient
              options for you to choose from.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We’ve partnered with other metal industry pioneers to provide you
              with high-quality products and services at an affordable low cost.
              We believe that{" "}
              <span className="font-bold">“Experience speaks for itself”</span>{" "}
              and we are committed to excellence in customer service, but don’t
              take our word for it…
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
              MORE ABOUT COMPANY
            </button>
          </div>

          {/* Right Side - Image with Red Background */}
          <div className="relative flex justify-center md:justify-end">
            {/* Red Rectangle Behind */}
            <div className="absolute top-6 right-6 w-[90%] h-[90%] bg-red-600 -z-10"></div>

            {/* Foreground Image */}
            <img
              src="/house.jpeg" // replace with your image path
              alt="House"
              className="w-full max-w-md md:max-w-lg rounded shadow-lg relative z-10" />
          </div>
        </div>
      </section>
    </><WhyChooseUs /></>
  );
};

export default About;
