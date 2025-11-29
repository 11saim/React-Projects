import React from "react";

export default function Select({ title, value, onChange }) {
  return (
    <label htmlFor={title.toLowerCase()}>
      <h3 className="text-lg font-bold">{title}</h3>
      <select
        className="border w-full outline-0 p-1 cursor-pointer"
        name={title.toLowerCase()}
        id={title.toLowerCase()}
        value={value}
        onChange={(e) => {
          onChange(e.target);
        }}
      >
        <option value="">Select Category</option>
        <option value="education">Education</option>
        <option value="bills">Bills</option>
        <option value="grocery">Grocery</option>
        <option value="sports">Sports</option>
        <option value="medicine">Medicine</option>
      </select>
    </label>
  );
}
