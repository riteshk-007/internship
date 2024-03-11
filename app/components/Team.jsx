import Image from "next/image";
import React from "react";

const TeamMember = ({ name, title, image }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    <Image
      width={200}
      height={200}
      src={image}
      alt={name}
      className="w-full h-52 md:h-64 object-cover rounded-lg shadow-md"
    />
    <h3 className="text-base md:text-xl font-semibold mt-5">{name}</h3>
    <p className="text-gray-400">{title}</p>
    <a href="#" className="text-[#FF1493] mt-2 hover:underline">
      View Bio
    </a>
  </div>
);

const OurTeam = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">MEET OUR VISIONARIES</h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <TeamMember
          name="Manthan Gupta"
          title="Founder and Operations Executive"
          image="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamMember
          name="Asia Gabriella"
          title="Business Development Manager"
          image="/Asia Gabriella.jpeg"
        />
        <TeamMember
          name="Rohan Azad"
          title="Senior Product Manager"
          image="/Rohan Azad.jpg"
        />

        <TeamMember
          name="Kaira Anderson"
          title="Marketing Manager"
          image="/Kaira Anderson.png"
        />
      </div>
    </div>
  );
};

export default OurTeam;
