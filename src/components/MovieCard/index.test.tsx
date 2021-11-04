import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MovieMockData } from '../../../__mocks__/data';
import MovieCard from '.';
import store from 'store';

describe('Movie card component', () => {
  const onClick = jest.fn();
  const wrapper = (
    <Provider store={store}>
      <BrowserRouter>
        <MovieCard movie={MovieMockData} onClick={onClick} />
      </BrowserRouter>
    </Provider>
  );

  it('should render movie card component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
