import { render, screen } from '@testing-library/react';
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
});
