import { Moving } from "@/components/ui/moving-Brand-Client";
import React from "react";

const BrandConture = ({ name, igId }) => (
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

const BrandsThatChooseConture = () => {
  const brands = [
    {
      name: "GreenLeaf Kitchenware",
      des: "Crafting eco-friendly and durable kitchen essentials for everyday cooking.",
    },
    {
      name: "Skyline Sneakers",
      des: "Bringing comfort and style to every step with sneakers made from recycled materials.",
    },
    {
      name: "Waves Audio",
      des: "Delivering rich sound experiences through handcrafted, sustainable headphones.",
    },
    {
      name: "Cozy Corners Bookshop",
      des: " A local favorite, offering a carefully curated selection of books and a welcoming reading nook.",
    },
    {
      name: "Lush Canvas Home Décor",
      des: " Creating vibrant, hand-painted home accessories that add a personal touch to any space.",
    },
    {
      name: "Pure Path Yoga Mats ",
      des: "Supporting your yoga journey with eco-conscious mats and accessories.",
    },
    {
      name: "Cuppa Joe Roasters",
      des: "A small-batch coffee roastery, focusing on fair trade beans and unique blends.",
    },
    {
      name: "Stellar Cycle Gear",
      des: "Outfitting cyclists with high-quality, ethical gear for the urban adventurer.",
    },
  ];
  const creator = [
    {
      name: "Olivia Harper",
      des: "Sharing the beauty of everyday moments through her photography and thoughtful blog posts.",
    },
    {
      name: "Max Anderson ",
      des: "A DIY enthusiast teaching practical home improvement and upcycling projects.",
    },
    {
      name: "Sophie Chen ",
      des: "Exploring the intersection of technology and education with engaging content and online workshops.",
    },
    {
      name: "Jake Martinez ",
      des: "A food lover and amateur chef sharing simple, delicious recipes with a focus on local ingredients.",
    },
    {
      name: "Emma Rodriguez",
      des: "A freelance graphic designer showcasing her creative process and design tips on social media.",
    },
    {
      name: "Ben Thompson ",
      des: " An indie musician documenting his journey, from songwriting to performances.",
    },
    {
      name: "Nora Kim ",
      des: "A sustainable living advocate, offering tips on reducing waste and leading a minimalist lifestyle.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">
        Brands And Creators That Choose Conture
      </h2>
      <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative ">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Brands
        </h1>
        <Moving items={brands} direction="right" speed="slow" />
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Creators
        </h1>
        <Moving items={creator} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default BrandsThatChooseConture;
