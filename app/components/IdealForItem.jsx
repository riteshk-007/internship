import React from "react";

const IdealForItem = ({ description }) => (
  <li className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-4">
    <span className="text-orange-500 text-xl font-semibold">✓</span>{" "}
    {description}
  </li>
);

const StrategySessionIdealFor = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto text-white">
        <h1 className="text-3xl font-semibold mb-6">
          THIS STRATEGY SESSION IS IDEAL FOR
        </h1>
        <ul className="list-none pl-0">
          <IdealForItem description="Businesses looking to captivate audiences with high-impact, short-form video content." />
          <IdealForItem description="Brands aiming to translate their vision into powerful video narratives that thrive in the digital space." />
          <IdealForItem description="Companies seeking to skyrocket their social media engagement with content tailored for today's fast-scrolling users." />
          <IdealForItem description="Entrepreneurs who want to leverage the power of video to tell their story and build a loyal online community." />
          <IdealForItem description="Organizations eager to outperform competitors with concise content that delivers a punch and drives results." />
          <IdealForItem description="Leaders looking for a creative agency that will elevate their brand with exceptional video editing craftsmanship." />
        </ul>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-8 hover:bg-orange-600">
          Book Your Complimentary Video Strategy Call Today
        </button>
      </div>
    </div>
  );
};

export default StrategySessionIdealFor;
