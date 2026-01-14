import { useState } from "react";
import logo from "../../assets/Tycoon-Logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo Image */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Tycoon Hi-Tech"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-[#dd2400] cursor-pointer">Home</li>
          <li className="hover:text-[#dd2400] cursor-pointer">Products</li>
          <li className="hover:text-[#dd2400] cursor-pointer">Categories</li>
          <li className="hover:text-[#dd2400] cursor-pointer">About</li>
          <li className="hover:text-[#dd2400] cursor-pointer">Contact</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button className="text-xl hover:text-[#dd2400]">
            🛒
          </button>

          {/* Sign In */}
          <button className="hidden md:block bg-[#dd2400] hover:bg-[#b81d00] text-white text-sm px-4 py-2 rounded-md transition">
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-800 px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="hover:text-[#dd2400]">Home</li>
            <li className="hover:text-[#dd2400]">Products</li>
            <li className="hover:text-[#dd2400]">Categories</li>
            <li className="hover:text-[#dd2400]">About</li>
            <li className="hover:text-[#dd2400]">Contact</li>
          </ul>

          {/* Mobile Sign In */}
          <button className="mt-4 w-full bg-[#dd2400] hover:bg-[#b81d00] text-white py-2 rounded-md text-sm transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
