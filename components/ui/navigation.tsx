"use client";
import Link from "next/link";
import React, { useState } from "react";
import Overlay from "./overlay";
import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";

function Navigation() {
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-16 fixed top-0 z-50 backdrop-blur-xl flex justify-between items-center px-11 text-white border-b-[1px] border-border-primary">
        <Link href="/" className="w-fit md:w-[100px]">
          <Image src="/shukla-logo.svg" alt="Logo" width={20} height={20} />
        </Link>
        <div className="hidden md:flex space-x-6 items-center tracking-tight">
          {/* <Link href="/projects">Projects</Link> */}
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="w-[100px] hidden md:flex  space-x-3">
          <Link href={"mailto:enterprisesshukla5@gmail.com "}>
            <Mail className="w-5 h-5 text-label-primary" />
          </Link>
          <Link href={"tel:+919820270909"}>
            <Phone className="w-5 h-5 text-label-primary" />
          </Link>
        </div>
        <div
          className="w-fit visible md:hidden cursor-pointer"
          onClick={() => setIsOverlayOpen(true)}
        >
          <Menu />
        </div>
      </div>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)}>
        <div className="w-full h-full relative flex justify-start items-end px-11 py-16">
          <button
            className="text-white absolute top-6 right-12"
            onClick={() => setIsOverlayOpen(false)}
          >
            <X />
          </button>
          <div className="text-white tracking-tight flex flex-col text-4xl md:text-6xl -space-y-4 md:-space-y-7">
            {/* <Link
              onClick={() => setIsOverlayOpen(false)}
              href="/projects"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              Projects
            </Link> */}
            <Link
              onClick={() => setIsOverlayOpen(false)}
              href="/services"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsOverlayOpen(false)}
              href="/gallery"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              Gallery
            </Link>
            <Link
              onClick={() => setIsOverlayOpen(false)}
              href="/about"
              className="bg-gradient-to-r from-gray-400 to-white inline-block text-transparent bg-clip-text p-3 tracking-[-0.05em]"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOverlayOpen(false)}
              href="/contact"
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
