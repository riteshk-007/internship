import PriceCard from "../components/PriceCard";
import TestimonalCards from "../components/TestimonalCards";

export const metadata = {
  title: "Pricing",
  description: "Our best pricing plans.",
};
const Price = () => {
  return (
    <div
      className="w-full h-auto p-5 text-white flex flex-col items-center justify-start"
      style={{
        background: "radial-gradient(circle, #111 80%, black 100%)",
      }}
    >
      <div className="w-full md:w-9/12 mx-auto md:p-10 flex-col items-center justify-start ">
        <h3
          className=" text-base md:text-lg font-bold text-gray-400"
          style={{ fontWeight: "bold" }}
        >
          Pricing Plan
        </h3>
        <h1
          className="text-lg md:text-3xl font-bold text-white"
          style={{ fontWeight: "bold" }}
        >
          Our Best Pricing
        </h1>
        <p
          className="text-xs md:text-sm font-normal text-gray-400 my-2 w-full md:w-1/2"
          style={{ fontWeight: "normal" }}
        >
          Discover expert content marketing strategies with our Specialized
          Service, creative amplification with our Creators Package, or rapid
          brand growth with our 8-Week Explosion program. Custom budgets
          available for unique needs. For unique visions, get a custom budget
          tailored just for you. Elevate your brand&apos;s story with Conture
          Media.
        </p>
      </div>
      <div className="w-full items-center justify-center my-2 flex-col space-y-5">
        <PriceCard />
        <TestimonalCards />
      </div>
    </div>
  );
};

export default Price;
