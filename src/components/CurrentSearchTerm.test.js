import { render, screen } from '@testing-library/react';
import CurrentSearchTerm from './CurrentSearchTerm';

test('renders showing results title', () => {
  const searchKey = 'flowers';
  render(<CurrentSearchTerm searchKey={searchKey}/>);
  const titleElement = screen.getByText(/Showing results for:/i);
  expect(titleElement).toBeInTheDocument();

  const searchTermElement = screen.getByText(/flowers/i);
  expect(searchTermElement).toBeInTheDocument();
});
