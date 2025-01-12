import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center ">
        <button className="text-sm text-gray-300 mb-4 font-mono  px-4 py-1 rounded-full border-2 border-[#7d12ff]">
          Made by Traders, For Traders.
        </button>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold  mb-6">
          Transform your Trading with Seamless
          <br />
          <span className="text-[#ab20fd]  italic "> Journaling</span> and
          <span className="text-[#ab20fd]  italic "> Analysis </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8">
          Track your trades, analyze your strategies, and automate your edge.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#ab20fd] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7d12ff]">
            Explore Tradylytics →
          </button>
          <button className="bg-gray-800 px-6 py-3 rounded-full text-white font-medium hover:bg-gray-700">
            Connect →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
