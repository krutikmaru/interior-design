import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="w-full h-16 fixed top-0 backdrop-blur-xl flex justify-between items-center px-11 text-white">
      <div className="w-[100px]">LOGO</div>
      <div className="flex space-x-6 items-center tracking-tight">
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="w-[100px]">Actions</div>
    </div>
  );
}

export default Navigation;
