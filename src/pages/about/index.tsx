import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <section className="relative w-full h-[85vh]  overflow-hidden">
      {/* Background Image */}
      <img
        src="ab.jpeg"
        alt="Perfume"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100"
      />

      {/* More Transparent Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Soft Blur Circle */}
      <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-5 lg:p-6 w-full max-w-5xl shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white/15 backdrop-blur-lg rounded-[20px] p-2 flex justify-center items-center h-[340px] w-full"
            >
              <img
                src="ab2.jpeg"
                alt="Perfume Bottle"
                className="w-full h-full object-cover rounded-[16px] drop-shadow-2xl"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              {/* <p className="uppercase tracking-[6px] text-sm text-white/80 mb-3">
                Luxury Collection
              </p> */}

              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                About Us
                
              </h1>

              <p className="text-white/80 text-base leading-relaxed mb-6 max-w-lg">
              As a newly established boutique, our vision is to bring a refined collection of luxury and niche perfumes to those who appreciate quality and uniqueness. Each fragrance in our collection is carefully selected to offer a distinctive experience, whether bold, subtle, or timeless.
              </p>

              {/* Price */}
            

              {/* Buttons */}
              <div className="flex items-center gap-5">
                {/* <button className="px-7 py-3 bg-white text-black rounded-full font-medium hover:bg-yellow-400 transition-all duration-300">
                  Buy Now
                </button> */}

<button className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
  <span className="mb-4 text-4xl leading-none flex items-center justify-center">
    →
  </span>
</button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;