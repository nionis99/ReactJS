import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import MovieCard from 'components/MovieCard';
import movieImageSrc from 'assets/images/not_found.png';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="w-1/4">
        <MovieCard {...args} />
      </div>
    </BrowserRouter>
  </Provider>
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
