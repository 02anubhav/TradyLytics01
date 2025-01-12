import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left - Logo */}
        <div className="flex-1 text-2xl font-bold">Tradylytics</div>

        {/* Center - Links */}
        <div className="flex-1 hidden md:flex justify-center space-x-8 text-sm">
          <a href="#about" className="hover:text-green-400">
            About
          </a>
          <a href="#contact" className="hover:text-green-400">
            Contact Us
          </a>
        </div>

        {/* Right - Button */}
        <div className="flex-1 flex justify-end">
          <button className="px-6 py-2 text-sm rounded-full bg-zinc-50 text-black ">
            Coming Soon
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
