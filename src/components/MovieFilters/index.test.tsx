import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { genres } from '../../../__mocks__/data';
import MovieFilters from '.';

describe('Movie filters', () => {
  const wrapper = (
    <BrowserRouter>
      <MovieFilters />
    </BrowserRouter>
  );

  it('should render movie filters component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('after selected genre it should be highlighted', () => {
    const { getByText } = render(wrapper);
    console.log(getByText(genres[0]).className);
    fireEvent.click(getByText(genres[0]));
    console.log(getByText(genres[0]).className);
    // expect(getByText(genres[0]).className).toContain('text-primary border-primary');
  });
});
