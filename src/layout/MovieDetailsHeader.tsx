import React, { HTMLAttributes, useEffect } from 'react';
import SearchButton from 'assets/icons/searchButton.svg';
import Movie from 'types/Movie';

interface MovieDetailsHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onSearchClick: () => void;
  movie: Movie;
}

const MovieDetailsHeader = ({ onSearchClick, movie, className = '', ...rest }: MovieDetailsHeaderProps) => {
  const { imageSource, title, genre, years, description, rating, duration } = movie;
  const hours = `${(duration / 60).toFixed(0)}h`;
  const minutes = `${(duration % 60).toString()}min`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);

  return (
    <header className={`flex-col bg-content py-5 px-16 text-white  ${className}`} {...rest}>
      <div className="flex w-full justify-between items-center">
        <span className="font-light text-primary">netflixroulette</span>
        <span className="ml-auto">
          <SearchButton className="cursor-pointer" onClick={onSearchClick} />
        </span>
      </div>
      <div className="flex pt-6">
        <div className="w-1/3">
          <img alt={title} src={imageSource} />
        </div>
        <div className="w-2/3">
          <p>
            {title}, {rating}
          </p>
          <p>
            {genre}, {years}, {hours} {minutes},
          </p>
          <p>{description}</p>
        </div>
      </div>
    </header>
  );
};

export default MovieDetailsHeader;
