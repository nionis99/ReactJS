import React, { useState } from 'react';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import Movie from 'types/Movie';

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);

  const onSearchIconClick = () => setSelectedMovie(undefined);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title='Add movie' />
      {selectedMovie ? (
        <MovieDetailsHeader movie={selectedMovie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader openAddMovie={onOpenAddMovieForm} />
      )}
      <div className='w-full h-2.5' />
      <Content onSelectedClick={setSelectedMovie} />
      <Footer />
    </>
  );
};

export default MoviesPage;
