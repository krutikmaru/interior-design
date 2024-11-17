import { DisplayCardAdaptiveProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DisplayCardAdaptive(props: DisplayCardAdaptiveProps) {
  return (
    <div className="w-full h-fit md:h-[200px] xl:h-[300px] flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-11 space-y-6 md:space-y-0 pb-11 border-b-2 border-border-primary">
      <Link
        href={`/services/${props.slug}`}
        className="w-full md:w-[300px] xl:w-[500px] h-[300px] md:h-full bg-neutral-800 rounded-xl flex-shrink-0 relative overflow-hidden group"
      >
        <Image
          src={props.cover}
          alt={`${props.title} Cover`}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300"
        />
      </Link>
      <div className="w-full h-fit md:h-full flex flex-col justify-between items-start space-y-6 md:space-y-0">
        {/* Details */}
        <div>
          {/* Title + Description */}
          <div className="flex flex-col space-y-1">
            <h3 className="text-2xl tracking-[-0.04em] text-white">
              {props.title}
            </h3>
            <p className="text-label-primary tracking-[-0.04em] text-base">
              {props.shortDescription}
            </p>
          </div>
        </div>
        {/* Badge + CTA */}
        <div className="w-full flex justify-between items-center">
          <div className="px-6 py-[6px] bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
            {props.badge}
          </div>
          <Link href={`/services/${props.slug}`} className="text-white">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DisplayCardAdaptive;
