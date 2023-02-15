import { useEffect, useState } from 'react';
import classes from './App.module.css';

function App() {
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
    <main className={classes.container} data-testid="app-component">
      <h1 className={classes.title}>React Timer</h1>
      <section className={classes.timer} data-testid="timer">
        <p className={classes['timer-clock']} data-testid="timer-clock">{timer}</p>
        <div className={classes.controls} data-testid="timer-controls">
          <button 
            type='button' 
            data-testid="start-timer"
            onClick={startTimerHandler}
          >
            Start
          </button>
          <button 
            type='button' 
            data-testid="stop-timer"
            onClick={stopTimerHandler}
          >
            Stop
          </button>
          <button 
            type='button' 
            data-testid="reset-timer"
            onClick={resetTimerHandler}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
