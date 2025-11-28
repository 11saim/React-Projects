import React, { useState } from "react";

export default function ExpenseForm({ setData }) {
  const [error, setError] = useState({});
  const [record, setRecord] = useState({
    // id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });
  const validations = {
    title: [
      { required: true, message: "Title Is Required!" },
      { minLength: 2, message: "Title Must Be At Least 2 Characters Long!" },
    ],
    category: [{ required: true, message: "Category Is Required!" }],
    amount: [
      { required: true, message: "Amount Is Required!" },
      { pattern: /^[1-9]\d*(\.\d+)?$/, message: "Enter Valid Amount!" },
    ],
  };
  const validate = (formData) => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      validations[key].forEach((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message;
          console.log(key);
          return;
        }

        if (rule.minLength && value.lenght < rule.minLength) {
          errors[key] = rule.message;
          return;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errors[key] = rule.message;
          return;
        }
      });
    });

    setError(errors);
    return errors;
  };
  return (
    <div className="flex flex-col w-full sm:w-[80%] lg:w-[40%]">
      <form
        className="lg:m-5 flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const formValidation = validate(record);
          console.log(formValidation);
          if (Object.keys(formValidation).length) return;

          setData((prev) => [...prev, record]);
          setRecord({
            // id: crypto.randomUUID(),
            title: "",
            category: "",
            amount: "",
          });
        }}
      >
        <label htmlFor="title">
          <h3 className="text-lg font-bold">Title</h3>
          <input
            className="border w-full outline-0 p-1"
            id="title"
            value={record.title}
            onChange={(e) => {
              setRecord((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </label>
        <label htmlFor="category">
          <h3 className="text-lg font-bold">Category</h3>
          <select
            className="border w-full outline-0 p-1 cursor-pointer"
            name="category"
            id="category"
            value={record.category}
            onChange={(e) => {
              setRecord((prev) => ({ ...prev, category: e.target.value }));
            }}
          >
            <option value="">Select Category</option>
            <option value="education">Education</option>
            <option value="bills">Bills</option>
            <option value="grocery">Grocery</option>
            <option value="sports">Sports</option>
            <option value="medicine">Medicine</option>
          </select>
        </label>
        <label htmlFor="amount">
          <h3 className="text-lg font-bold">Amount</h3>
          <input
            className="border w-full outline-0 p-1"
            id="amount"
            value={record.amount}
            onChange={(e) => {
              setRecord((prev) => ({
                ...prev,
                amount: e.target.value,
              }));
            }}
          />
        </label>
        <button className="mt-5 border w-full p-1 cursor-pointer font-bold text-lg">
          Add
        </button>
      </form>
    </div>
  );
}
