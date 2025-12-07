import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [data, setData] = useState([
    {
      title: "Laptop",
      category: "Electronics",
      amount: 1200,
    },
    {
      title: "Shoes",
      category: "Fashion",
      amount: 80,
    },
    {
      title: "Coffee Maker",
      category: "Home Appliances",
      amount: 50,
    },
    {
      title: "Backpack",
      category: "Accessories",
      amount: 25,
    },
    {
      title: "Book",
      category: "Education",
      amount: 15,
    },
  ]);
  const [categories, setCategories] = useState([
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Accessories",
    "Education",
  ]);
  return (
    <div className="p-3 sm:p-10">
      <h1 className="text-4xl font-bold">Track Your Expense</h1>
      <div className="flex items-center lg:items-start justify-center lg:justify-around mt-10 flex-col lg:flex-row">
        <ExpenseForm
          setData={setData}
          setCategories={setCategories}
          categories={categories}
        />
        <ExpenseTable data={data} setData={setData} categories={categories} />
      </div>
    </div>
  );
}

export default App;
