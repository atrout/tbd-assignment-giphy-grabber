import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Giphy Grabber header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GIPHY GRABBER/i);
  expect(headerElement).toBeInTheDocument();
});
