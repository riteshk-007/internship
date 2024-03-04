"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Mail = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="md:p-5 space-y-5 flex flex-col xl:flex-row w-full items-center justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-2xl font-bold text-center">
          READY TO MAKE YOUR CONTENT A SENSATION?
        </h2>
        <h3 className="text-xl mt-2 text-center">Contact Snippet</h3>
        <p className="mt-2 text-center">
          Have a question or want to chat about your video strategy? Our team of
          short-form content experts is ready to help you make a splash in the
          digital world. Reach out at info@conture.com.
        </p>
      </div>
      <div className="flex items-center justify-center w-full flex-col space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 w-full md:w-1/2 rounded text-black bg-gray-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          className="border border-gray-700 w-full md:w-1/2"
          variant="default"
          onClick={() => {
            console.log(email);
            setEmail("");
          }}
        >
          BOOK YOUR SESSION WITH SNIPPET
        </Button>
      </div>
    </div>
  );
};

export default Mail;
