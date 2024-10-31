import React from "react";
type ButtonProps = {
  children: React.ReactNode;
};
function Button(props: ButtonProps) {
  return (
    <button className="text-black bg-white font-medium tracking-[-0.05em] px-6 py-3 w-fit rounded-full">
      {props.children}
    </button>
  );
}

export default Button;
