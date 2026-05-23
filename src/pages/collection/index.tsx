import React from "react";

const Collections: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl tracking-widest uppercase mb-4 font-light text-center">
        Our Collection
      </h1>

      <div className="w-full min-h-[100vh] bg-[#f6f0e8] flex flex-col items-center justify-center py-2 px-8">

        {/* IMAGE ROW */}
        <div className="flex items-end justify-center gap-1 w-full max-w-7xl">

          {/* IMAGE 1 */}
          <div className="relative [transform:perspective(1200px)_rotateY(18deg)] origin-left">
            <img
              src="him.jpeg"
              className="w-[440px] h-[410px] object-cover rounded-[28px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 rounded-[28px]">
              <p className="text-2xl font-semibold">FOR HIM</p>
              <button className="mt-2 text-xs bg-white text-black px-4 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="relative [transform:perspective(1200px)_rotateY(18deg)] origin-left">
            <img
              src="her.jpeg"
              className="w-[440px] h-[410px] object-cover rounded-[28px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 rounded-[28px]">
              <p className="text-2xl font-semibold">FOR HER</p>
              <button className="mt-2 text-xs bg-white text-black px-4 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="relative translate-y-16">
            <img
              src="gift.jpeg"
              alt="3"
              className="w-[460px] h-[420px] object-cover rounded-[34px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 rounded-[34px]">
              <p className="text-2xl font-semibold">GIFT SETS</p>
              <button className="mt-2 text-xs bg-white text-black px-4 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE 4 */}
          <div className="relative [transform:perspective(1200px)_rotateY(-18deg)] origin-right">
            <img
              src="uni.jpeg"
              className="w-[440px] h-[410px] object-cover rounded-[28px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 rounded-[28px]">
              <p className="text-2xl font-semibold">UNISEX</p>
              <button className="mt-2 text-xs bg-white text-black px-4 py-2">
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE 5 */}
          <div className="relative [transform:perspective(1200px)_rotateY(-18deg)] origin-right">
            <img
              src="nish.jpeg"
              className="w-[440px] h-[410px] object-cover rounded-[28px]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/20 rounded-[28px]">
              <p className="text-2xl font-semibold">NICHE</p>
              <button className="mt-2 text-xs bg-white text-black px-4 py-2">
                Explore
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Collections;