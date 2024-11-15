import Link from "next/link";
import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
function Button({ children, href, ...rest }: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className="text-black bg-white font-medium tracking-[-0.05em] px-6 py-3 w-fit rounded-full flex items-center justify-center"
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...rest}
      className="text-black bg-white font-medium tracking-[-0.05em] px-6 py-3 w-fit rounded-full flex items-center justify-center"
    >
      {children}
    </button>
  );
}

export default Button;
