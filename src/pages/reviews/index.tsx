import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Samuel N.",
    text: "I absolutely love Dior Sauvage. It smells so fresh and powerful, and it lasts the whole day. I always get compliments when I wear it.",
  },
  {
    id: 2,
    name: "Elizabeth C.",
    text: "La Vie Est Belle is so beautiful and sweet. It makes me feel elegant and confident every time I wear it. The scent is just perfect.",
    active: true,
  },
  {
    id: 3,
    name: "Khadijah M.",
    text: "9PM Night Out is amazing for evenings. It smells warm and attractive, and it really brings out a confident vibe when I go out.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full min-h-[70vh] bg-white flex items-center justify-center px-6 py-10 overflow-hidden">
      <div className="bg-white w-full max-w-7xl rounded-sm px-10 lg:px-20 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
              Customer
              <br />
              Reviews
            </h1>

            <p className="text-gray-500 mt-6 leading-7 max-w-md text-base">
              Real customers sharing their experiences with luxury perfumes and
              how each scent makes them feel throughout the day.
            </p>
          </motion.div>

          {/* RIGHT TESTIMONIALS (STAIRCASE STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative flex flex-col gap-6"
          >
            {/* Purple Line */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-[4px] h-24 bg-gradient-to-b from-pink-500 to-purple-700 rounded-full"></div>

            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`relative bg-white border border-gray-100 shadow-sm rounded-md px-5 py-4 flex flex-col hover:shadow-lg transition duration-300 ${
                  item.active ? "scale-105" : ""
                }`}
                style={{
                  marginLeft: `${index * 20 + 32}px`,
                }}
              >
                {/* Name */}
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-black">
                    {item.name}
                  </h3>

                  <span
                    className={`text-2xl font-bold ${
                      item.active ? "text-purple-600" : "text-gray-300"
                    }`}
                  >
                    ”
                  </span>
                </div>

                {/* Review */}
                <p className="text-gray-500 leading-6 mt-2 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;