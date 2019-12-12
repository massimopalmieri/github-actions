import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the correct path to App.js', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('src/App.js');
  expect(linkElement).toBeInTheDocument();
});
