import React from "react";

const ImpactInMotion = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-semibold mb-6">IMPACT IN MOTION</h1>
        <p className="text-gray-400 mb-8">
          Empowering Over 100 Brands with Viral Video Content
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-semibold">CLIENTS THRILLED</p>
            <p className="text-4xl font-bold mt-2">100+</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-semibold">TOTAL VIEWS ACHIEVED</p>
            <p className="text-4xl font-bold mt-2">500M+</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-semibold">CREATIVE PIECES CRAFTED</p>
            <p className="text-4xl font-bold mt-2">3000+</p>
          </div>
        </div>
        <p className="text-gray-400 mt-8">
          Our mantra: Crafting bespoke content that captivates and converts.
          Quality over quantity. Let&apos;s talk!
        </p>
        <button className="bg-[#ff1491c7] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#FF1493]">
          Book Your Complimentary Video Strategy Call Today
        </button>
      </div>
    </div>
  );
};

export default ImpactInMotion;
