import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-full flex items-center cursor-pointer z-50 justify-center">
      <button className="inline-flex py-2 cursor-pointer animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors ">
        {text}
      </button>
    </div>
  );
};

export default Button;
