import { render, screen } from '@testing-library/react';
import GiphyGrabber from './GiphyGrabber';

test('renders learn react link', () => {
  render(<GiphyGrabber />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
