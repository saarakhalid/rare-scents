const categories = [
  {
    id: 1,
    title: "Dior",
    button: "View Product",
    image: "dior.jpeg",
  },
  {
    id: 2,
    title: "Lancome",
    button: "View Product",
    image: "lancome.jpeg",
  },
  {
    id: 3,
    title: "Tom Ford",
    button: "View Product",
    image: "tom.jpeg",
  },
];

const Products = () => {
  return (
    <section className="w-full bg-white">
      
      {/* REDUCED HEIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[78vh]">

        {categories.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group h-full"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />

            {/* TITLE (FIXED FULL VISIBILITY) */}
            <h1
              className="
                absolute
                top-1/4
                left-6
                -translate-y-1/2
                text-white
                text-2xl
                md:text-3xl
                font-light
                rotate-[-90deg]
                origin-left
                tracking-wide
                font-[Poppins]
                whitespace-nowrap
                z-20
                drop-shadow-lg
              "
            >
              {item.title}
            </h1>

            {/* BUTTON */}
            <button
              className="
                absolute
                bottom-6
                left-6
                bg-white
                text-black
                text-sm
                px-5
                py-2
                rounded-full
                font-[Poppins]
                transition
                hover:bg-black
                hover:text-white
                z-20
              "
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;