import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = ({ numQuestions }) => {
  const questions = [
    {
      trigger: "Do I need to provide my own filmed content?",
      content:
        "Yes, you’ll need to film the content. However, we&apos;ll guide you on shooting techniques tailored to your specific requirements.",
    },
    {
      trigger:
        "What&apos;s the editing turnaround for a single short-form video?",
      content:
        "We typically edit and deliver a single video within 1-2 days. For bulk orders exceeding 20 videos, we guarantee a maximum 2-week delivery.",
    },
    {
      trigger: "How is the pricing structured for video editing?",
      content:
        "Our prices begin at $49, but the final cost depends on the complexity and specifics of your project. We will provide a detailed quote after understanding your exact needs.",
    },
    {
      trigger: "Are thumbnails included in the video editing package?",
      content:
        "Thumbnails are not included in the base price, but we can design them for you based on a custom quote.",
    },
    {
      trigger:
        "Do you provide scriptwriting services for videos aimed at going viral?",
      content:
        "Yes, our team specializes in creating scripts that are designed to maximize the viral potential of your content.",
    },
    {
      trigger: "Can I get a custom package tailored to my content needs?",
      content:
        "Definitely, we offer bespoke packages that cater to your specific content requirements and campaign goals.",
    },
    {
      trigger: "What makes content truly engaging and shareable?",
      content:
        " A compelling hook, consistent engagement throughout, and delivering value are the core elements that make content go viral.",
    },
    {
      trigger: "Do you offer discounts for recurring clients or bulk orders?",
      content:
        "Yes, we value long-term partnerships and offer special pricing for ongoing collaborations and bulk video orders.",
    },
    {
      trigger: "Which platforms do your video editing services support?",
      content:
        "Our editing services cater to all key platforms that support short-form content, such as TikTok, Instagram Reels, and YouTube Shorts.",
    },
    {
      trigger:
        "How do you ensure my brand identity is consistent in the videos?",
      content:
        "We work closely with your branding guidelines to ensure every video reflects and reinforces your brand's identity.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {questions?.slice(0, numQuestions).map((question, index) => (
        <AccordionItem value={`item-${index + 1}`} key={`item-${index + 1}`}>
          <AccordionTrigger>{question.trigger}</AccordionTrigger>
          <AccordionContent>{question.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqCard;
