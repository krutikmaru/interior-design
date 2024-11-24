import React from "react";

function About() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-12">
      <h2 className="w-full text-4xl md:text-6xl tracking-[-0.03em] text-white">
        Creating with Passion and Precision
      </h2>
      <div className="w-full text-label-primary text-lg space-y-6">
        <p>
          Established in 1998, Shukla Enterprises has over 25 years of
          experience as a trusted POP contractor firm, transforming ceilings
          into stunning works of art. With projects spanning more than 15
          states, we have left our mark on bungalows, showrooms, hospitals,
          offices, lobbies, and more, delivering excellence at every turn.
        </p>

        <p>
          Our legacy is built on professional expertise, precision
          craftsmanship, and a dedication to creating ceilings that blend
          functionality with beauty. Whether it&apos;s enhancing a commercial
          space or adding character to a residential property, our tailored POP
          solutions are designed to meet your unique needs and vision. With
          Shukla Enterprises, you&apos;re choosing a partner committed to
          elevating spaces through innovative and enduring ceiling designs. Join
          us as we continue shaping environments that inspire and impress.
        </p>
      </div>
    </div>
  );
}

export default About;
