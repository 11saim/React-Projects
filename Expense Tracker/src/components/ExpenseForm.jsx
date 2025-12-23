import React, { useState } from "react";
import Input from "./Input";

export default function ExpenseForm({
  setData,
  setCategories,
  categories,
  setDataAdded,
  setTempData,
}) {
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
      if (key === "id") return false;
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
    if (Object.keys(formValidation).length) return;

    const isCategoryExists = categories.some(
      (category) => category.toLowerCase() === record.category.toLowerCase()
    );

    if (!isCategoryExists) {
      setCategories((prev) => [...prev, record.category]);
    }
    setData((prev) => [...prev, record]);
    setTempData((prev) => [...prev, record]);
    setRecord({
      id: crypto.randomUUID(),
      title: "",
      category: "",
      amount: "",
    });
    setError({});
    setDataAdded(true);
  }
  return (
    <div className="flex flex-col w-full sm:w-[80%] lg:w-[40%]">
      <form
        className=" flex flex-col space-y-3"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Input
          title={"Title"}
          value={record.title}
          onChange={handleChange}
          error={error.title}
          type={"text"}
        />

        <Input
          title={"Category"}
          value={record.category}
          onChange={handleChange}
          error={error.category}
          type={"text"}
        />

        <Input
          title={"Amount"}
          value={record.amount}
          onChange={handleChange}
          error={error.amount}
          type={"number"}
        />

        <button className="mt-5 border w-full p-1 cursor-pointer font-bold text-lg">
          Add
        </button>
      </form>
    </div>
  );
}
