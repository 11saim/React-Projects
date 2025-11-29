import React from "react";

export default function Input({ title, value, onChange }) {
  return (
    <label htmlFor={title.toLowerCase()}>
      <h3 className="text-lg font-bold">{title}</h3>
      <input
        className="border w-full outline-0 p-1"
        id={title.toLowerCase()}
        value={value}
        onChange={(e) => {
          onChange(e.target);
        }}
      />
    </label>
  );
}
