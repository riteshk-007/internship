import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black mx-auto flex items-center justify-center md:p-5">
      <div className="bg-black md:w-3/4 text-white p-6 md:flex md:justify-between md:items-center px-10 flex-wrap">
        <Link
          href={"/"}
          className="mb-4 md:mb-0 mx-auto md:mx-0  flex items-center justify-center"
        >
          <Image width={80} height={80} src="logo.svg" alt="Company Logo" />
        </Link>
        <div className="mb-10 mx-auto md:mx-0 md:w-auto w-full text-center md:text-start">
          <p>Email: info@conture.com</p>
        </div>
        <div className="mb-4 md:mb-0 mx-auto md:mx-0 md:w-auto w-full text-center md:text-start">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-yellow-500 hover:underline transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-yellow-500 hover:underline transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-yellow-500 hover:underline transition duration-200"
              >
                Get a Free E-book
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-yellow-500 hover:underline transition duration-200"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4  w-full " />
        <div className="mx-auto md:mx-0 w-full text-center md:flex space-y-2 md:space-y-0 md:space-x-3">
          <p className="text-gray-400 text-sm cursor-pointer">Privacy Policy</p>
          <p className="text-gray-400 text-sm cursor-pointer">
            Terms of Service
          </p>
          <p>Copyrights reserved by Snippet | Conture AI</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
