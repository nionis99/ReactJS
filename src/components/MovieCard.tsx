import React, { useState } from 'react';
import DeleteConfirmation from 'components/Modals/DeleteConfirmation';
import Dots from 'assets/icons/dots.svg';
import XIcon from 'assets/icons/x.svg';
import Movie from 'types/Movie';
import MovieFormModal from './Modals/MovieFormModal';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const { imageSource, title, years, genre } = movie;
  const [isBlurred, setIsBlurred] = useState(false);
  const [hasMoreActionSelected, setHasMoreActionSelected] = useState(false);
  const [isDeletingMovie, setIsDeletingMovie] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | undefined>();

  const onCardMouseEnter = () => setIsBlurred(true);
  const onCardMouseLeave = () => {
    if (hasMoreActionSelected) setHasMoreActionSelected(false);
    setIsBlurred(false);
  };

  const onEditMovieClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    setEditingMovie(movie);
  };

  const onDeleteMovieClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    setIsDeletingMovie(true);
  };

  const onDeleteMovieConfirmation = () => {
    alert(`I will delete movie : ${movie.title}`);
    setIsDeletingMovie(false);
  };

  const onMoreActionClose = (event: React.MouseEvent<SVGAElement>) => {
    event.stopPropagation();
    setHasMoreActionSelected(false);
  };

  const onMoreActionClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setHasMoreActionSelected(true);
  };

  return (
    <>
      <div
        className="flex-col cursor-pointer text-white text-opacity-75"
        onMouseEnter={() => setIsBlurred(true)}
        onMouseLeave={onCardMouseLeave}
        onClick={onClick}
      >
        <div className="relative pb-4">
          {isBlurred && (
            <>
              <div className="absolute top-2 right-2" onClick={onMoreActionClicked}>
                <Dots />
              </div>
              {hasMoreActionSelected && (
                <ul className="absolute w-48 right-2 py-1 mt-2 bg-white bg-content rounded shadow-modal">
                  <p className="w-full p-1">
                    <XIcon className="ml-auto mb-1 mr-2 w-3 h-3" onClick={onMoreActionClose} />
                  </p>
                  <li className="px-4 py-2 text-white hover:bg-primary" onClick={onEditMovieClick}>
                    Edit
                  </li>
                  <li className="px-4 py-2 text-white hover:bg-primary" onClick={onDeleteMovieClick}>
                    Delete
                  </li>
                </ul>
              )}
            </>
          )}
          <img src={imageSource} alt={title} />
        </div>
        <p className="flex w-full">
          <span className="font-bold">{title}</span>
          <span className="ml-auto px-2 py-1 text-xs border-2 rounded-lg border-gray-400 border-opacity-50">
            {years}
          </span>
        </p>
        <small>{genre}</small>
      </div>
      <MovieFormModal
        isOpen={!!editingMovie}
        onClose={() => setEditingMovie(undefined)}
        title="edit movie"
        movie={editingMovie}
      />
      <DeleteConfirmation
        isOpen={isDeletingMovie}
        title="Delete movie"
        description="Are you sure you want to delete this movie?"
        onConfirm={onDeleteMovieConfirmation}
        onClose={() => setIsDeletingMovie(false)}
      />
    </>
  );
};

export default MovieCard;
