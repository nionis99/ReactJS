import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import constants from 'utils/Constants';

test('check first div text', () => {
  const { getByText } = render(<App />);
  expect(getByText(constants.headerTitle)).toBeInTheDocument();
});
