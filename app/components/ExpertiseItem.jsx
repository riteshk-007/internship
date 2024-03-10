import React from "react";

const ExpertiseItem = ({ title }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-4 text-left hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    {title}
  </div>
);

const ShortFormVideoEditing = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">
          SHORT-FORM VIDEO EDITING
        </h1>
        <p className="text-gray-400 mb-8">Videos, Just Videos.</p>
        <p className="text-gray-400 mb-8">
          We do one thing - we just do it with a laser focus and better than
          anyone else. If you&apos;re looking for an agency that gets lost in a
          sea of services without excelling in any, we&apos;re not for you.
        </p>
        <p className="text-gray-400 mb-8">
          If you want a partner that zeroes in on impactful, scroll-stopping
          video content that speaks volumes in mere seconds and shows clear ROI,
          welcome to Conture.
        </p>
        <button className="bg-[#ff1491c7] text-white px-4 py-2 rounded-lg hover:bg-[#FF1493]">
          Elevate Your Brand&apos;s Story
        </button>
        <p className="text-gray-400 mt-4">
          Schedule Your FREE Strategy Call Now
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ExpertiseItem title="Short-Form Video Content" />
          <ExpertiseItem title="Viral Video Campaigns" />
          <ExpertiseItem title="Social Media Storytelling" />
          <ExpertiseItem title="Brand Narrative Shorts" />
          <ExpertiseItem title="Micro-Content Strategy" />
          <ExpertiseItem title="Platform-Specific Video Editing" />
        </div>
      </div>
    </div>
  );
};

export default ShortFormVideoEditing;
