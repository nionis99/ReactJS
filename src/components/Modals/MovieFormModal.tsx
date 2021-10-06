import React from 'react';
import Modal from 'containers/Modal';
import MovieForm from 'components/MovieForm';

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MovieFormModal = ({ isOpen, onClose, title }: MovieModalProps) => {
  const onSubmit = () => {
    alert('TODO: Forms task');
  };

  const onReset = () => {
    alert('TODO: Reset form');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} close>
      <MovieForm onSubmit={onSubmit} onReset={onReset} />
    </Modal>
  );
};

export default MovieFormModal;
