import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Loader from "./Loader";
import Result from "./Result";
import { useEffect, useState } from "react";

function QuizApp() {
  const [data, setData] = useState(null);
  const [currQues, setCurrQues] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
    notAnswered: 0,
  });
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
    currQues <= 10 ? (
      <div className="bg-[#430d97] w-96 rounded-3xl m-2 py-4">
        <Header
          currQues={currQues}
          totalQues={data.length}
          isAnswered={isAnswered}
          setCurrQues={setCurrQues}
          setResult={setResult}
        />
        <Main
          question={data[currQues - 1]["question"]}
          options={data[currQues - 1]["options"]}
          correctOption={data[currQues - 1]["answer"]}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          setResult={setResult}
        />
        <Button
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          setCurrQues={setCurrQues}
        />
      </div>
    ) : (
      <Result result={result} setResult={setResult} setCurrQues={setCurrQues} />
    )
  ) : (
    <Loader />
  );
}

export default QuizApp;
