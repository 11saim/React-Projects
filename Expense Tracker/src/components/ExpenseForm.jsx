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
      { pattern: /^(0|[1-9]\d*)(\.\d+)?$/, message: "Enter Valid Amount!" },
    ],
  };
  const validate = (formData) => {
    const errors = {};
    Object.entries(formData).forEach(([key, value]) => {
      console.log("Key: " + key, "Value: " + value);
      validations[key].some((rule) => {
        if (rule.required && !value) {
          errors[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errors[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errors[key] = rule.message;
          return true;
        }
      });
    });

    setError(errors);
    return errors;
  };

  function handleChange(field) {
    const { id, value } = field;
    setRecord((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
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
  }
  return (
    <div className="flex flex-col w-full sm:w-[80%] lg:w-[40%]">
      <form
        className="lg:m-5 flex flex-col space-y-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="title">
          <h3 className="text-lg font-bold">Title</h3>
          <input
            className="border w-full outline-0 p-1"
            id="title"
            value={record.title}
            onChange={(e) => {
              handleChange(e.target);
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
              handleChange(e.target);
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
              handleChange(e.target);
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
