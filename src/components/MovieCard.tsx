import React, { useState } from 'react';
import Dots from 'assets/icons/dots.svg';
import XIcon from 'assets/icons/x.svg';

interface MovieCardProps {
  imageSource: string;
  title: string;
  years: number;
  description: string;
}

const MovieCard = ({ imageSource, title, years, description }: MovieCardProps) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [hasMoreActionSelected, setHasMoreActionSelected] = useState(false);

  const onMoreActionClicked = () => setHasMoreActionSelected(true);
  const onMoreActionClose = () => setHasMoreActionSelected(false);
  const onCardMouseEnter = () => setIsBlurred(true);
  const onCardMouseLeave = () => {
    if (hasMoreActionSelected) setHasMoreActionSelected(false);
    setIsBlurred(false);
  };

  return (
    <div
      className="flex-col cursor-pointer text-white text-opacity-75"
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      <div className="relative pb-4">
        {isBlurred && (
          <>
            <div className="absolute top-2 right-2" onClick={onMoreActionClicked}>
              <Dots />
            </div>
            {hasMoreActionSelected && (
              <ul className="absolute w-48 right-2 py-1 mt-2 bg-white bg-content rounded shadow-modal">
                <p className="w-full">
                  <XIcon className="ml-auto mb-1 mr-2 w-3 h-3" onClick={onMoreActionClose} />
                </p>
                <li className="px-4 py-2 text-white hover:bg-primary">Edit</li>
                <li className="px-4 py-2 text-white hover:bg-primary">Delete</li>
              </ul>
            )}
          </>
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
