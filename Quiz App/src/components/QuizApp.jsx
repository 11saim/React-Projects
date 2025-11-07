import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function QuizApp() {
  const [data, setData] = useState(null);
  const [currQues, setcurrQues] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("../../public/data.json");
        const jsonData = await response.json();
        setData([...jsonData]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return data ? (
    <div className="bg-[#430d97] w-96 rounded-3xl m-2 py-4">
      <Header currQues={currQues} totalQues={data.length} />
      <Main />
      <Button />
    </div>
  ) : (
    <Loader />
  );
}

export default QuizApp;
