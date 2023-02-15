import { render, screen } from '@testing-library/react';
import Timer from '.';

describe('Timer component', () => {
  it('should render the Timer controls', () => {
    render (<Timer />);

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
    render(<Timer />);

    const clock = screen.getByTestId('timer-clock');

    expect(clock).toBeInTheDocument();
  });
});
