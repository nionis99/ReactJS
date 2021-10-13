import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCard from 'components/MovieCard';
import movieImageSrc from 'assets/images/movie1.png';

export default {
  title: 'Components',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <div className="w-1/4">
    <MovieCard {...args} />
  </div>
);

export const MovieItem = Template.bind({});
MovieItem.args = {
  movie: {
    id: 1,
    title: 'X-Man',
    poster_path: movieImageSrc,
    overview: 'Movie about mutants',
    release_date: '2016',
    vote_average: 7.8,
    runtime: 160,
    genres: ['Action', 'Adventure'],
  },
};
