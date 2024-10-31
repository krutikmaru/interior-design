import Image from "next/image";
import React from "react";

function Offering() {
  return (
    <div className="w-full p-11 md:p-16 space-y-6 md:space-y-11">
      {/* Title + Description */}
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <span className="text-lg text-label-primary">We offer</span>
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] ">
            Expert Interior Design Solutions
          </h2>
        </div>
        <p className="w-full md:w-[800px] text-lg text-label-primary">
          We create designs that mirror your personality, all the while
          increasing comfort and usability. Whether it&apos;s revitalizing a
          solitary room or transforming your whole living area, our proficiency
          will heighten every nook to instill a genuine sense of home.
        </p>
      </div>
      {/* Image Container */}
      <div className="h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden group">
        <div className="w-full h-full relative scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300">
          <Image
            src="/images/offering.avif"
            className="object-cover"
            fill
            alt="What we offer"
          />
        </div>
      </div>
    </div>
  );
}

export default Offering;
