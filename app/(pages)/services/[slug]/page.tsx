import data from "@/database/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const service = data.find((d) => d.slug === slug);

  if (!service) {
    // return 404
    notFound();
  }

  return (
    <div className="w-full p-11 md:p-16 space-y-11 md:space-y-16 text-white overflow-visible">
      {/* Title + Badge + Image */}
      <div className="w-full flex flex-col space-y-6 pt-16">
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          {service.title}
        </h2>
        <div className="px-6 py-[6px] w-fit bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
          {service.badge}
        </div>
        <div className="w-full h-[250px] md:h-[450px] relative overflow-hidden bg-neutral-800 rounded-xl group">
          <Image
            src={service.cover}
            alt={`${service.title} Cover`}
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300"
          />
        </div>
      </div>
      {/* Content + Metadata */}
      <div className="w-full flex flex-col md:flex-row space-x-0 -space-y-12 md:space-y-0 md:space-x-16 overflow-visible">
        <div className="w-full prose prose-lg max-w-none text-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {service.content}
          </ReactMarkdown>
        </div>
        <div className="w-full md:w-[400px] h-fit flex-shrink-0 relative md:sticky top-[100px] space-y-6 ">
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col ">
            <span className="text-label-primary">Estimated Time</span>
            <span>{service.estimatedTime}</span>
          </div>
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col">
            <span className="text-label-primary">Client Satisfaction</span>
            <span>{service.clientSatisfaction}</span>
          </div>
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col">
            <span className="text-label-primary">Rating</span>
            <span>{service.rating}</span>
          </div>
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col">
            <span className="text-label-primary">Cost</span>
            <span>{service.cost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
