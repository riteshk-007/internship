import React from "react";
import ContactForm from "./Contact";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us.",
};

const Contact = () => {
  return (
    <div
      className="w-full h-auto p-5 text-white flex flex-col items-center justify-center "
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <h1 className="text-4xl mb-4">Contact Us</h1>
      <p className="mb-8 text-center">
        We&apos;d love to hear from you! Please fill out the form below and
        we&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
