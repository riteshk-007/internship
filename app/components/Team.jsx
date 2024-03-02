import Image from "next/image";
import React from "react";

const TeamMember = ({ name, title, image }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
    <Image
      width={200}
      height={200}
      src={image}
      alt={name}
      className="w-full h-32 object-cover rounded-lg shadow-md"
    />
    <h3 className="text-xl font-semibold mt-5">{name}</h3>
    <p className="text-gray-400">{title}</p>
    <a href="#" className="text-orange-500 mt-2 hover:underline">
      View Bio
    </a>
  </div>
);

const OurTeam = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">MEET OUR VISIONARIES</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TeamMember
          name="Ritesh"
          title="FOUNDER & CREATIVE DIRECTOR"
          image="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamMember
          name="Name"
          title="CHIEF VIDEO STRATEGIST"
          image="https://images.unsplash.com/photo-1566491088321-06ab34d501dc?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamMember
          name="Name"
          title="Marketing and Content Strategist"
          image="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamMember
          name="Name"
          title="Business Dev. Executive"
          image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default OurTeam;
