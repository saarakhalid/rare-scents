import { Icon, type IconifyIcon } from "@iconify/react";
import { SOCIALS } from "./config";
import type { Key } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f6f0e8] text-[#534741] px-6 lg:px-20 py-8">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* LOGO */}
        <div className="flex items-center">
          <div className="flex items-center h-16">
            <img
              src="logo.png"
              alt="The Rare Scents"
              className="w-24 h-24 cursor-pointer object-contain"
              onClick={() => (window.location.href = "/")}
            />
          </div>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(
            (
              social: { path: string | undefined; icon: string | IconifyIcon },
              index: Key | null | undefined
            ) => (
              <a
                key={index}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110 ${
                  index === 0
                    ? "bg-[#8b6439] text-black"
                    : "bg-white text-black"
                }`}
              >
                <Icon icon={social.icon} width={20} />
              </a>
            )
          )}
        </div>
      </div>

      {/* LINE */}
      <div className="w-full h-[1px] bg-black/20 my-5"></div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* COLUMN 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer transition">
              For Him
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              For Her
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Unisex
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Gift Sets
            </li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Discover</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Shop
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Brands
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Policies
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Policies</h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Shipping & Delivery Policy
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Terms And Conditions
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition">
              Return Policy
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        </div>
      </div>

      {/* PAYMENTS */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>

        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-white text-black px-4 py-2 rounded-xl font-bold text-base min-w-[110px] text-center">
            VISA
          </div>

          <div className="bg-white text-black px-4 py-2 rounded-xl font-bold text-base min-w-[130px] text-center">
            MasterCard
          </div>

          <div className="bg-green-600 px-4 py-2 rounded-xl font-bold text-base min-w-[110px] text-center">
            M-PESA
          </div>

          <div className="bg-red-600 px-4 py-2 rounded-xl font-bold text-base min-w-[110px] text-center">
            Airtel
          </div>

          <div className="bg-blue-600 px-4 py-2 rounded-xl font-bold text-base min-w-[110px] text-center">
            Pesapal
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full h-[1px] bg-black/20 my-5"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          ©The Rare Scents 2026, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;