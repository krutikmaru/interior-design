import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen overflow-x-hidden px-11 pb-11 pt-40 md:pb-16 md:pt-28 flex flex-col justify-start md:justify-between items-center max-w-[1900px] mx-auto">
      <Background />
      <Heading />
      <div className="w-[200px] h-[300px] md:w-[330px] md:h-[470px] absolute bg-neutral-700 bottom-16 md:bottom-[-85px] rotate-12 rounded-xl overflow-hidden">
        <Image
          src="/images/hero-card.avif"
          className="absolute object-cover"
          fill
          alt="Hero Image"
        />
      </div>
      <Actions />
    </div>
  );
}

export default Hero;

function Background() {
  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[1900px] h-[800px] -top-[500px] left-1/2 -translate-x-1/2 blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(156,156,156,1) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <div className="flex flex-col justify-center items-center text-center -space-y-5 md:-space-y-7">
        <h1 className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.07em] font-light z-10 text-6xl md:text-9xl">
          Reimagine
        </h1>
        <h1 className="bg-gradient-to-r from-gray-300 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.07em] font-light z-10 text-6xl md:text-9xl">
          Your <br className="flex md:hidden" /> Space
        </h1>
      </div>
      <button className="text-white bg-white/20 backdrop-blur-md font-medium tracking-[-0.05em] px-6 py-3 z-10 rounded-full flex md:hidden">
        Get Started
      </button>
    </div>
  );
}

function Actions() {
  function Achievements() {
    return (
      <div className="flex flex-col justify-start items-start space-y-6">
        <div className="flex -space-x-3">
          <div className="w-11 h-11 bg-neutral-600 border-[1px] border-neutral-400 rounded-full"></div>
          <div className="w-11 h-11 bg-neutral-600 border-[1px] border-neutral-400 rounded-full"></div>
          <div className="w-11 h-11 bg-neutral-600 border-[1px] border-neutral-400 rounded-full"></div>
        </div>
        <p className="w-[200px] text-[#A6A6A6] tracking-[-0.05em]">
          More than 1000+ homes have been shaped by Haven Craft
        </p>
      </div>
    );
  }

  function CTA() {
    return (
      <div className="flex flex-col justify-start items-start space-y-6">
        <p className="w-[200px] text-[#A6A6A6] tracking-[-0.05em]">
          The intellect crafts the stunning, the soul shapes the residence, The
          Sweet Home
        </p>
        <button className="text-black bg-white font-medium tracking-[-0.05em] px-6 py-3 rounded-full shadow-2xl shadow-white">
          Get Started
        </button>
      </div>
    );
  }

  return (
    <div className="w-full justify-between items-center px-11 hidden md:flex z-20">
      <Achievements />
      <CTA />
    </div>
  );
}
