import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App component', () => {
  it('should render the App component', () => {
    render (<App />);

    const app = screen.getByTestId('app-component');

    expect(app).toBeInTheDocument();
  });
  
  it('should render the Timer component', () => {
    render(<App />);

    const timer = screen.getByTestId('timer');

    expect(timer).toBeInTheDocument();
  });

  it('should render the Timer controls', () => {
    render (<App />);

    const timerControls = screen.getByTestId('timer-controls');
    const startTimer = screen.getByTestId('start-timer');
    const stopTimer = screen.getByTestId('stop-timer');
    const resetTimer = screen.getByTestId('reset-timer');

    expect(timerControls).toBeInTheDocument();
    expect(startTimer).toBeInTheDocument();
    expect(stopTimer).toBeInTheDocument();
    expect(resetTimer).toBeInTheDocument();
  });

  it('should render the Timer clock', () => {
    render(<App />);

    const clock = screen.getByTestId('timer-clock');

    expect(clock).toBeInTheDocument();
  });

  it('should start Timer on "start" click', async () => {
    render(<App />);

    const startTimer = screen.getByTestId('start-timer');
    const timerClock = screen.getByTestId('timer-clock');

    fireEvent.click(startTimer);
    timerClock.textContent = '1';

    expect(timerClock.textContent).toBe('1')
  });
});
