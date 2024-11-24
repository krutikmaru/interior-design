import React from "react";
import Marquee from "./marquee";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full p-11 md:p-16 flex flex-col justify-center items-center space-y-11 border-t-2 border-border-primary">
      <Ticker />
      <Actionables />
      <Legal />
    </div>
  );
}

export default Footer;

function Ticker() {
  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden">
      <Marquee>
        <h1 className="text-white text-[80px] md:text-[144px] tracking-[-0.07em] font-semibold">
          SHUKLA ENTERPRISES *
        </h1>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}

function Actionables() {
  return (
    <div className="w-full flex flex-col md:flex-row space-y-12 md:space-y-0 items-center justify-between text-white">
      <div className="uppercase font-bold text-center">
        Shukla <br /> Enterprises
      </div>
      <div className="flex flex-col  justify-start items-center space-y-1 md:space-y-3 font-bold text-2xl md:text-4xl tracking-[-0.03em]">
        <Link
          href={"/"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          HOME
        </Link>
        <Link
          href={"/projects"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          PROJECTS
        </Link>
        <Link
          href={"/about"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          ABOUT
        </Link>
        <Link
          href={"/contact"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          CONTACT
        </Link>
      </div>
      <div className="flex flex-col justify-start  items-center space-y-1 md:space-y-3 font-bold text-2xl md:text-4xl tracking-[-0.03em]">
        <Link
          href={"https://wa.me/+919819264941"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          WHATSAPP
        </Link>
        <Link
          href={"tel:+919820270909"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          PHONE
        </Link>
        <Link
          href={"mailto:enterprisesshukla5@gmail.com"}
          className="text-label-secondary hover:text-label-primary transition-all ease-in-out duration-200 "
        >
          EMAIL
        </Link>
      </div>
    </div>
  );
}

function Legal() {
  return (
    <div className="w-full pt-6 border-t-[1px] border-border-primary text-label-primary text-sm">
      ⓒ {new Date().getFullYear()} Shukla Enterprises. All Rights Reserved
    </div>
  );
}
