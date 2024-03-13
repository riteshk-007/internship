"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import Button from "./Button";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
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
            <p className="font-semibold text-sm my-2 text-gray-400">
              USA +1 650 239 6404
            </p>

            <p className="font-semibold text-sm text-gray-400">
              India +91 6377801694
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
          <p className="font-semibold text-sm text-gray-400 my-2">
            Book Your Session With Conture
          </p>
          <a href="https://calendly.com/auditmeet/30min?month=2024-03">
            <Button variant="default" text="Book Session" className="w-full" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center flex flex-col sm:flex-row items-center justify-evenly mt-8 border-t border-gray-500 p-5">
        <p variant="caption" className="text-gray-500 mb-4 sm:mb-0">
          © 2024 Conture Media. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          {/* <a
            href="https://www.facebook.com/profile.php?id=61556161540988"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaFacebook size={18} />
          </a> */}
          <a
            href="https://www.linkedin.com/company/conture-media/"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://wa.me/+917425081690"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://www.instagram.com/conture_media"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <FaInstagram size={18} />
          </a>
          {/* <a
            href="https://www.youtube.com/watch?v=0M_7Ugj4lEg"
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <CgYoutube size={18} />
          </a> */}
          <a
            href="mailto:Business@conturemedia.com?subject=I'm%20interested%20in%20your%20services&body=Hi%20Conture%20Media%2C%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20back."
            target="_blank"
            rel="noopener noreferrer"
            className="block  text-white p-1 transition-colors duration-300 ease-in-out"
          >
            <IoIosMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
