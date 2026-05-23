import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Amouage Guidance 46 EDP-100ML",
    price: "KES 70,000",
    image: "guidance.png",
    hoverImage: "G1.jpeg",
  },
  {
    id: 2,
    title: "Lancome Idole Power EDP-100ML",
    price: "KES 24,000",
    image: "power.png",
    hoverImage: "P1.jpeg",
  },
  {
    id: 3,
    title: "Giorgio Armani Powerfully EDP-100ML",
    price: "KES 23,000",
    image: "giorgio.png",
    hoverImage: "g1.jpeg",
  },
  {
    id: 4,
    title: "Hibiscus Mahajad EDP-50ML",
    price: "KES 45,000",
    image: "hibiscus.png",
    hoverImage: "h1.jpeg",
  },
];

const navLinks = [
  { name: "New In" },
  { name: "Best sellers" },
  { name: "Top sellers" },
];

const NewIn = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f5f1ee] py-12 px-4 sm:px-6 lg:px-12 font-['Poppins'] overflow-hidden">

      {/* TOP HEADER */}
      <div className="flex flex-wrap items-center gap-5 sm:gap-8 mb-12">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="relative flex items-center gap-3 cursor-pointer group transition-all duration-300"
          >
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#2a1618]" />

            <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#2a1618] relative">
              {link.name}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#2a1618] transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </div>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e6dfdb]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`relative bg-[#f5f1ee] min-h-[420px] sm:min-h-[580px] border-[#e6dfdb] overflow-hidden group ${
              index !== products.length - 1
                ? "border-r border-b lg:border-b-0"
                : ""
            }`}
          >

            {/* IMAGE */}
            <div
              className="flex justify-center items-start h-[340px] sm:h-[320px] pt-6"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={
                  hovered === product.id
                    ? product.hoverImage
                    : product.image
                }
                alt={product.title}
                className="h-[240px] sm:h-[280px] md:h-[320px] object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* INFO */}
            <div className="absolute bottom-8 w-full text-center px-4">

              {/* TITLE */}
              <h2 className="text-[20px] sm:text-[22px] lg:text-[18px] text-[#4b403d] font-medium leading-snug">
                {product.title}
              </h2>

              {/* PRICE */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <p className="text-[18px] sm:text-[20px] lg:text-[16px] text-[#4b403d]">
                  {product.price}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-center gap-4 mt-6">

                {/* VIEW BUTTON (FIXED HERE) */}
                <button
                  onClick={() =>
                    navigate("/view", { state: { product } })
                  }
                  className="px-6 py-2.5 text-[14px] border border-[#2a1618] text-[#2a1618] rounded-full hover:bg-[#2a1618] hover:text-white transition-all duration-300"
                >
                  View
                </button>

                {/* ADD BUTTON */}
                <button className="px-6 py-2.5 text-[14px] bg-[#2a1618] text-white rounded-full hover:bg-black transition-all duration-300">
                  Add
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default NewIn;