const featuredProducts = [
  {
    name: "Double Door Refrigerator",
    price: "45000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2025/05/202-02.jpg",
    discount: "10%",
  },
  {
    name: "Smart Air Conditioner",
    price: "35000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2025/05/ACC-01.jpg",
    discount: "15%",
  },
 
  {
    name: "Mixer Grinder Set",
    price: "5000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2024/08/Tycoon-All-Product-Image-for-Web-01.jpg",
    discount: "12%",
  },
  {
    name: "Rice Cooker",
    price: "2500",
    img: "https://www.tycoonbd.com/wp-content/uploads/2024/08/TRM-2401W.png.webp",
    discount: "8%",
  },
  {
    name: "Pressure Cooker",
    price: "3000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2024/08/Pressure-Cooker-5.5-Ltr.png.webp",
    discount: "10%",
  },
  {
    name: "Celling Fan",
    price: "3000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2025/07/Tycoon-All-Product-Image-for-Web-21.jpg",
    discount: "10%",
  },
  {
    name: "Tycoon Double Burner Glass LPG Stove – TCN-DBLPGG-Fantasy-Flower",
    price: "3000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2025/01/Double-Burner-Gas-Stove-Fantasy-Flower-1.png.webp",
    discount: "10%",
  },
  {
    name: "7 Pieces Non-Stick Cookware Set",
    price: "3000",
    img: "https://www.tycoonbd.com/wp-content/uploads/2024/08/7-Pieces-Non-Stick-Cookware-Set.png.webp",
    discount: "10%",
  },
];

const Featured = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative w-full h-48 flex items-center justify-center mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-contain"
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-[#dd2400] text-white text-xs px-2 py-1 rounded">
                    {product.discount} OFF
                  </span>
                )}
              </div>

              <h3 className="text-sm font-medium text-slate-900 text-center mb-1">
                {product.name}
              </h3>

              <p className="text-[#dd2400] font-semibold text-lg mb-2">
                ৳ {product.price}
              </p>

              <button className="bg-[#dd2400] hover:bg-[#b81d00] text-white px-4 py-2 rounded-md text-sm transition w-full">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
