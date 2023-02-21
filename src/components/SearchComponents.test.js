import { render, screen } from '@testing-library/react';
import { SearchContextManager } from '@giphy/react-components';
import SearchComponents from './SearchComponents';

test('renders Search Components', () => {
  const { container } = render(
    <SearchContextManager>
      <SearchComponents />
    </SearchContextManager>);
  expect(container.getElementsByClassName('giphy-search-bar').length).toBe(1);
  expect(container.getElementsByClassName('previous-searches').length).toBe(1);
  expect(container.getElementsByClassName('giphy-grid').length).toBe(1);

  const searchTermElements = screen.getAllByText(/trending/i);
  expect(searchTermElements.length).toBe(2);
});