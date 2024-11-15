import DisplayCardAdaptive from "@/app/components/ui/display-card-adaptive";
import React from "react";

function page() {
  return (
    <div className="pt-[64px]">
      <div className="w-full p-11 md:px-16 md:py-11">
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          Projects
        </h2>
      </div>
      <div className="flex flex-col space-y-11  px-11 md:px-16">
        {/* Card */}
        <DisplayCardAdaptive />
        <DisplayCardAdaptive />
        <DisplayCardAdaptive />
        <DisplayCardAdaptive />
        <DisplayCardAdaptive />
      </div>
    </div>
  );
}

export default page;
