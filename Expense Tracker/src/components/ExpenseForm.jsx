import React from "react";

export default function ExpenseForm() {
  return (
    <div className="flex flex-col w-[80%] lg:w-[40%]">
      <form className="lg:m-5 flex flex-col space-y-3">
        <label htmlFor="title">
          <h3 className="text-lg font-bold">Title</h3>
          <input
            className="border w-full outline-0 p-1"
            type="text"
            id="title"
          />
        </label>
        <label htmlFor="category">
          <h3 className="text-lg font-bold">Category</h3>
          <select
            className="border w-full outline-0 p-1"
            name="category"
            id="category"
          >
            <option value="">Select Category</option>
            <option value="education">Education</option>
            <option value="bills">Bills</option>
            <option value="grocery">Grocery</option>
            <option value="sports">Sports</option>
            <option value="medicine">Medicine</option>
          </select>
        </label>
        <label htmlFor="amount">
          <h3 className="text-lg font-bold">Amount</h3>
          <input
            className="border w-full outline-0 p-1"
            type="number"
            id="amount"
          />
        </label>
        <button className="mt-5 border w-full p-1 cursor-pointer">Add</button>
      </form>
    </div>
  );
}
