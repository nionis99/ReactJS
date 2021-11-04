import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderWithDetails from 'layout/MovieDetailsHeader';
import movieImageSrc from 'assets/images/not_found.png';
import { Provider } from 'react-redux';
import store from '../../store';

export default {
  title: 'Components/Layout',
  component: HeaderWithDetails,
} as ComponentMeta<typeof HeaderWithDetails>;

const Template: ComponentStory<typeof HeaderWithDetails> = (args) => (
  <Provider store={store}>
    <HeaderWithDetails {...args} />
  </Provider>
);

export const MovieDetailsHeader = Template.bind({});
MovieDetailsHeader.args = {
  movie: {
    id: 0,
    poster_path: movieImageSrc,
    title: 'Kill Bill 2',
    genres: ['Action', 'Adventure'],
    release_date: '1994-04-03',
    runtime: 120,
    vote_average: 7.8,
    overview: 'This movie is just for test purpose',
  },
};
