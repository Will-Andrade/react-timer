import classes from './Timer.module.css';

type TimerComponentProps = {
  timer: number;
  startTimerHandler: () => void;
  stopTimerHandler: () => void;
  resetTimerHandler: () => void;
};

export default function TimerComponent({
  timer,
  startTimerHandler,
  stopTimerHandler,
  resetTimerHandler
}: TimerComponentProps) {
  return (
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
  );
};
