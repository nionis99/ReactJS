import React from 'react';

interface MovieCardProps {
  imageSource: string;
  title: string;
  years: number;
  description: string;
}

const MovieCard = ({ imageSource, title, years, description }: MovieCardProps) => (
  <div className="flex-col">
    <div className="w-auto pb-4">
      <img src={imageSource} />
    </div>
    <p className="flex w-full">
      <span>{title}</span>
      <span className="ml-auto px-2 py-1 text-xs border-2 rounded-lg border-gray-500">{years}</span>
    </p>
    <small>{description}</small>
  </div>
);

export default MovieCard;
