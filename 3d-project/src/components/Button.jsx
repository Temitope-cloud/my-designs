import React from "react";

const Button = ({ id, className, title, leftIcon, containerClass }) => {
  return (
    <>
      <button
        className={`flex items-center font-general px-7 py-2 cursor-pointer text-black text-xs rounded-full ${containerClass} hover:`}
        id={id}
      >
        <span>{leftIcon}</span>
        {title}
      </button>
    </>
  );
};

export default Button;
