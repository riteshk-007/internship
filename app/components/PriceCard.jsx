import { FaCheck } from "react-icons/fa";
import Button from "./Button";

const PriceCard = () => {
  return (
    <div className="w-full sm:w-4/5 mx-auto bg-gradient-to-l from-neutral-500 to-neutral-600 p-6 rounded-lg  transform transition duration-500 ease-in-out shadow-white hover:-translate-y-1 hover:shadow-2xl">
      <h2 className="text-sm sm:text-lg font-semibold mb-4 md:text-2xl">
        Basic Pricing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {/* 1 */}
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Bandwidth</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Storage</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Users</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>

        {/* 2 */}
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Bandwidth</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Storage</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Users</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>
        {/* 3 */}
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Bandwidth</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Storage</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">Unlimited Users</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>
        <div className="flex items-center justify-start">
          <FaCheck
            className="bg-green-500 p-1 rounded-full text-white"
            fontSize={20}
          />
          <span className="ml-2 text-gray-300">24x7 Support</span>
        </div>
        {/* 4 */}
        <div className="flex items-center flex-col justify-start md:col-span-5 my-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-2 text-white">
            contact us for more details
          </p>
          <Button text={"Contact Now"} />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
