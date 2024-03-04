import React from "react";

const BrandSnippet = ({ name, igId }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white mb-4">
    <h3 className="text-xl font-semibold">{name}</h3>
    <a
      href={`https://www.instagram.com/${igId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FF1493] mt-2 hover:underline"
    >
      View on Instagram
    </a>
  </div>
);

const BrandsThatChooseSnippet = () => {
  const brands = [
    { name: "Sanatan Roy", igId: "@riteshk_007" },
    { name: "Ritik Jain", igId: "ritik_jain" },
    { name: "MnA Studios", igId: "mna_studios" },
    { name: "Rogriches", igId: "rogriches" },
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">Brands That Choose Us</h2>
      <div className="w-full sm:w-full md:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <BrandSnippet key={brand.igId} name={brand.name} igId={brand.igId} />
        ))}
      </div>
    </div>
  );
};

export default BrandsThatChooseSnippet;
