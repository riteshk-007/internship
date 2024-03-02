import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FaqCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Do I need to provide my own filmed content?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you’ll need to film the content. However, we&apos;ll guide you on
          shooting techniques tailored to your specific requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What&apos;s the editing turnaround for a single short-form video?
        </AccordionTrigger>
        <AccordionContent>
          We typically edit and deliver a single video within 1-2 days. For bulk
          orders exceeding 20 videos, we guarantee a maximum 2-week delivery.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How is the pricing structured for video editing?
        </AccordionTrigger>
        <AccordionContent>
          Our prices begin at $49, but the final cost depends on the complexity
          and specifics of your project. We will provide a detailed quote after
          understanding your exact needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Are thumbnails included in the video editing package?
        </AccordionTrigger>
        <AccordionContent>
          Thumbnails are not included in the base price, but we can design them
          for you based on a custom quote.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Do you provide scriptwriting services for videos aimed at going viral?
        </AccordionTrigger>
        <AccordionContent>
          Yes, our team specializes in creating scripts that are designed to
          maximize the viral potential of your content.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Can I get a custom package tailored to my content needs?
        </AccordionTrigger>
        <AccordionContent>
          Definitely, we offer bespoke packages that cater to your specific
          content requirements and campaign goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          What makes content truly engaging and shareable?
        </AccordionTrigger>
        <AccordionContent>
          A compelling hook, consistent engagement throughout, and delivering
          value are the core elements that make content go viral.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          Do you offer discounts for recurring clients or bulk orders?
        </AccordionTrigger>
        <AccordionContent>
          Yes, we value long-term partnerships and offer special pricing for
          ongoing collaborations and bulk video orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>
          Which platforms do your video editing services support?
        </AccordionTrigger>
        <AccordionContent>
          Our editing services cater to all key platforms that support
          short-form content, such as TikTok, Instagram Reels, and YouTube
          Shorts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>
          How do you ensure my brand identity is consistent in the videos?
        </AccordionTrigger>
        <AccordionContent>
          We work closely with your branding guidelines to ensure every video
          reflects and reinforces your brand&apos;s identity.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqCard;
