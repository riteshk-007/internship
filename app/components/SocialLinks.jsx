import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-3 bg-gray-800 p-2 rounded-l-xl z-50 overflow-hidden">
      <a
        href="https://wa.me/+916378467482?text=I'm%20interested%20"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-green-400 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaWhatsapp size={16} />
      </a>
      {/* <a
        href="https://www.youtube.com/watch?v=0M_7Ugj4lEg"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-red-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube size={16} />
      </a> */}
      <a
        href="https://www.instagram.com/conture.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-pink-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaInstagram size={16} />
      </a>
      {/* <a
        href="https://www.facebook.com/profile.php?id=61556161540988"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-blue-800 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaFacebook size={16} />
      </a> */}
      <a
        href="https://www.linkedin.com/company/conture-media/"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-sky-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaLinkedin size={16} />
      </a>
      <a
        href="mailto:Business@conturemedia.com?subject=I'm%20interested%20in%20your%20services&body=Hi%20Conture%20Media%2C%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20back."
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-red-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <IoIosMail size={16} />
      </a>
    </div>
  );
};

export default SocialLinks;
