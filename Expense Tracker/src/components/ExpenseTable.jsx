import React from "react";

export default function ExpenseTable() {
  return (
    <table className="border-2 border-collapse w-[50%]">
      <thead>
        <tr>
          <th className="border-2 p-2">Title </th>
          <th className="border-2 p-2">Category</th>
          <th className="border-2 p-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2 p-2">Milk</td>
          <td className="border-2 p-2">Grocery</td>
          <td className="border-2 p-2">40</td>
        </tr>
        <tr>
          <td className="border-2 p-2">Milk</td>
          <td className="border-2 p-2">Grocery</td>
          <td className="border-2 p-2">40</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="border-2 p-2 font-bold">Total</td>
          <td></td>
          <td className="border-2 p-2">780</td>
        </tr>
      </tfoot>
    </table>
  );
}
