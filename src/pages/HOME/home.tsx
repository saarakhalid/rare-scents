import React from "react";
import { motion } from "framer-motion";

const PerfumeHero: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#E3D5CA] flex items-center justify-center px-6 py-10 overflow-hidden">
      <div className="relative w-full max-w-7xl h-[500px] overflow-hidden rounded-[10px] bg-gradient-to-r from-white via-white to-[#E3D5CA] shadow-2xl">

        {/* LEFT GLOW */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-[#E3D5CA] blur-[120px] rounded-full"
        />

        {/* RIGHT GLOW */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"
        />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute left-0 top-0 w-[42%] h-full flex flex-col justify-center px-14 z-20"
        >

          {/* TEXT BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="bg-[#E3D5CA]/30 backdrop-blur-md rounded-tr-[120px] rounded-bl-[40px] p-10 w-[150%]"
          >
            <h1 className="text-white text-5xl leading-[1.3] font-serif">
              Fall in love with <br />
              Our Signature
            </h1>

            <h2 className="text-[#8b6439] text-6xl font-serif mt-2">
              Perfumes
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-18 text-black max-w-md"
          >
            <p className="text-lg leading-7 font-[Playfair_Display]">
              Every fragrance tells a story. Find the scent that speaks for you
              and lingers long after you’ve left the room.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute right-0 top-0 w-[68%] h-[85%] mt-12 overflow-hidden"
        >

          {/* CURVED IMAGE */}
          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
            }}
            className="absolute right-[-180px] top-0 w-[900px] h-full rounded-l-[350px] overflow-hidden"
          >

            <img
              src="home.jpeg"
              alt="Perfume Model"
              className="w-full h-full object-cover object-center"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#061225]/25"></div>
          </motion.div>
        </motion.div>

        {/* SHOP BUTTON */}
        <motion.button
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="absolute top-[60%] left-[52%] translate-x-[-50%] translate-y-[-50%] z-30 w-30 h-30 rounded-full border border-white bg-[#E3D5CA]/70 backdrop-blur-lg text-[#8b6439] font-semibold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          SHOP <br /> NOW!
        </motion.button>
      </div>
    </div>
  );
};

export default PerfumeHero;