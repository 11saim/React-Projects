import { useRef, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      title: "Laptop",
      category: "Electronics",
      amount: 1200,
    },
    {
      id: crypto.randomUUID(),
      title: "Shoes",
      category: "Fashion",
      amount: 80,
    },
    {
      id: crypto.randomUUID(),
      title: "Coffee Maker",
      category: "Home Appliances",
      amount: 50,
    },
    {
      id: crypto.randomUUID(),
      title: "Backpack",
      category: "Accessories",
      amount: 25,
    },
    {
      id: crypto.randomUUID(),
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
  const expenseTableRef = useRef(null);
  const [dataAdded, setDataAdded] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [clickedField, setClickField] = useState(null);
  const [newUpdatedValues, setNewUpdatedValues] = useState({
    title: "",
    category: "",
    amount: "",
  });
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (clickedField && !expenseTableRef.current.contains(e.target)) {
          setData((prev) =>
            prev.map((item) =>
              item.id === clickedField ? { ...item, ...newUpdatedValues } : item
            )
          );

          setClickField(null);
          setNewUpdatedValues({
            title: "",
            category: "",
            amount: "",
          });
        }
      }}
      className="p-3 sm:p-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold">Track Your Expense</h1>
      <div className="flex items-center justify-center lg:justify-around flex-col lg:flex-row mt-10">
        <ExpenseForm
          setData={setData}
          setCategories={setCategories}
          categories={categories}
          setDataAdded={setDataAdded}
          setTempData={setTempData}
        />
        <ExpenseTable
          data={data}
          setData={setData}
          categories={categories}
          dataAdded={dataAdded}
          setDataAdded={setDataAdded}
          tempData={tempData}
          setTempData={setTempData}
          clickedField={clickedField}
          setClickField={setClickField}
          newUpdatedValues={newUpdatedValues}
          setNewUpdatedValues={setNewUpdatedValues}
          expenseTableRef={expenseTableRef}
        />
      </div>
    </div>
  );
}

export default App;
