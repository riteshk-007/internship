"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        {/* Left section */}
        <div className="flex items-center w-full sm:w-auto mb-8 sm:mb-0">
          <Image
            width={90}
            height={90}
            src="/logo.png"
            alt="Company Logo"
            className=""
          />
          <div className="ml-4">
            <p className="font-semibold text-sm text-gray-400">
              rajapuri, uttam nagar, New delhi - 110059,
            </p>
            <p className="font-semibold text-sm text-gray-400"> Delhi India</p>
            <p className="font-semibold text-sm text-gray-400">
              +91 74250 81690
            </p>
          </div>
        </div>

        {/* Middle section */}
        <div className="text-start w-full sm:w-auto mb-8 sm:mb-0">
          <p className="font-semibold text-sm text-gray-400">NAVIGATION</p>
          <ul className="mt-2">
            <li className="mb-2">
              <Link href="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/price" className="text-white hover:underline">
                Price
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq" className="text-white hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="text-center w-full sm:w-auto">
          <p className="font-semibold text-sm text-gray-400">NEWSLETTER</p>
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
              className="flex items-center justify-center w-full flex-col space-y-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 w-full  rounded text-black bg-gray-200"
                required
                name="email"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
              <Button
                className="border border-gray-700 w-full md:w-1/2"
                variant="default"
                type="submit"
                text={state.submitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              />
            </form>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center flex flex-col sm:flex-row items-center justify-evenly mt-8 border-t border-gray-500 p-5">
        <p variant="caption" className="text-gray-500 mb-4 sm:mb-0">
          © 2024 Feel Right Inc. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61556161540988"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/conture-media/"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/+917425081690"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/conture.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
