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
          src="/images/offering.avif"
          className="object-cover"
          fill
          alt="What we offer"
        />
        {/* Overlay */}
        <div className="absolute w-full bottom-16 left-0 md:left-16 flex flex-col space-y-3 px-11 md:px-0 text-white">
          <h2 className="text-4xl md:text-6xl tracking-[-0.04em] w-full">
            World Class Interior
          </h2>
          <p className="w-full md:w-[800px] text-base sm:text-lg">
            From residential sanctuaries to dynamic commercial spaces, our work
            embodies sophistication, functionality, and a keen attention to
            detail that transforms each space into a masterpiece. With our
            approach, we create environments that not only look stunning but
            also enhance the way you live, work, and experience your
            surroundings.
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
