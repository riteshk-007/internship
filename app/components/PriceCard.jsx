import { IoMdArrowDropright } from "react-icons/io";
const PriceCard = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light  sm:text-xl text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              Expertised Service
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Professional edit for one short-form video
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" /> 1
              revision round
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Captioning and subtitles
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Basic motion graphics
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Optimized for TikTok and Instagram Reels
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Get A Quote (Special Price: $99 for service)
            </p>
          </div>

          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              Aspiring Creators Package
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              8-week campaign, 3 custom videos/week
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Content strategy development
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Social media profile optimization
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Engagement and growth tactics coaching
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Bi-weekly analytics review
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Get A Quote
            </p>
          </div>

          <div className="hover:scale-105 transition-all duration-300 text-white  rounded-lg shadow-lg border-2 border-sky-800 flex flex-col gap-10 p-5">
            <h2 className="text-xl font-semibold text-center">
              8-Week Social Explosion
            </h2>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Daily custom videos for 8 weeks
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Social media funnel creation
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Customized storytelling framework
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Cross-platform content adaptation
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Weekly analytics and strategy
            </p>
            <p className="flex  items-center justify-start text-sm gap-2">
              <IoMdArrowDropright fontSize={19} className="text-green-500" />{" "}
              Get A Quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCard;
