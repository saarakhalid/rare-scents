import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-50 border-t">
      {/* Bottom Row */}
      <div className="w-full border-t">
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 py-4 px-6">
          <p>©2025 Destino. All rights reserved.</p>

          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-gray-900">
            <a href="#" className="hover:text-green-800">
              Home
            </a>
            <span>|</span>
            <a href="#" className="hover:text-green-800">
              About
            </a>
            <span>|</span>
            <a href="#" className="hover:text-green-800">
              Explore
            </a>
            <span>|</span>
            <a href="#" className="hover:text-green-800">
              Bucketlist
            </a>
            <span>|</span>
            <a href="#" className="hover:text-green-800">
              Login / Signup
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
