import React, { useEffect, useRef } from "react";
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
}) {
  let isSorted = useRef(false);
  let sortBy = useRef(null);
  useEffect(() => {
    if (isSorted.current) {
      if (sortBy.current === "descendingInTitle") {
        setData(
          [...data].sort((a, b) => {
            return b.title.localeCompare(a.title);
          })
        );
      } else if (sortBy.current === "ascendingInTitle") {
        setData(
          [...data].sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
        );
      } else if (sortBy.current === "descendingInAmount") {
        setData(
          [...data].sort((a, b) => {
            return b.amount - a.amount;
          })
        );
      } else if (sortBy.current === "ascendingInAmount") {
        setData(
          [...data].sort((a, b) => {
            return a.amount - b.amount;
          })
        );
      }
    }
    setDataAdded(false);
  }, [dataAdded]);
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

    setData(
      [...data].sort((a, b) => {
        return sortMethod(a, b);
      })
    );

    sortBy.current = sortedIn;
  }
  return (
    <table className="border-2 border-collapse w-full sm:w-[80%] lg:w-[40%] mt-12">
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
                    handleSorting("descendingInTitle", (a, b) => {
                      return b.title.localeCompare(a.title);
                    });
                  }}
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                  onClick={() => {
                    handleSorting("ascendingInTitle", (a, b) => {
                      return a.title.localeCompare(b.title);
                    });
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
                    handleSorting("descendingInAmount", (a, b) => {
                      return b.amount - a.amount;
                    });
                  }}
                />
                <img
                  src={downArrow}
                  alt="down-arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
                  onClick={() => {
                    handleSorting("ascendingInAmount", (a, b) => {
                      return a.amount - b.amount;
                    });
                  }}
                />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td className="border-2 py-1 px-1 sm:px-3">{item.title}</td>
              <td className="border-2 py-1 px-1 sm:px-3">{item.category}</td>
              <td className="border-2 py-1 px-1 sm:px-3">{item.amount}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td className="border-2 py-1 px-1 sm:px-3 font-bold">Total</td>
          <td></td>
          <td className="border-2 py-1 px-1 sm:px-3">
            {data.reduce((acc, item) => {
              return acc + parseFloat(item.amount);
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
