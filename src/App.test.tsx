import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('check first div text', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome')).toBeInTheDocument();
});
