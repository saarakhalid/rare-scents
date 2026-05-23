import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

const View = () => {
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f4f1]">
        <h1 className="text-[22px] text-[#2d221d]">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 py-6 font-['Poppins'] overflow-y-auto">

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-4xl bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden grid grid-cols-1 lg:grid-cols-2"
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-[#f3ece7] hover:bg-[#e7d9cf] transition-all duration-300 flex items-center justify-center text-[#2d221d] text-[18px]"
        >
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="relative bg-[#f3ece7] flex items-center justify-center p-6 sm:p-10 overflow-hidden">

          {/* GLOW */}
          <div className="absolute w-[240px] h-[240px] bg-[#d8c2b0]/40 blur-[90px] rounded-full"></div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={product.image}
            alt={product.title}
            className="relative z-10 h-[260px] sm:h-[340px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center p-6 sm:p-10">

          {/* BRAND */}
          <p className="uppercase tracking-[3px] text-[#a28b78] text-[11px] font-medium mb-2">
            Luxury Perfume
          </p>

          {/* TITLE */}
          <h1 className="text-[26px] sm:text-[34px] leading-tight font-semibold text-[#2d221d]">
            {product.title}
          </h1>

          {/* PRICE */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <h2 className="text-[24px] font-semibold text-[#2d221d]">
              {product.price}
            </h2>

            <span className="bg-[#efe5dd] text-[#8c6d55] text-[11px] px-3 py-1 rounded-full">
              Luxury Edition
            </span>
          </div>

          {/* PERFUME DETAILS */}
          <div className="mt-6 space-y-4 text-[#5e5149] text-[14px] sm:text-[15px] leading-7">

            <p>
              <span className="font-semibold text-[#2d221d]">
                Concentration:
              </span>{" "}
              {product.concentration}
            </p>

            <p>
              <span className="font-semibold text-[#2d221d]">
                Fragrance Family:
              </span>{" "}
              {product.fragranceFamily}
            </p>

            <p>
              <span className="font-semibold text-[#2d221d]">
                Notes:
              </span>{" "}
              {product.notes}
            </p>

            <p>
              <span className="font-semibold text-[#2d221d]">
                Occasion:
              </span>{" "}
              {product.occasion}
            </p>

            <p>
              <span className="font-semibold text-[#2d221d]">
                Longevity:
              </span>{" "}
              {product.longevity}
            </p>

          </div>

          {/* QUANTITY */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="flex items-center border border-[#d8ccc3] rounded-full overflow-hidden w-fit">

              <button
                onClick={decreaseQty}
                className="w-12 h-12 flex items-center justify-center text-[#2d221d] hover:bg-[#f3ece7] transition"
              >
                <Icon icon="mdi:minus" width="20" />
              </button>

              <div className="w-14 text-center text-[16px] font-medium text-[#2d221d]">
                {quantity}
              </div>

              <button
                onClick={increaseQty}
                className="w-12 h-12 flex items-center justify-center text-[#2d221d] hover:bg-[#f3ece7] transition"
              >
                <Icon icon="mdi:plus" width="20" />
              </button>

            </div>

            {/* ADD TO CART */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-8 rounded-full bg-[#2d221d] text-white text-[14px] font-medium shadow-lg hover:bg-black transition-all duration-300"
            >
              Add To Cart
            </motion.button>

          </div>

          {/* TAGS */}
          <div className="mt-8 flex flex-wrap gap-3">

            <div className="px-4 py-2 rounded-full bg-[#f6efea] text-[#6d5d52] text-[12px]">
              Premium Packaging
            </div>

            <div className="px-4 py-2 rounded-full bg-[#f6efea] text-[#6d5d52] text-[12px]">
              Long Lasting
            </div>

            <div className="px-4 py-2 rounded-full bg-[#f6efea] text-[#6d5d52] text-[12px]">
              Authentic Fragrance
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default View;