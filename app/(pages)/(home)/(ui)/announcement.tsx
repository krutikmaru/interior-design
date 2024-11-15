import Button from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Announcement() {
  return (
    <div className="flex w-full p-11 md:p-16 justify-center items-start flex-col-reverse md:flex-row space-x-0 md:space-x-11">
      {/* Details */}
      <div className="w-full space-y-6">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col">
            <span className="text-lg text-label-primary">All New</span>
            <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
              Introducing Home Scape VR
            </h2>
          </div>
          <p className="w-full text-lg text-label-primary">
            Introducing Home Scape VR, an advanced virtual reality experience
            that allows you to explore your redesigned space with complete
            clarity before any work begins. This fully immersive, 360-degree
            walkthrough brings your design concepts to life, enabling you to
            visualize layout, decor, and ambiance in remarkable detail.
          </p>
        </div>
        <Button>
          Learn More
          <ArrowRight className="w-5 h-5 ml-4" />
        </Button>
      </div>
      <div className="h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden group mb-6 md:mb-0">
        <div className="w-full h-full relative scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300">
          <Image
            src="/images/announcement.avif"
            className="object-cover"
            fill
            alt="What we offer"
          />
        </div>
      </div>
    </div>
  );
}

export default Announcement;
