import classNames from "classnames";
import React from "react";

const Button = ({ invert, children, btnText,clickEvent,className="" }) => {
  return (
    <button
      className={classNames(className,
        "py-2 px-4 flex justify-center items-center gap-2 shadow-xl rounded-full transition-all duration-200 md:cursor-pointer",
        invert
          ? "bg-white text-black hover:bg-gray-100"
          : "bg-black text-white hover:bg-gray-800"
      )}
      onClick={clickEvent}
    >
      {btnText ? <p className="font-semibold">{btnText}</p> : null}
      {children}
    </button>
  );
};

export default Button;
