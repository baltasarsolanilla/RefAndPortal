import { useRef, useState } from "react";
import ResultModal from "./ResultModal";



const TimerChallenge = ({ title, targetTime }) => {
  const dialogRef = useRef();
  const timerRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    timerRef.current = null;
    dialogRef.current.open();
  }

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    dialogRef.current.open();
  };

  const handleReset = () => {
    setTimeRemaining(targetTime*1000);
  }

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={dialogRef}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {!isTimerActive ? "Start" : "Stop"} challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running..." : "Timer inactive"}
        </p>
        {/* <p>
          {formatTime(timeLeft)}
        </p> */}
      </section>
    </>
  );
};

export default TimerChallenge;
