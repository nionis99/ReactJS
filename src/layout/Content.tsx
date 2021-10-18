import React, { HTMLAttributes } from 'react';
import MovieCard from 'components/MovieCard';
import NavigationTabs from 'components/MovieFilters';
import Loader from 'components/Loader';
import { Movie } from 'reducers/movieReducers/types';

interface MovieContentProps extends HTMLAttributes<HTMLDivElement> {
  movies: Movie[] | [];
  selectedMovie?: Movie;
  setSelectedMovie: (movie?: Movie) => void;
  totalMovies: number;
  getMoviesLoading: boolean;
}

const Content = ({
  movies,
  totalMovies,
  selectedMovie,
  setSelectedMovie,
  getMoviesLoading,
  className = '',
  ...restProps
}: MovieContentProps) => (
  <div
    className={`flex-grow items-center justify-center bg-content px-4 md:px-16 text-white mt-2.5 ${className}`}
    {...restProps}
  >
    {getMoviesLoading ? (
      <Loader className="w-32 h-32" />
    ) : (
      <div className="flex-col">
        <NavigationTabs />
        <div className="py-4">
          <span className="font-bold">{totalMovies}</span> <span>movies found</span>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      </div>
      // TODO : Pagination
    )}
  </div>
);

export default Content;
