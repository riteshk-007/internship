import React from "react";
import FaqCard from "../components/Faq";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Here are some of the most frequently asked questions.",
};
const Faq = () => {
  return (
    <div
      className="w-full h-auto p-5 md:p-10 text-white flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <h1 className="text-4xl font-bold mb-5 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-lg mb-5 text-center">
        Here are some of the most frequently asked questions.
      </p>
      <div className="xl:w-1/2 w-full flex items-center justify-center p-3">
        <FaqCard />
      </div>
    </div>
  );
};

export default Faq;
