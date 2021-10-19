import React, { HTMLAttributes } from 'react';
import { Movie } from 'reducers/movieReducers/types';
import MovieCard from 'components/MovieCard';
import NavigationTabs from 'components/MovieFilters';

interface MovieContentProps extends HTMLAttributes<HTMLDivElement> {
  movies: Movie[] | [];
  selectedMovie?: Movie;
  setSelectedMovie: (movie?: Movie) => void;
  totalMovies: number;
  getMoviesLoading: boolean;
  getMoviesError: string[] | [];
}

const Content = ({
  movies,
  totalMovies,
  selectedMovie,
  setSelectedMovie,
  getMoviesLoading,
  getMoviesError,
  ...restProps
}: MovieContentProps) => (
  <div className="flex-grow items-center justify-center bg-content px-4 md:px-16 text-white mt-2.5" {...restProps}>
    <div className="flex-col items-center justify-center">
      <NavigationTabs />
      <div className="flex flex-row py-4">
        <span className="font-bold mr-2">{totalMovies}</span>
        <span>movies found</span>
        {getMoviesLoading && (
          <div className="ml-auto self-center animate-spin rounded-full border-b-2 border-white w-4 h-4" />
        )}
      </div>
      {getMoviesError.length > 0 ? (
        getMoviesError.map((error, index) => (
          <p key={index} className="text-red-500 text-xs italic">
            {error}
          </p>
        ))
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Content;
