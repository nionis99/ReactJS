import React, { useState } from 'react';
import Dots from 'assets/icons/dots.svg';
import Movie from 'types/Movie';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const { imageSource, title, years, description } = movie;
  const [isBlurred, setIsBlurred] = useState(false);

  const onCardMouseEnter = () => setIsBlurred(true);
  const onCardMouseLeave = () => setIsBlurred(false);

  return (
    <div
      className="flex-col cursor-pointer text-white text-opacity-75"
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
      onClick={onClick}
    >
      <div className="relative pb-4">
        {isBlurred && (
          <div className="absolute top-2 right-2">
            <Dots />
          </div>
        )}
        <img src={imageSource} alt={title} />
      </div>
      <p className="flex w-full">
        <span className="font-bold">{title}</span>
        <span className="ml-auto px-2 py-1 text-xs border-2 rounded-lg border-gray-400 border-opacity-50">{years}</span>
      </p>
      <small>{description}</small>
    </div>
  );
};

export default MovieCard;
