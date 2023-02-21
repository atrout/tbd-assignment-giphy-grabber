import { render, within } from '@testing-library/react';
import PreviousSearches from './PreviousSearches';

test('renders a list of previous searches', () => {
  const previousSearches = ['dogs', 'cats', 'spiders'];
  const { container } = render(<PreviousSearches previousSearches={previousSearches}/>);

  expect(container.getElementsByClassName('previous-searches').length).toBe(1);
  expect(container.getElementsByTagName('li').length).toBe(3);
  const { getAllByRole } = within(container);
  const items = getAllByRole('listitem');

  expect(items[0].textContent).toEqual('dogs');
});
