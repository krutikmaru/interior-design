import Button from "@/components/ui/button";
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
            <span className="text-lg text-label-primary">Expert in</span>
            <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
              Craftsmanship in POP Design
            </h2>
          </div>
          <p className="w-full text-lg text-label-primary">
            With years of professional experience, we bring unparalleled
            expertise to POP ceiling designs. Our meticulously crafted designs
            blend aesthetics with functionality, adding character and charm to
            every space. From intricate patterns to sleek modern styles, trust
            us to transform your ceilings into stunning focal points that
            reflect your vision with precision and finesse.
          </p>
        </div>
        <Button href="/contact">
          Learn More
          <ArrowRight className="w-5 h-5 ml-4" />
        </Button>
      </div>
      <div className="h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden group mb-6 md:mb-0">
        <div className="w-full h-full relative scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300">
          <Image
            src="/images/general/6.jpg"
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
