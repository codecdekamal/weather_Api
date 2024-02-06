import React from "react";

const Input = ({ width, onChange, label, type,placeholder }) => {
  return (
    <>
        <label htmlFor={label} className="px-3 capitalize  text-left font-semibold">
          {label}
        </label>
        <input
        placeholder={placeholder}
          onChange={onChange}
          type={type}
          id={label}
          className={`border border-1 h-12 w-${width} p-2 rounded-xl outline-0 shadow-md text-center font-login text-lg `}
        />
    </>
  );
};

export default Input;
