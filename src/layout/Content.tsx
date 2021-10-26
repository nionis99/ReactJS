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
  getMoviesError: string[] | [];
}

const Content = ({
  movies,
  totalMovies,
  selectedMovie,
  setSelectedMovie,
  getMoviesLoading,
  getMoviesError,
  className = '',
  ...restProps
}: MovieContentProps) => {
  const renderContent = () => {
    if (getMoviesLoading) return <Loader className="w-32 h-32" />;
    if (getMoviesError)
      return getMoviesError.map((error, index) => (
        <p key={index} className="text-red-500 text-xs italic">
          {error}
        </p>
      ));

    return (
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
    );
  };

  return (
    <div
      className={`flex-grow items-center justify-center bg-content px-4 md:px-16 text-white mt-2.5 ${className}`}
      {...restProps}
    >
      {renderContent()}
    </div>
  );
};

export default Content;
