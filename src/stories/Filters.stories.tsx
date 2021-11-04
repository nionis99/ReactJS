import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import MovieFilters from 'components/MovieFilters';

export default {
  title: 'Components',
  component: MovieFilters,
} as ComponentMeta<typeof MovieFilters>;

const Template: ComponentStory<typeof MovieFilters> = () => (
  <BrowserRouter>
    <MovieFilters />
  </BrowserRouter>
);

export const Filters = Template.bind({});
Filters.args = {};
