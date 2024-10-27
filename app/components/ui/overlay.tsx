"use client";
export interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  opacity?: number;
  zIndex?: number;
}

import React, { useEffect } from "react";

const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  children,
  zIndex = 100,
}) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center`}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
};

export default Overlay;
