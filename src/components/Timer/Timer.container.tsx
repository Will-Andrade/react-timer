import { useEffect, useState } from "react";
import TimerComponent from "./Timer.component";

export default function TimerContainer() {
  const [timer, setTimer] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const startTimerHandler = () => {
    setActive(true);
  };

  const stopTimerHandler = () => {
    setActive(false);
  };

  const resetTimerHandler = () => {
    setActive(false);
    setTimer(0);
  };

  useEffect(() => {
    let intervalID: ReturnType<typeof setInterval> | undefined;

    if (active) {
      intervalID = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1)
      }, 1000);
    }
    
    return () => clearInterval(intervalID);
  }, [active]);

  return (
    <TimerComponent 
      timer={timer}
      startTimerHandler={startTimerHandler} 
      stopTimerHandler={stopTimerHandler}
      resetTimerHandler={resetTimerHandler}
    />
  );
};
