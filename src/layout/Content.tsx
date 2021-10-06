import React, { HTMLAttributes } from 'react';
import MovieCard from 'components/MovieCard';
import NavigationTabs from 'components/MovieFilters';
import { fakeMovieData } from '../../__mocks__/data';

const Content = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center justify-center bg-content w-full h-auto text-white ${className}`} {...restProps}>
    <div className="flex-col">
      <NavigationTabs />
      <div className="py-4">
        <span className="font-bold">{fakeMovieData.length}</span> <span>movies found</span>
      </div>
      <div className="grid gap-4 grid-cols-4 pb-6">
        {fakeMovieData.map((movie, index) => (
          <MovieCard
            key={index}
            imageSource={movie.imageSource}
            title={movie.title}
            years={movie.years}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Content;
