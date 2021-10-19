import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieFilters from 'components/MovieFilters';
import { MoviePageProvider } from 'contexts/MoviePageProvider';

export default {
  title: 'Components',
  component: MovieFilters,
} as ComponentMeta<typeof MovieFilters>;

const Template: ComponentStory<typeof MovieFilters> = () => (
  <MoviePageProvider>
    <MovieFilters />
  </MoviePageProvider>
);

export const Filters = Template.bind({});
Filters.args = {};
