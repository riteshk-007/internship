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
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black/50 rounded-md">
        <h1 className="text-4xl mb-4 text-center text-white">Our Location</h1>
        <p className="mb-8 text-center text-gray-200">
          Find us on the map below
        </p>
        <div className="md:w-4/5 w-full overflow-hidden flex items-center justify-center rounded shadow-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
const MapComponent = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56046.958127713224!2d77.14200211010741!3d28.60173024096989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1709538774894!5m2!1sen!2sin"
      width="1980"
      height="600"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
    />
  );
};
