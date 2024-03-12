"use client";
import { ValidationError, useForm } from "@formspree/react";
import Button from "./Button";
import { useEffect, useState } from "react";

const MailSection = () => {
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
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-auto">
      <p className="font-semibold text-sm text-gray-400 my-2">
        Get a free E-Book
      </p>
      {showSuccess ? (
        <div className="w-full mx-auto flex items-center justify-center p-2">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              Your message has been sent successfully.
            </span>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full space-y-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded text-black bg-gray-200 md:w-96"
            required
            name="email"
          />
          <ValidationError prefix="email" field="email" errors={state.errors} />
          <Button
            className="border border-gray-700"
            variant="default"
            type="submit"
            text={state.submitting ? " Sending..." : "Get E-Book"}
          />
        </form>
      )}
    </div>
  );
};

export default MailSection;
