import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducers/types';
import Modal from 'containers/Modal';
import MovieForm from 'components/MovieForm';

interface MovieModalProps {
  movie?: Movie;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MovieFormModal = ({ movie, isOpen, onClose, title }: MovieModalProps) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (movie) return dispatch(editMovie({} as Movie));
    return dispatch(addMovie({} as Movie));
  };

  const onReset = () => {
    alert('TODO: I will reset form');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} close>
      <MovieForm movie={movie} onSubmit={onSubmit} onReset={onReset} />
    </Modal>
  );
};

export default MovieFormModal;
