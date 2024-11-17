import Button from "@/components/ui/button";
import React from "react";

function Projects() {
  return (
    <div className="w-full p-11 md:p-16 space-y-6 md:space-y-11">
      {/* Title + Description */}
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col">
          <span className="text-lg text-label-primary">Projects</span>
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
            We&apos;ve delivered
          </h2>
        </div>
        <Button>View all</Button>
      </div>
      {/* Services */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start gap-6">
        {/* <DisplayCard />
        <DisplayCard />
        <DisplayCard /> */}
      </div>
    </div>
  );
}

export default Projects;
