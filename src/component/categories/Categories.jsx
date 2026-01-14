import React from "react";

const categories = [
  {
    name: "Refrigerator",
    img: "/1.jpeg",
  },
  {
    name: "Home Appliance",
    img: "/3.jpeg",
  },
  {
    name: "Kitchen Appliance",
    img: "/2.jpeg",
  },
  {
    name: "Rice Cooker",
    img: "/4.jpeg",
  },
  {
    name: "Mixer Grinder",
    img: "/2.jpeg",
  },
 

];

const Categories = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Top Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <span className="text-sm font-medium text-slate-800 text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
