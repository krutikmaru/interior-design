import { DisplayCardProps } from "@/app/types/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DisplayCard(props: DisplayCardProps) {
  return (
    <div className="w-full flex flex-col space-y-6">
      <Link
        href={`/services/${props.slug}`}
        className="w-full h-[300px] bg-neutral-800 rounded-xl relative overflow-hidden group"
      >
        <Image
          src={props.cover}
          alt={`${props.title} Cover`}
          fill
          className="object-cover scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300"
        />
      </Link>
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
      <div className="flex justify-between items-center">
        <div className="px-6 py-[6px] bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
          {props.badge}
        </div>
        <Link
          href={`/services/${props.slug}`}
          className="text-white flex items-center"
        >
          View <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default DisplayCard;
