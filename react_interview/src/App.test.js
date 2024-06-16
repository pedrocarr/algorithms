import { render, screen } from '@testing-library/react';
import { SecondQuestion } from './SecondQuestion';

test('renders learn react link', () => {
  render(<SecondQuestion />);
  const linkElement = screen.getByText(/Debouncer/i);
  expect(linkElement).toBeInTheDocument();
});
