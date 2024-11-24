"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function ScrollVideo() {
  const targetRef = useRef(null);

  // Track scroll progress of the target
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Map the scroll progress to a scale value
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const scale = useSpring(scaleTransform, {
    duration: 0.6,
  });

  return (
    <motion.div className="w-full  image-mask">
      <motion.div
        className="h-screen w-full rounded-xl overflow-hidden sticky top-0"
        style={{ scale }}
      >
        <Image
          src="/images/general/9.jpg"
          className="object-cover"
          fill
          alt="What we offer"
        />
        {/* Overlay */}
        <div className="absolute w-full bottom-16 left-0 md:left-16 flex flex-col space-y-3 px-11 md:px-0 text-white">
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] w-full">
            World-Class Pop and Fall Ceilings
          </h2>
          <p className="w-full md:w-[800px] text-base sm:text-lg">
            From stunning residential ceilings to sophisticated commercial
            designs, we specialize in creating pop and fall ceilings that
            redefine elegance and functionality. With meticulous attention to
            detail, our work transforms spaces into breathtaking environments,
            blending modern aesthetics with innovative craftsmanship to enhance
            your living and working experiences.
          </p>
        </div>
      </motion.div>
      {/* Scroll Trigger */}
      <div id="shrink-video" ref={targetRef} className="h-[50vh]"></div>
      {/* Placeholder */}
      <div className="h-[50vh]"></div>
    </motion.div>
  );
}

export default ScrollVideo;
