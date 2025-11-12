import React, { useEffect, useRef, useState } from "react";
import stopwatch from "../assets/stopwatch.png";

export default function Timer({ currQues, isAnswered, setCurrQues }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const timerIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const timerCycleCompleted = useRef(false);
  useEffect(() => {
    if (isAnswered) return;

    setTimeLeft(17999);
    startTimeRef.current = performance.now();
    timerCycleCompleted.current = false;
    timerIdRef.current = setInterval(() => {
      const elapsedTime = performance.now() - startTimeRef.current;
      startTimeRef.current = performance.now();
      setTimeLeft((prevTime) => {
        const newTime = prevTime - elapsedTime;
        if (newTime <= 0 && !timerCycleCompleted.current) {
          clearInterval(timerIdRef.current);
          setCurrQues((prev) => prev + 1);
          timerCycleCompleted.current = true;
          return 0;
        }
        return newTime;
      });
    }, 100);
    return () => clearInterval(timerIdRef.current);
  }, [isAnswered, currQues]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);
  return (
    <div className="w-27 rounded-[50px] px-2 py-1 bg-[#8538f8] flex justify-between items-center">
      <img className="w-8 h-8" src={stopwatch} alt="Stop-Watch" />
      <p className="text-white text">
        {seconds.toString().padStart(2, "0") +
          " : " +
          milliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
