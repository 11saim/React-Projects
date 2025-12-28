import React, { useEffect, useRef, useState } from "react";
import upArrow from "../assets/up-arrow.png";
import downArrow from "../assets/down-arrow.png";

export default function ExpenseTable({
  data,
  categories,
  setData,
  dataAdded,
  setDataAdded,
  tempData,
  setTempData,
  clickedField,
  setClickField,
  newUpdatedValues,
  setNewUpdatedValues,
  expenseTableRef,
}) {
  let isSorted = useRef(false);
  let sortBy = useRef(null);
  const [currCategory, setCurrCategory] = useState("");

  function forTitle(ascending) {
    return ascending
      ? (a, b) => {
          return a.title.localeCompare(b.title);
        }
      : (a, b) => {
          return b.title.localeCompare(a.title);
        };
  }
  function forAmount(ascending) {
    return ascending
      ? (a, b) => {
          return a.amount - b.amount;
        }
      : (a, b) => {
          return b.amount - a.amount;
        };
  }
  function sortData(sortingMethod) {
    setData(
      [...data].sort((a, b) => {
        return sortingMethod(a, b);
      })
    );
  }
  function handleSorting(sortedIn, sortMethod) {
    if (isSorted.current && sortedIn === sortBy.current) {
      setData([...tempData]);
      isSorted.current = false;
      sortBy.current = null;
      return;
    }

    if (!isSorted.current) {
      setTempData([...data]);
      isSorted.current = true;
      sortBy.current = sortedIn;
    }

    sortData(sortMethod);

    sortBy.current = sortedIn;
  }

  useEffect(() => {
    if (isSorted.current) {
      if (sortBy.current === "descendingInTitle") {
        sortData(forTitle(false));
      } else if (sortBy.current === "ascendingInTitle") {
        sortData(forTitle(true));
      } else if (sortBy.current === "descendingInAmount") {
        sortData(forAmount(false));
      } else if (sortBy.current === "ascendingInAmount") {
        sortData(forAmount(true));
      }
    }
    setDataAdded(false);
  }, [dataAdded]);

  return (
    <div
      ref={expenseTableRef}
      className="expenseform w-full sm:w-[80%] lg:w-[40%]"
    >
      <div className="sorting-detail flex justify-between text-lg">
        <p>
          <span className="font-bold">Sorted In: </span>
          {sortBy.current
            ? (() => {
                const value = sortBy.current.split("In")[0];
                return value[0].toUpperCase() + value.slice(1);
              })()
            : "None"}
        </p>
        <p>
          <span className="font-bold">Sort By: </span>
          {sortBy.current ? sortBy.current.split("In")[1] : "None"}
        </p>
      </div>
      <table className="border-2 border-collapse w-full">
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
                    onClick={() => {
                      handleSorting("descendingInTitle", forTitle(false));
                    }}
                  />
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                    onClick={() => {
                      handleSorting("ascendingInTitle", forTitle(true));
                    }}
                  />
                </div>
              </div>
            </th>
            <th className="border-2 py-1 sm:px-2 w-1/3">
              <select
                className="w-full outline-0 p-1 cursor-pointer"
                name="category"
                id="category"
                onChange={(e) => {
                  setCurrCategory(e.target.value);
                }}
              >
                <option value="">All</option>
                {categories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
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
                    onClick={() => {
                      handleSorting("descendingInAmount", forAmount(false));
                    }}
                  />
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                    onClick={() => {
                      handleSorting("ascendingInAmount", forAmount(true));
                    }}
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            currCategory === "" ? (
              <tr
                onContextMenu={(e) => {
                  e.preventDefault();
                  setClickField(item.id);
                  setNewUpdatedValues({
                    title: item.title,
                    category: item.category,
                    amount: item.amount,
                  });
                }}
                key={item.id}
              >
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      autoFocus
                      type="text"
                      value={newUpdatedValues.title}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      type="text"
                      value={newUpdatedValues.category}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      type="text"
                      value={newUpdatedValues.amount}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          amount: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.amount
                  )}
                </td>
              </tr>
            ) : item.category === currCategory ? (
              <tr
                onContextMenu={(e) => {
                  e.preventDefault();
                  setClickField(item.id);
                  setNewUpdatedValues({
                    title: item.title,
                    category: item.category,
                    amount: item.amount,
                  });
                }}
                key={item.id}
              >
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      autoFocus
                      type="text"
                      value={newUpdatedValues.title}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.title
                  )}
                </td>
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      type="text"
                      value={newUpdatedValues.category}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td className="border-2 py-1 px-1 sm:px-3">
                  {clickedField === item.id ? (
                    <input
                      className="outline-0"
                      type="text"
                      value={newUpdatedValues.amount}
                      onChange={(e) =>
                        setNewUpdatedValues((prev) => ({
                          ...prev,
                          amount: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    item.amount
                  )}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-2 py-1 px-1 sm:px-3 font-bold">Total</td>
            <td></td>
            <td className="border-2 py-1 px-1 sm:px-3">
              {data.reduce((acc, item) => {
                return currCategory === ""
                  ? acc + parseFloat(item.amount)
                  : item.category === currCategory
                  ? acc + parseFloat(item.amount)
                  : acc + 0;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
