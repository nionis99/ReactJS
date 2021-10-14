import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addMovie, editMovie } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducers/types';
import MovieForm, { IMovieForm } from 'components/MovieForm';
import Modal from 'containers/Modal';

interface MovieModalProps {
  movie?: Movie;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MovieFormModal = ({ movie, isOpen, onClose, title }: MovieModalProps) => {
  const dispatch = useDispatch();

  const onSubmit = (data: IMovieForm) => {
    const convertedData = { ...data, runtime: parseInt(data.runtime), vote_average: parseFloat(data.vote_average) };
    console.log(convertedData);
    // if (movie) return dispatch(editMovie({ ...convertedData, id: movie.id }));
    // return dispatch(addMovie(convertedData));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} close>
      <MovieForm movie={movie} onSubmit={onSubmit} />
    </Modal>
  );
};

export default MovieFormModal;
