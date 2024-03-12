import Link from "next/link";
import FaqCard from "./components/Faq";
import Hero from "./components/Hero";
import Button from "./components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Mail from "./components/Mail";
import OurTeam from "./components/Team";
import BrandsThatChooseConture from "./components/Brand";
import ShortFormVideoEditing from "./components/ExpertiseItem";
import ImpactInMotion from "./components/ImpactInMotion";
import StrategySessionIdealFor from "./components/IdealForItem";
import MailSection from "./components/MailSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ImpactInMotion />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center ">
          <ShortFormVideoEditing />
        </div>
        <div className="overflow-hidden w-full flex  items-center justify-center ">
          <BrandsThatChooseConture />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <OurTeam />
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <StrategySessionIdealFor />
        </div>
      </div>

      <div
        className="w-full p-10 text-white flex md:flex-row flex-col  items-center justify-evenly"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <h1 className="md:w-1/2 text-center w-full capitalize flex-wrap text-4xl p-4  font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Grab Your Free E-Book: Mastering the Art of Viral Videos
        </h1>
        <div className="w-full md:w-1/2 justify-center items-center">
          <MailSection className="md:mb-4" />
        </div>
      </div>

      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <Link
          href={"/price"}
          className="my-4 text-[#FF1493] hover:underline flex items-center justify-center space-x-2 cursor-pointer"
        >
          <p>Go to Price Page</p>
          <FaArrowRightLong />
        </Link>
        <p className="text-4xl font-bold my-5 text-center">
          All the answers you&apos;re looking for
        </p>
        <div className="xl:w-1/2 w-full flex items-center justify-center p-3">
          <FaqCard numQuestions={4} />
        </div>

        <Link href="/faq">
          <Button text={"View all FAQs"} />
        </Link>
      </div>
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <div className=" w-full flex md:flex-row flex-col items-center justify-center p-3">
          <Mail />
        </div>
      </div>
    </div>
  );
}
