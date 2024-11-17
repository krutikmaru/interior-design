import Button from "@/components/ui/button";
import DisplayCard from "@/components/ui/display-card";
import data from "@/database/services";
import { Service } from "@/types/types";
import { ArrowRight } from "lucide-react";
import React from "react";

async function Services() {
  return (
    <div className="w-full p-11 md:p-16 space-y-6 md:space-y-11">
      {/* Title + Description */}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <span className="text-lg text-label-primary">Our premium </span>
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
            Services
          </h2>
        </div>
        <Button href="/services">
          View all <ArrowRight className="w-5 h-5 ml-4" />
        </Button>
      </div>
      {/* Services */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start gap-11">
        {data.slice(0, 3).map((service: Service) => (
          <DisplayCard
            key={service.slug}
            title={service.title}
            shortDescription={service.shortDescription}
            badge={service.badge}
            slug={service.slug}
            cover={service.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
