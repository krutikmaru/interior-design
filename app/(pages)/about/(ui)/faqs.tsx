import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQs() {
  const faqs = [
    {
      question: "What is the first step in the design process?",
      answer:
        "The first step is a consultation where we discuss your vision, needs, and budget. From there, we create a design plan tailored specifically to you.",
    },
    {
      question: "How long does an interior design project take?",
      answer:
        "Timelines vary depending on the project’s scope. Typically, a full room design takes about 4-8 weeks, while larger projects may extend to several months.",
    },
    {
      question: "What’s included in your design fees?",
      answer:
        "Our design fees cover initial consultation, design planning, material selection, and project management. We’ll provide a breakdown during our initial consultation.",
    },
    {
      question: "Do you offer virtual design services?",
      answer:
        "Yes, we offer virtual consultations and remote design packages for clients who prefer or require an online experience.",
    },
    {
      question:
        "Will I be able to see a preview of the design before it’s finalized?",
      answer:
        "Yes, we offer 3D renderings and digital visuals so you can envision the final look. Adjustments can be made before implementation to ensure satisfaction.",
    },
    {
      question: "Do you offer post-project support?",
      answer:
        "Yes, we offer post-project support to address any questions or minor adjustments after completion, ensuring that you’re completely satisfied with your new space.",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-12">
      <div className="w-full space-y-3">
        <h2 className="text-4xl md:text-6xl tracking-[-0.03em] text-white">
          FAQ&apos;S
        </h2>
        <p className="text-label-primary text-lg">
          Common questions about our interior design services, processes, and
          what to expect when working with us.
        </p>
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => {
            return (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border-b-border-primary"
              >
                <AccordionTrigger className=" text-white text-lg ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className=" text-label-primary text-lg ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
