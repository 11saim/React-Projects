import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";

export default function ExpenseForm({ setData }) {
  const [error, setError] = useState({});
  const [record, setRecord] = useState({
    id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
        <Input title={"Title"} value={record.title} onChange={handleChange} />

        <Select
          title={"Category"}
          value={record.category}
          onChange={handleChange}
        />

        <Input title={"Amount"} value={record.amount} onChange={handleChange} />
        <button className="mt-5 border w-full p-1 cursor-pointer font-bold text-lg">
          Add
        </button>
      </form>
    </div>
  );
}
