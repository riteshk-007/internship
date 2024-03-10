"use client";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const Mail = () => {
  const [state, handleSubmit] = useForm("mayrjgkz");
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  if (showSuccess) {
    return (
      <div className="w-full mx-auto flex items-center justify-center p-2">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            Your message has been sent successfully.
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="md:p-5 space-y-5 flex flex-col xl:flex-row w-full items-center justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-2xl font-bold text-center">
          READY TO MAKE YOUR CONTENT A SENSATION?
        </h2>
        <h3 className="text-xl mt-2 text-center">Contact Conture</h3>
        <p className="mt-2 text-center">
          Have a question or want to chat about your video strategy? Our team of
          short-form content experts is ready to help you make a splash in the
          digital world. Reach out at info@conture.com.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center w-full flex-col space-y-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 w-full md:w-1/2 rounded text-black bg-gray-200"
          required
          name="email"
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <Button
          className="border border-gray-700 w-full md:w-1/2"
          variant="default"
          type="submit"
        >
          BOOK YOUR SESSION WITH Conture
        </Button>
      </form>
    </div>
  );
};

export default Mail;
