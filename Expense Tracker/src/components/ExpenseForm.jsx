import React from "react";

export default function ExpenseForm() {
  return (
    <form>
      <label htmlFor="title">
        <h3 className="">Title</h3>
        <input type="text" id="title" />
      </label>
      <label htmlFor="category">
        <h3 className="">Category</h3>
        <select name="category" id="category">
          <option value="">All</option>
          <option value="education">Education</option>
          <option value="bills">Bills</option>
          <option value="grocery">Grocery</option>
          <option value="sports">Sports</option>
          <option value="medicine">Medicine</option>
        </select>
      </label>
      <label htmlFor="amount">
        <h3>Amount</h3>
        <input type="number" id="amount"/>
      </label>
    </form>
  );
}
