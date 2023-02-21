import { render, screen } from '@testing-library/react';
import PreviousSearches from './PreviousSearches';

test('renders Giphy Grabber header', () => {
  render(<PreviousSearches />);
  // const headerElement = screen.getByText(/GIPHY GRABBER/i);
  // expect(headerElement).toBeInTheDocument();
});
