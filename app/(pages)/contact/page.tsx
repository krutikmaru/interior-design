import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="py-[64px] ">
      <div className="w-full p-11 md:px-16 md:py-11 space-y-6">
        <div className="px-6 py-[6px] w-fit bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
          Contact us
        </div>
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          Let&apos;s Connect
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6 px-11 md:px-16">
        <div className="w-full space-y-6">
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col ">
            <span className="text-label-primary">Email</span>
            <Link
              href={"mailto:enterprisesshukla5@gmail.com"}
              className="text-white"
            >
              enterprisesshukla5@gmail.com
            </Link>
          </div>
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col ">
            <span className="text-label-primary">Phone</span>
            <Link href="tel:9820270909" className="text-white">
              9820270909
            </Link>
          </div>
          <div className="w-full pb-6 border-b-[1px] border-border-primary flex flex-col ">
            <span className="text-label-primary">Office</span>
            <span className="text-white">
              6, Ground Floor, plot-591/595, Sherin Apartment, Saat Rasta, Jacob
              Circle Mahalaxmi Mumbai
            </span>
          </div>
          <div className="w-full space-y-3">
            <Link
              href={"#"}
              className="w-full bg-[#121212] hover:bg-[#1C1C1C] transition-colors ease-in-out duration-200 cursor-pointer p-6 rounded-xl flex items-center"
            >
              <InstagramLogoIcon className="text-label-primary mr-3 w-8 h-8" />
              <span className="text-label-primary text-lg">Instagram</span>
            </Link>
            <Link
              href={"#"}
              className="w-full bg-[#121212] hover:bg-[#1C1C1C] transition-colors ease-in-out duration-200 cursor-pointer p-6 rounded-xl flex items-center"
            >
              <LinkedInLogoIcon className="text-label-primary mr-3 w-8 h-8" />

              <span className="text-label-primary text-lg">LinkedIn</span>
            </Link>
            <Link
              href={"#"}
              className="w-full bg-[#121212] hover:bg-[#1C1C1C] transition-colors ease-in-out duration-200 cursor-pointer p-6 rounded-xl flex items-center"
            >
              <YoutubeIcon className="text-label-primary mr-3 w-8 h-8" />
              <span className="text-label-primary text-lg">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27705.90704677998!2d72.85647936633715!3d19.298804599477105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03cee3adf51%3A0xdb2a32c172e919a5!2sStar%20Premier%20-1A%20Co-operative%20Housing%20Society%20Ltd!5e0!3m2!1sen!2sin!4v1731877792620!5m2!1sen!2sin"
            className="w-full h-[550px]"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;
