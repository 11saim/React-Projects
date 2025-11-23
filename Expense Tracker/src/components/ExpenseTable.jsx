import React from "react";

export default function ExpenseTable() {
  return (
    <table className="border-2 border-collapse w-[40%] mt-12">
      <thead>
        <tr>
          <th className="border-2 p-1">Title </th>
          <th className="border-2 p-1">Category</th>
          <th className="border-2 p-1">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 p-1">Milk</td>
          <td className="border-2 p-1">Grocery</td>
          <td className="border-2 p-1">40</td>
        </tr>
        <tr>
          <td className="border-2 p-1">Milk</td>
          <td className="border-2 p-1">Grocery</td>
          <td className="border-2 p-1">40</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="border-2 p-1 font-bold">Total</td>
          <td></td>
          <td className="border-2 p-1">780</td>
        </tr>
      </tfoot>
    </table>
  );
}
