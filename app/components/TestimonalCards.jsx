"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const TestimonalCards = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default TestimonalCards;

const testimonials = [
  {
    quote:
      "Working with Conture Media transformed my content approach in the bustling digital landscape of Mumbai. Their expertise in short-form content and video editing elevated my brand's online presence. An absolute must for those looking to captivate an audience effectively.",
    name: "Anaya Patel",
    location: "India ",
    star: 4.5,
  },
  {
    quote:
      "In the competitive Australian market, Conture Media's innovative strategies and top-notch video editing services have set my brand apart. Their team understands the pulse of social media and how to engage audiences. Truly outstanding work!",
    name: "Liam Smith",
    star: 4.2,
    location: "Australia",
  },
  {
    quote:
      "As a Canadian creator, I've seen a significant increase in engagement since partnering with Conture Media. Their short-form content is not just creative but also strategically aligned with my brand's identity. Their team's attention to detail is unparalleled.",
    name: "Sophie Martin",
    star: 4.7,
    location: "Canada ",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    star: 4.3,
    location: "Pride and Prejudice",
  },
  {
    quote:
      "Conture Media is a game-changer for any influencer or brand looking to make an impact in the U.S. market. Their cutting-edge short-form content and seamless video editing have been instrumental in my campaign's success. Absolutely stellar service!",
    name: "Ella Johnson",
    star: 5,
    location: "USA ",
  },
  {
    quote:
      "The team at Conture Media understands the dynamic digital landscape of Germany. Their expertise in short-form content and video editing has significantly enhanced our marketing strategy. Highly efficient and professional.",
    name: "Luca Müller",
    star: 4.4,
    location: "Germany  ",
  },
  {
    quote:
      "Singapore's fast-paced digital scene demands high-quality content, and Conture Media delivers just that. Their short-form content strategies and video editing prowess have propelled our marketing to new heights. Highly recommended for forward-thinking brands.",
    name: "Aiden Tan",
    star: 4.8,
    location: "Singapore ",
  },
  {
    quote:
      "Conture Media's mastery in crafting captivating short-form content has significantly benefited our Italian luxury brand. Their strategic insights and superior video editing skills are unmatched. A true asset to any European business.",
    name: "Isabella Rossi",
    star: 4.3,
    location: "Italy (Europe)",
  },
  {
    quote:
      "In the vibrant and competitive market of South Korea, Conture Media stands out with their exceptional short-form content and video editing services. Their understanding of trends and audience engagement is unparalleled. A game-changer for any brand.",
    name: "Ryan Lee",
    star: 4.6,
    location: " South Korea",
  },
  {
    quote:
      "Conture Media's expertise in short-form content creation and video editing has been pivotal in increasing our Spanish brand's digital footprint. Their innovative strategies and attention to cultural nuances make them a top choice for European businesses.",
    name: "Olivia Garcia",
    star: 4.5,
    location: "Spain (Europe)",
  },
];
