"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import SecondButton from "../components/secondButton";

const ContactForm = () => {
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
    <div className="w-full p-5  flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-black/50 rounded-md   p-5 md:p-10"
      >
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            required
          />
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-200 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="message"
            placeholder="Your message"
            name="message"
            required
          />
          <ValidationError
            prefix="message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="flex items-center justify-center">
          <SecondButton text="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
