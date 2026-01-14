const SubNavbar = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">

        {/* Search Bar */}
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search electronics, appliances..."
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-[#dd2400]"
          />
          <button className="bg-[#dd2400] hover:bg-[#b81d00] text-white px-5 rounded-r-md">
            🔍
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
          <span className="hover:text-[#dd2400] cursor-pointer">
            All Categories
          </span>
          <span className="hover:text-[#dd2400] cursor-pointer">
            New Arrivals
          </span>
          <span className="hover:text-[#dd2400] cursor-pointer">
            Offers
          </span>
          <span className="hover:text-[#dd2400] cursor-pointer">
            Support
          </span>
        </div>

      </div>
    </div>
  );
};

export default SubNavbar;
