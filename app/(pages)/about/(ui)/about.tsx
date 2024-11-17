import React from "react";

function About() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-12">
      <h2 className="w-full text-4xl md:text-6xl tracking-[-0.03em] text-white">
        Creating with Passion and Precision
      </h2>
      <div className="w-full text-label-primary text-lg space-y-6">
        <p>
          Founded in 1998, Shukla Enterprises has spent over two decades shaping
          beautiful, functional spaces that captivate and inspire. Our journey
          has been marked by creativity, dedication, and a relentless pursuit of
          excellence, earning us 8 distinguished awards in the field of interior
          design, including two highly prestigious accolades that highlight our
          commitment to quality and innovation.
        </p>

        <p>
          With each project, we bring a wealth of expertise and a passion for
          creating interiors that reflect our clients&apos; unique stories. Our
          comprehensive design services cover everything from concept to
          completion, with offerings like immersive VR walkthroughs, detailed
          space planning, and tailored renovations. At Haven Craft, we are
          driven by the belief that spaces should be more than beautiful—they
          should enrich the lives of those who inhabit them. Join us on this
          journey as we continue to craft world-class interiors that stand the
          test of time.
        </p>
      </div>
    </div>
  );
}

export default About;
