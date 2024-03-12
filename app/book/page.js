import React from "react";
import MailSection from "../components/MailSection";

const EBook = () => {
  return (
    <div
      className="w-full h-auto p-5 md:p-10 text-white flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-5">Free E-Book</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="book-image-url"
          alt="E-Book"
          className="w-64 h-64 md:mr-10 mb-5 md:mb-0"
        />
        <div>
          <MailSection />
        </div>
      </div>
    </div>
  );
};

export default EBook;
