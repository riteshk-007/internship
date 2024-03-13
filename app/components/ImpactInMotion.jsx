import React from "react";
import { FaUsers, FaChartLine } from "react-icons/fa";
import { SiSnapcraft } from "react-icons/si";

const ImpactInMotion = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-semibold mb-6">IMPACT IN MOTION</h1>
        <p className="text-gray-400 mb-8 capitalize">
          empowering over 70+ brands and creators with viral video content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <span className="bg-[#ff1493] my-1 p-4 rounded-full inline-block">
              <FaUsers className="text-4xl text-white" />
            </span>

            <p className="text-2xl font-semibold">CLIENTS THRILLED</p>
            <p className="text-4xl font-bold mt-2">70+</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <span className="bg-[#ff1493] my-1 p-4 rounded-full inline-block">
              <FaChartLine className="text-4xl text-white" />
            </span>

            <p className="text-2xl font-semibold">TOTAL VIEWS ACHIEVED</p>
            <p className="text-4xl font-bold mt-2">100M+</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <span className="bg-[#ff1493] my-1 p-4 rounded-full inline-block">
              <SiSnapcraft className="text-4xl text-white" />
            </span>
            <p className="text-2xl font-semibold uppercase">crafted pieces</p>
            <p className="text-4xl font-bold mt-2">1000+</p>
          </div>
        </div>
        <p className="text-gray-400 mt-8">
          Our mantra: Crafting bespoke content that captivates and converts.
          Quality over quantity. Let&apos;s talk!
        </p>
        <a href="https://calendly.com/auditmeet/30min?month=2024-03">
          <button className="bg-[#ff1491c7] text-white px-4 capitalize py-2 rounded-lg mt-4 hover:bg-[#FF1493]">
            Book your free audit consultation call today
          </button>
        </a>
      </div>
    </div>
  );
};

export default ImpactInMotion;
