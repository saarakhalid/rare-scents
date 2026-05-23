
const products = [
    {
      id: 1,
      title: "Illuminating cleansing gel",
      price: "$36.00",
      image: "/p1.png",
      category: "ILLUMINATE",
    },
    {
      id: 2,
      title: "Unifying serum spray",
      price: "$34.00",
      image: "/p2.png",
      category: "UNIFY",
      subtitle: "TIGHTEN PORES",
    },
    {
      id: 3,
      title: "Super glow set",
      price: "$82.00",
      oldPrice: "$89.00",
      image: "/p3.png",
      category: "NATURAL GLOW",
    },
    {
      id: 4,
      title: "Radiance day oil",
      price: "$69.00",
      image: "/p4.png",
      category: "PROTECT",
      subtitle: "ILLUMINATE",
    },
  ];
  
  const Topsellers = () => {
    return (
      <section className="w-full bg-[#f5f1ee] py-10 px-6 lg:px-12">
        {/* TOP HEADER */}
        <div className="flex items-center gap-8 mb-10">
  
  {/* BEST SELLERS */}
  <button className="flex items-center gap-3 cursor-pointer">
    <div className="w-3 h-3 rounded-full bg-[#2a1618]" />
  
    <h1 className="text-[24px] font-Bold text-[#2a1618] tracking-tight">
      New In
    </h1>
  </button>
  
  {/* NEW IN */}
  <button className="flex items-center gap-3 cursor-pointer">
    <div className="w-3 h-3 rounded-full bg-[#2a1618]" />
  
    <h1 className="text-[24px] font-semi-bold text-[#2a1618] tracking-tight">
      Best sellers
    </h1>
  </button>
  
  {/* TOP SELLERS */}
  <button className="flex items-center gap-3 cursor-pointer">
    <div className="w-3 h-3 rounded-full bg-[#2a1618]" />
  
    <h1 className="text-[24px] font-semi-bold text-[#2a1618] tracking-tight">
      Top sellers
    </h1>
  </button>
  
  </div>
        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#e6dfdb]">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-[#f5f1ee] min-h-[520px] border-[#e6dfdb]
              ${
                index !== products.length - 1
                  ? "border-r border-b lg:border-b-0"
                  : ""
              }`}
            >
              {/* CATEGORY */}
              <div className="absolute top-4 left-4">
                <p className="text-[9px] tracking-[1.5px] text-black uppercase leading-4">
                  {product.category}
                </p>
  
                {product.subtitle && (
                  <p className="text-[9px] tracking-[1.5px] text-black uppercase leading-4">
                    {product.subtitle}
                  </p>
                )}
              </div>
  
              {/* PRODUCT IMAGE */}
              <div className="flex justify-center items-center h-[380px] pt-14">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[220px] object-contain transition duration-500 hover:scale-105"
                />
              </div>
  
              {/* PRODUCT INFO */}
              <div className="absolute bottom-10 w-full text-center px-4">
                <h2 className="text-[13px] text-[#4b403d] font-light">
                  {product.title}
                </h2>
  
                <div className="flex justify-center items-center gap-2 mt-2">
                  <p className="text-[13px] text-[#4b403d]">
                    {product.price}
                  </p>
  
                  {product.oldPrice && (
                    <p className="text-[12px] text-[#b3aaa6] line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* BOTTOM SLIDER */}
        <div className="flex justify-center mt-8">
          <div className="w-[100px] h-[2px] bg-[#d6d0cc] relative">
            <div className="absolute left-[35%] top-0 w-[30px] h-[2px] bg-[#4a3b39]" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Topsellers;