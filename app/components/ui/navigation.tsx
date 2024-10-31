"use client";
import Link from "next/link";
import React, { useState } from "react";
import Overlay from "./overlay";

function Navigation() {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-16 fixed top-0 z-50 backdrop-blur-xl flex justify-between items-center px-11 text-white border-b-[1px] border-border-primary">
        <Link href="/" className="w-fit md:w-[100px]">
          LOGO
        </Link>
        <div className="hidden md:flex space-x-6 items-center tracking-tight">
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
        <div
          className="w-fit md:w-[100px] cursor-pointer"
          onClick={() => setIsOverlayOpen(true)}
        >
          Actions
        </div>
      </div>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)}>
        <div className="w-full h-full relative flex justify-start items-end px-11 py-16">
          <button
            className="text-white absolute top-6 right-12"
            onClick={() => setIsOverlayOpen(false)}
          >
            Close
          </button>
          <div className="text-white tracking-tight flex flex-col text-6xl -space-y-7">
            <Link
              href="#"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              About
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              Contact
            </Link>
          </div>
        </div>
      </Overlay>
    </>
  );
}

export default Navigation;
