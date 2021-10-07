import React, { HTMLAttributes } from 'react';
import MovieCard from 'components/MovieCard';
import NavigationTabs from 'components/MovieFilters';
import Movie from 'types/Movie';
import { fakeMovieData } from '../../__mocks__/data';

interface MovieContentProps extends HTMLAttributes<HTMLDivElement> {
  onSelectedClick: (movie?: Movie) => void;
}

const Content = ({ onSelectedClick, className = '', ...restProps }: MovieContentProps) => (
  <div
    className={`flex items-center justify-center bg-content w-full px-16 h-auto text-white ${className}`}
    {...restProps}
  >
    <div className="flex-col">
      <NavigationTabs />
      <div className="py-4">
        <span className="font-bold">{fakeMovieData.length}</span> <span>movies found</span>
      </div>
      <div className="grid gap-4 grid-cols-4 pb-6">
        {fakeMovieData.map((movie, index) => (
          <MovieCard key={index} movie={movie} onClick={() => onSelectedClick(movie)} />
        ))}
      </div>
    </div>
  </div>
);

export default Content;
