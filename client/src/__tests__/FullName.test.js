import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FullName from '../components/FullName';

afterEach(cleanup);

it('matches snapshot test', () => {
  const { asFragment } = render(<FullName />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders Full name after component mounts to the dom', async () => {
  const { findByText, queryByText } = render(<FullName />);

  const beforeUseEffect = queryByText(/Jane Smith Doe/i);
  expect(beforeUseEffect).not.toBeInTheDocument();

  const afterUseEffect = findByText(/Jane Smith Doe/i);
  expect(await afterUseEffect).toBeInTheDocument();
});
