import Link from "next/link";
import FaqCard from "./components/Faq";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Impact />
      <div
        className="w-full p-5 text-white flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(circle, #111 75%, black 100%)",
        }}
      >
        <p className="text-4xl font-bold my-5 text-center">
          All the answers you&apos;re looking for
        </p>
        <div className="md:w-1/2 w-full flex items-center justify-center p-3">
          <FaqCard numQuestions={4} />
        </div>

        <Link href="/faq">
          <Button text={"View all FAQs"} />
        </Link>
      </div>
    </div>
  );
}
