import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Placeholder */}
          <div className="bg-gray-300 w-full h-[400px] flex items-center justify-center rounded-lg shadow-md">
            <span className="text-gray-600">Image / Illustration</span>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-300 w-16 h-16 flex items-center justify-center rounded">
                <span className="text-lg font-bold text-green-900">01</span>
              </div>
              <div>
                <h3 className="font-bold text-green-900">
                  Trusted, Curated Content 📖
                </h3>
                <p className="text-gray-700">
                  Every guide and idea is carefully researched and simplified—
                  no overwhelming information, just what truly matters for
                  travelers.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-300 w-16 h-16 flex items-center justify-center rounded">
                <span className="text-lg font-bold text-green-900">02</span>
              </div>
              <div>
                <h3 className="font-bold text-green-900">
                  Visual & Engaging Experience
                </h3>
                <p className="text-gray-700">
                  Inspires with beautiful photos, maps, and interactive features
                  that make planning enjoyable.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-300 w-16 h-16 flex items-center justify-center rounded">
                <span className="text-lg font-bold text-green-900">03</span>
              </div>
              <div>
                <h3 className="font-bold text-green-900">
                  Personalized Inspiration
                </h3>
                <p className="text-gray-700">
                  Discover curated destinations and experiences tailored to your
                  preferences (adventure, luxury, culture, nature).
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-6">
              <div className="bg-gray-300 w-16 h-16 flex items-center justify-center rounded">
                <span className="text-lg font-bold text-green-900">04</span>
              </div>
              <div>
                <h3 className="font-bold text-green-900">
                  Goal-Oriented Travel
                </h3>
                <p className="text-gray-700">
                  Helps you create, organize, and track your dream trips like a
                  bucket list instead of random travel plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
