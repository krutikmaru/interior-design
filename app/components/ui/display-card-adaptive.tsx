import Link from "next/link";
import React from "react";

function DisplayCardAdaptive() {
  return (
    <div className="w-full h-fit md:h-[200px] xl:h-[300px] flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-11 space-y-6 md:space-y-0 pb-11 border-b-2 border-border-primary">
      <div className="w-full md:w-[300px] xl:w-[500px] h-[300px] md:h-full bg-neutral-800 rounded-xl flex-shrink-0"></div>
      <div className="w-full h-fit md:h-full flex flex-col justify-between items-start space-y-6 md:space-y-0">
        {/* Details */}
        <div>
          {/* Title + Description */}
          <div className="flex flex-col space-y-1">
            <h3 className="text-2xl tracking-[-0.04em]">Card Title</h3>
            <p className="text-label-primary tracking-[-0.04em] text-base">
              Short card description that spans between one to two lines gives a
              better visual appearance.
            </p>
          </div>
        </div>
        {/* Badge + CTA */}
        <div className="w-full flex justify-between items-center">
          <div className="px-6 py-[6px] bg-white/15 rounded-full tracking-[-0.04em] text-base">
            Badge
          </div>
          <Link href="#">View</Link>
        </div>
      </div>
    </div>
  );
}

export default DisplayCardAdaptive;
