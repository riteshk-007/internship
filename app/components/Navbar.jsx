"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-900 z-20 start-0 border-b border-gray-200 dark:border-gray-600 shadow md:inset-x-0 md:border-t ${
          isSticky
            ? "sticky top-0 md:translate-y-3 md:w-3/4 mx-auto md:rounded-full md:shadow-md z-20 transition-all duration-300"
            : "w-full z-20 "
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.svg" alt="Logo" width={90} height={90} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button variant="default">Get Started</Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-600"
            >
              {isOpen ? (
                <CgClose className="w-6 h-6" />
              ) : (
                <RiMenu3Fill className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col items-start p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2    rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Price
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                    <FaAngleDown
                      className={`inline-block w-4 h-4 ml-1 text-gray-500 dark:text-gray-400 ${
                        isDropdownOpen
                          ? "transform rotate-180 transition-all duration-150"
                          : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="z-10 absolute md:left-1/2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Guide & Tips
                          </Link>
                        </li>
                      </ul>
                      <div className="py-1">
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          More Services &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
