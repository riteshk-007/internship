import Card from "./Card";

const Impact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 h-auto md:h-[50vh] text-white">
      <h1 className="text-4xl font-bold mb-5 text-yellow-500 underline">
        TOTAL ENGAGEMENT GENERATED
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        <Card
          item="01"
          title="TOTAL ENGAGEMENT GENERATED"
          content="Empowering Over 100 Brands with Viral Video Content

CLIENTS THRILLED: 100+ TOTAL VIEWS ACHIEVED: 500M+ CREATIVE PIECES CRAFTED: 3000+"
        />
        <Card
          item="02"
          title="OUR MANTRA"
          content="At Snippet, we're at the forefront of the short-form video revolution, crafting bespoke content that captivates and converts. We strip away the unnecessary, focusing on what truly moves the needle in social"
        />
        <Card
          item="03"
          title="OUR MISSION"
          content="Our mission is to empower brands to harness the power of short-form video content, driving real business results. We're committed to delivering the highest quality creative, data-driven insights, and exceptional service"
        />
      </div>
    </div>
  );
};

export default Impact;
