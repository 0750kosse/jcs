import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/jose c. sanchez/i);
  expect(title).toBeInTheDocument();
});
