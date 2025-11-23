import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Track Your Expense</h1>
      <div className="flex items-start justify-around mt-10">
        <ExpenseForm />
        <ExpenseTable />
      </div>
    </div>
  );
}

export default App;
