import React from "react";
import Ticker from "./(ui)/ticker";
import About from "./(ui)/about";
import FAQs from "./(ui)/faqs";
// import TrustedBy from "./(ui)/trusted-by";

function page() {
  return (
    <div className="pt-[64px]">
      <div className="w-full p-11 md:px-16 md:py-11 space-y-6">
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          Shukla Enterprises
        </h2>
        <div className="px-6 py-[6px] w-fit bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
          Since 1998
        </div>
      </div>

      <Ticker />
      <div className="w-full p-11 md:px-16 md:py-11 space-y-16">
        <About />
        {/* <TrustedBy /> */}
        <FAQs />
      </div>
    </div>
  );
}

export default page;
