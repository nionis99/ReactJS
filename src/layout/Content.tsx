import React, { HTMLAttributes } from 'react';
import MovieCard from 'components/MovieCard';
import NavigationTabs from 'components/Navigation';
import KillBill from 'assets/images/movie1.png';
import Bohemia from 'assets/images/movie2.png';
import PulpFiction from 'assets/images/movie3.png';
import Inception from 'assets/images/movie4.png';
import Dogs from 'assets/images/movie5.png';
import Avengers from 'assets/images/movie6.png';

const fakeMovieData = [
  { imageSource: KillBill, title: 'Kill Bill: Vol 2', description: 'Oscar winning Movie', years: 1994 },
  { imageSource: Avengers, title: 'Avengers: War of Infinity', description: 'Action & Adventure', years: 2004 },
  { imageSource: Bohemia, title: 'Bohemian Rhapsody', description: 'Drama, Biography, Music', years: 2003 },
  { imageSource: PulpFiction, title: 'Pulp Fiction', description: 'Action & Adventure', years: 2004 },
  { imageSource: Inception, title: 'Inception', description: 'Action & Adventure', years: 2003 },
  { imageSource: Dogs, title: 'Reservoir dogs', description: 'Oscar winning Movie', years: 1994 },
  { imageSource: Avengers, title: 'Avengers: War of Infinity', description: 'Action & Adventure', years: 2004 },
  { imageSource: Inception, title: 'Inception', description: 'Action & Adventure', years: 2003 },
];

const Content = ({ className = '', ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex items-center justify-center bg-content w-full h-auto text-white ${className}`} {...restProps}>
    <div className="flex-col">
      <NavigationTabs />
      <div className="grid gap-4 grid-cols-4 py-5">
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
