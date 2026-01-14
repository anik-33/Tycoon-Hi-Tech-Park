import React from "react";
import { Facebook } from "lucide-react";
import logo from "../../assets/Tycoon-Logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">

        {/* LEFT: Logo + Description */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Tycoon Hi-Tech Park Ltd."
            className="w-36 mb-4"
          />
          <p className="text-gray-400 text-sm text-center md:text-left">
            Tycoon Hi-Tech Park Ltd. is a Bangladesh-based technology and electronics manufacturing company dedicated to delivering high-quality, innovative consumer electronics and home appliances. With a deep commitment to the “Made in Bangladesh” ethos, we design and produce products that combine modern technology with reliable performance for households and businesses nationwide.
          </p>
        </div>

        {/* RIGHT: Contact & Social */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Head Office */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Head Office</h3>
            <p>Mirpur, Dhaka, Bangladesh</p>
          </div>

          {/* Regional Office / Showroom */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Regional Office / Showroom</h3>
            <p>377, Jhenaidah Road, Chourhash,</p>
            <p>Kushtia-7000, Bangladesh</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <p>Phone: +880–1332–522980</p>
            <p>Email: info@tycoonbd.com</p>
            <p>Website: www.tycoonbd.com</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Social</h3>
            <div className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-[#dd2400]" />
              <Link
                to="https://facebook.com/tycoonhitechpark"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition text-sm"
              >
                facebook.com/tycoonhitechpark
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tycoon Hi-Tech Park Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
