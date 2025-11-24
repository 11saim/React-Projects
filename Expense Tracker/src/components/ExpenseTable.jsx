import React from "react";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";

export default function ExpenseTable() {
  return (
    <table className="border-2 border-collapse w-[80%] lg:w-[40%] mt-12">
      <thead>
        <tr>
          <th className="border-2 py-1 px-3 w-1/3">
            <div className="flex justify-between items-center">
              <p className="text-lg">Title</p>
              <div className="flex justify-center items-center space-x-2">
                <img
                  src={upArrow}
                  alt="up-arrow"
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
          </th>
          <th className="border-2 py-1 px-2 w-1/3">
            <select
              className="w-full outline-0 p-1 cursor-pointer"
              name="category"
              id="category"
            >
              <option value="">All</option>
              <option value="education">Education</option>
              <option value="bills">Bills</option>
              <option value="grocery">Grocery</option>
              <option value="sports">Sports</option>
              <option value="medicine">Medicine</option>
            </select>
          </th>
          <th className="border-2 py-1 px-3 w-1/3">
            <div className="flex justify-between items-center">
              <p className="text-lg">Amount</p>
              <div className="flex justify-center items-center space-x-2">
                <img
                  src={upArrow}
                  alt="up-arrow"
                  className="w-5 h-5 cursor-pointer"
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 py-1 px-3">Milk</td>
          <td className="border-2 py-1 px-3">Grocery</td>
          <td className="border-2 py-1 px-3">40</td>
        </tr>
        <tr>
          <td className="border-2 py-1 px-3">Milk</td>
          <td className="border-2 py-1 px-3">Grocery</td>
          <td className="border-2 py-1 px-3">40</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="border-2 py-1 px-3 font-bold">Total</td>
          <td></td>
          <td className="border-2 py-1 px-3">780</td>
        </tr>
      </tfoot>
    </table>
  );
}
