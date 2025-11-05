import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function QuizApp() {
  return (
    <div className="bg-[#430d97] w-96 rounded-3xl m-2 py-4">
      <Header />
      <Main />
    </div>
  );
}

export default QuizApp;
