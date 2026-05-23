import React from "react";
import { Icon } from "@iconify/react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: "mdi:certificate-outline",
      title: "Authentic Fragrances",
      desc: "We offer 100% original perfumes sourced from trusted luxury brands worldwide.",
    },
    {
      icon: "mdi:clock-outline",
      title: "Long-Lasting Scent",
      desc: "Our perfumes are carefully selected to ensure strong projection and all-day wear.",
    },
    {
      icon: "mdi:truck-delivery-outline",
      title: "Fast & Reliable Delivery",
      desc: "We ensure quick, safe, and reliable delivery right to your doorstep.",
    },
    {
      icon: "mdi:account-check-outline",
      title: "Customer Trust & Satisfaction",
      desc: "We prioritize customer happiness with genuine products and excellent service.",
    },
  ];

  return (
    <div className="py-8  bg-white">
      {/* Title */}
      <h2 className="text-3xl font-medium uppercase text-center mb-10">
        Why Choose Us
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-4 p-4 transition-transform duration-300 hover:scale-105 relative"
          >
            {/* VERTICAL LINE (only between items on desktop) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 h-24 w-px bg-gray-200" />
            )}

            <Icon
              icon={step.icon}
              className="w-16 h-16 text-gray-300"
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