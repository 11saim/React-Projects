import React from "react";

export default function Input({ title, value, onChange, error }) {
  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="flex space-x-2 items-center"
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-[12px] text-red-700 font-bold">{error}</p>
      </label>
      <input
        className="border w-full outline-0 p-1"
        id={title.toLowerCase()}
        value={value}
        onChange={(e) => {
          onChange(e.target);
        }}
      />
    </div>
  );
}
