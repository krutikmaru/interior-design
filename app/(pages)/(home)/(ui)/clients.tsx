import Marquee from "@/components/ui/marquee";
import React from "react";

function Clients() {
  const clients = [
    "lux.png",
    "ddpl.png",
    "morpho41.png",
    "pagaria.png",
    "skyz.png",
    "sushilp.png",
    "urbanscape.png",
  ];
  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden">
      <Marquee>
        {clients.map((image, index) => (
          <div
            key={index}
            className="relative bg-neutral-800/80 p-6 min-w-24   rounded-md border border-neutral-800 shadow-sm"
          >
            <img
              src={`/images/clients/${image}`}
              alt={`Client ${index + 1}`}
              style={{ width: "auto", height: "48px" }}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}

export default Clients;
