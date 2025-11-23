import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="flex items-start justify-around py-10">
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
