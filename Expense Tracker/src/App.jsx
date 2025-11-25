import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <div className="p-3 sm:p-10">
      <h1 className="text-4xl font-bold">Track Your Expense</h1>
      <div className="flex items-center lg:items-start justify-center lg:justify-around mt-10 flex-col lg:flex-row">
        <ExpenseForm />
        <ExpenseTable />
      </div>
    </div>
  );
}

export default App;
