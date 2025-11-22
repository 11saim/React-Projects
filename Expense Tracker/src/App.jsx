import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <>
      <h1>Track Your Expense</h1>
      <ExpenseForm />
      <ExpenseTable />
    </>
  );
}

export default App;
