import { useEffect, useRef, useState } from "react";
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
  const contextMenuRef = useRef(null);
  const [contextMenuDetails, setContextMenuDetails] = useState({
    isOpen: false,
    xAxis: null,
    yAxis: null,
  });
  useEffect(() => {
    if (contextMenuRef.current) {
      const menu = contextMenuRef.current;
      if (contextMenuDetails.isOpen) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");

        menu.style.top = `${contextMenuDetails.yAxis}px`;
        menu.style.left = `${contextMenuDetails.xAxis}px`;
      } else {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
      }
    }
  }, [contextMenuDetails]);
  const [selectedOption, setSelectedOption] = useState(null);
  const beforeCategory = useRef(null);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (
          clickedField &&
          !expenseTableRef.current.contains(e.target) &&
          !contextMenuRef.current.contains(e.target)
        ) {
          setData((prev) =>
            prev.map((item) =>
              item.id === clickedField ? { ...item, ...newUpdatedValues } : item
            )
          );

          setCategories((prev) =>
            prev.map((item) =>
              item === beforeCategory.current ? newUpdatedValues.category : item
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
      className="p-3 sm:p-10 min-h-screen"
    >
      <div
        ref={contextMenuRef}
        className="border contextMenu absolute bg-white w-20 h-20 rounded p-2 space-y-2 hidden flex-col justify-center items-start"
      >
        <p
          onClick={() => {
            setContextMenuDetails({
              isOpen: false,
              xAxis: 0,
              yAxis: 0,
            });
            setSelectedOption("edit");
          }}
          className="border-b cursor-pointer"
        >
          Edit
        </p>
        <p
          onClick={() => {
            setContextMenuDetails({
              isOpen: false,
              xAxis: 0,
              yAxis: 0,
            });
            setData((prev) => prev.filter((item) => item.id !== clickedField));
          }}
          className="border-b cursor-pointer"
        >
          Delete
        </p>
      </div>
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
          setContextMenuDetails={setContextMenuDetails}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          beforeCategory={beforeCategory}
        />
      </div>
    </div>
  );
}

export default App;
