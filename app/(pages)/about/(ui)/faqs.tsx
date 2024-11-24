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
      question: "What is the first step in your POP ceiling process?",
      answer:
        "The first step is an initial consultation where we assess your space, discuss your design preferences, and understand your requirements. From there, we provide a customized plan for your POP ceiling project.",
    },
    {
      question: "How long does a POP ceiling project take?",
      answer:
        "Timelines depend on the size and complexity of the project. Typically, a single room POP ceiling takes about 1-2 weeks, while larger projects like lobbies or offices may take several weeks.",
    },
    {
      question: "What services are included in your POP solutions?",
      answer:
        "Our services include consultation, design planning, material selection, skilled installation, and project management. We ensure a seamless process from start to finish.",
    },
    {
      question: "Do you work on both residential and commercial spaces?",
      answer:
        "Yes, we specialize in POP ceiling solutions for a variety of spaces, including bungalows, showrooms, hospitals, offices, and building lobbies.",
    },
    {
      question: "Can I see the design before installation begins?",
      answer:
        "Absolutely! We provide detailed design plans and visual references to help you envision your ceiling’s final look. Adjustments can be made before we start the installation process.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we provide post-project support to ensure your satisfaction. Whether it’s addressing concerns or making minor adjustments, we’re here to help even after the project is complete.",
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
