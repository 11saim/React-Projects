import React from "react";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";

export default function ExpenseTable({ data, categories }) {
  return (
    <table className="border-2 border-collapse w-full sm:w-[80%] lg:w-[40%] mt-12">
      <thead>
        <tr>
          <th className="border-2 py-1 px-1 sm:px-3 w-1/3">
            <div className="flex justify-between items-center">
              <p className="text-md sm:text-lg">Title</p>
              <div className="flex justify-center items-center sm:space-x-2">
                <img
                  src={upArrow}
                  alt="up-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                />
              </div>
            </div>
          </th>
          <th className="border-2 py-1 sm:px-2 w-1/3">
            <select
              className="w-full outline-0 p-1 cursor-pointer"
              name="category"
              id="category"
            >
              <option value="">All</option>
              {categories.map((category) => {
                return <option value={category}> {category}</option>;
              })}
            </select>
          </th>
          <th className="border-2 py-1 px-1 sm:px-2 w-1/3">
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-md">Amount</p>
              <div className="flex justify-center items-center sm:space-x-1">
                <img
                  src={upArrow}
                  alt="up-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td className="border-2 py-1 px-1 sm:px-3">{item.title}</td>
              <td className="border-2 py-1 px-1 sm:px-3">{item.category}</td>
              <td className="border-2 py-1 px-1 sm:px-3">{item.amount}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td className="border-2 py-1 px-1 sm:px-3 font-bold">Total</td>
          <td></td>
          <td className="border-2 py-1 px-1 sm:px-3">0</td>
        </tr>
      </tfoot>
    </table>
  );
}
