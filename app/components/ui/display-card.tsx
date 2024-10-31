import Link from "next/link";
import React from "react";

function DisplayCard() {
  return (
    <div className="w-full flex flex-col space-y-6">
      <div className="w-full h-[300px] bg-neutral-800 rounded-xl"></div>
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
      <div className="flex justify-between items-center">
        <div className="px-6 py-[6px] bg-white/15 rounded-full tracking-[-0.04em] text-base">
          Category
        </div>
        <Link href="#">View</Link>
      </div>
    </div>
  );
}

export default DisplayCard;
