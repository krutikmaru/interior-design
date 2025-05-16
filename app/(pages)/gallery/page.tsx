"use client";
import Overlay from "@/components/ui/overlay";
import { X } from "lucide-react";
import React, { useState } from "react";

function Page() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsOverlayOpen(true);
  };

  return (
    <div className="pt-[64px]">
      <div className="w-full p-11 md:px-16 md:py-11 space-y-6">
        <h2 className="text-4xl md:text-6xl tracking-[-0.04em] text-white">
          Gallery
        </h2>
        <div className="px-6 py-[6px] w-fit bg-white/15 text-label-primary rounded-full tracking-[-0.04em] text-base">
          Our work
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-11 md:px-16 pb-11">
        {images.map((image, index) => (
          <div
            key={index}
            className="h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="w-full h-full relative scale-105 group-hover:scale-100 transition-transform ease-in-out duration-300">
              <img
                src={`/images/general/${image}`}
                className="absolute object-cover w-full h-full"
                alt={`Gallery image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)}>
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            className="text-white absolute top-6 right-12 cursor-pointer z-50"
            onClick={() => setIsOverlayOpen(false)}
          >
            <X />
          </button>
          {selectedImage && (
            <div className="max-h-[500px] w-full flex justify-center items-center">
              <img
                src={`/images/general/${selectedImage}`}
                alt="Selected Image"
                className="object-contain max-h-[500px]"
              />
            </div>
          )}
        </div>
      </Overlay>
    </div>
  );
}

export default Page;
