import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import DeleteConfirmation from 'components/Modals/DeleteConfirmation';
import MovieFormModal from 'components/Modals/MovieFormModal';
import { deleteMovie } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducers/types';
import Dots from 'assets/icons/dots.svg';
import XIcon from 'assets/icons/x.svg';
import useStateSelector from '../hooks/useStateSelector';

interface MovieCardProps {
  movie: Movie;
  selectedMovie?: Movie;
  setSelectedMovie: (movie?: Movie) => void;
  onClick: () => void;
}

const MovieCard = ({ movie, selectedMovie, setSelectedMovie, onClick }: MovieCardProps) => {
  const { deleteMovieLoading } = useStateSelector((state) => state.movies);
  const { poster_path, title, release_date, genres } = movie;
  const yearsOfTheMovie = moment(release_date).format('YYYY');
  const [isBlurred, setIsBlurred] = useState(false);
  const [hasMoreActionSelected, setHasMoreActionSelected] = useState(false);
  const [isDeletingMovie, setIsDeletingMovie] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | undefined>();
  const dispatch = useDispatch();

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
    dispatch(deleteMovie(movie.id, () => setIsDeletingMovie(false)));
    if (selectedMovie) setSelectedMovie(undefined);
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
          <img src={poster_path} alt={title} />
        </div>
        <p className="flex w-full">
          <span className="font-bold">{title}</span>
          <span className="ml-auto px-2 h-7 py-1 text-xs border-2 rounded-lg border-gray-400 border-opacity-50">
            {yearsOfTheMovie}
          </span>
        </p>
        <small>{genres.join(', ')}</small>
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
        isLoading={deleteMovieLoading}
        onConfirm={onDeleteMovieConfirmation}
        onClose={() => setIsDeletingMovie(false)}
      />
    </>
  );
};

export default MovieCard;
