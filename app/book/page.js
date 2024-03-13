import React from "react";
import MailSection from "../components/MailSection";
import Image from "next/image";
export const metadata = {
  title: "E-Book",
  description:
    "Grab your free e-book now and unlock the secrets to making your content and videos go viral in the marketing world!",
};
const EBook = () => {
  return (
    <div
      className="w-full h-auto p-5 md:p-10 text-white flex flex-col items-center justify-center"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Free E-Book
      </h1>
      <p className="text-center text-2xl font-semibold md:text-3xl mb-5">
        Global Service Provider{" "}
      </p>
      <p className="text-center text-xl md:text-2xl mb-5">
        Grab your free e-book now and unlock the secrets to making your content
        and videos go viral in the marketing world!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
        <Image
          width={500}
          height={500}
          src="/book.png"
          alt="E-Book"
          className=""
        />
        <div>
          <MailSection />
        </div>
      </div>
    </div>
  );
};

export default EBook;
