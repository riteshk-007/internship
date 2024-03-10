import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-auto md:h-screen w-full bg-black relative flex flex-col lg:flex-row items-center justify-center antialiased p-5">
      <div className="mx-auto p-4 mt-5 md:mt-0 flex-1">
        <h1 className="relative z-10 text-xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-snug tracking-wide">
          Dominate the Short-Form Video Scene with Conture
        </h1>
        <p className="text-gray-300 mx-auto my-4 text-xs md:text-xl text-center relative z-10 leading-relaxed tracking-normal">
          We help Elevate your brand’s digital footprint with Conture&apos;s
          expertly crafted short-form video content. Our cutting-edge editing
          techniques ensure your message resonates with a global audience,
          delivering measurable results.
        </p>
        <p className="text-gray-300 mx-auto my-4 text-xs md:text-base text-center relative z-10 leading-relaxed tracking-normal">
          Boost your online presence and engagement rates with compelling
          visuals designed for the fast-paced, scroll-stopping era of social
          media.
        </p>

        <Button text={"Discover the Conture Difference"} />
        <p className="text-gray-300 mx-auto my-7 text-xs  text-center relative z-10 leading-relaxed tracking-normal">
          Secure Your Spot at the Forefront of Digital Story telling Book Your
          Complimentary Strategy Session Today
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-10 ">
        <Image
          src={"/img.gif"}
          alt="music"
          width={500}
          height={500}
          className="md:border-4 border-gray-600 rounded-2xl"
          style={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
          }}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
