import DisplayCardAdaptive from "@/components/ui/display-card-adaptive";
import React from "react";
import data from "@/database/services";
import { Service } from "@/types/types";

async function page() {
  return (
    <div className="pt-[64px]">
      <div className="w-full p-11 md:px-16 md:py-11">
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          Services
        </h2>
      </div>
      <div className="flex flex-col space-y-11  px-11 md:px-16">
        {/* Card */}
        {data.map((service: Service) => (
          <DisplayCardAdaptive
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

export default page;
