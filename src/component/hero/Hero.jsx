import React from 'react';
import heroimg from '../../assets/Product/6.jpeg';

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Innovative Electronics <br />
            <span className="text-[#dd2400]">
              Built for Modern Living
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg">
            Discover high-quality consumer electronics and home appliances
            engineered by <strong>Tycoon Hi-Tech Park Ltd.</strong>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#dd2400] hover:bg-[#b81d00] text-white px-6 py-3 rounded-md font-medium transition">
              Shop Now
            </button>

            <button className="border border-[#dd2400] text-[#dd2400] hover:bg-[#dd2400] hover:text-white px-6 py-3 rounded-md font-medium transition">
              Explore Products
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={heroimg}
            alt="Electronics & Appliances"
            className="
              w-full
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-xl
              xl:max-w-2xl
              object-contain
            "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
