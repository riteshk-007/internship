import PriceCard from "../components/PriceCard";

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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="w-full items-center justify-center my-2 flex-col space-y-5">
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Price;
