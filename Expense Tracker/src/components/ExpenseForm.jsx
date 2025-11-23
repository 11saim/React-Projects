import React from "react";

export default function ExpenseForm() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">Track Your Expense</h1>
      <form className="m-5">
        <label htmlFor="title">
          <h3 className="">Title</h3>
          <input
            className="border w-full outline-0 pl-2"
            type="text"
            id="title"
          />
        </label>
        <label htmlFor="category">
          <h3 className="">Category</h3>
          <select
            className="border w-full outline-0"
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
          <h3>Amount</h3>
          <input
            className="border w-full outline-0 pl-2"
            type="number"
            id="amount"
          />
        </label>
      </form>
      <button className="bg-amber-200 mx-5">Add</button>
    </div>
  );
}
