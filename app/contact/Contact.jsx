"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <button
            type="submit"
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 px-7 py-2 ring-1 ring-white/10 ">
              <span>Send Message</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
