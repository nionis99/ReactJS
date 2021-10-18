import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import useStateSelector from 'hooks/useStateSelector';
import { fetchMovies } from 'actions/movieActions';
import { Movie } from 'reducers/movieReducers/types';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { totalAmount, getMoviesLoading, data: movies } = useStateSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);
  const onSearchIconClick = () => setSelectedMovie(undefined);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {selectedMovie ? (
        <MovieDetailsHeader movie={selectedMovie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader openAddMovie={onOpenAddMovieForm} />
      )}
      <Content
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        totalMovies={totalAmount}
        getMoviesLoading={getMoviesLoading}
        movies={movies}
      />
      <Footer />
    </>
  );
};

export default MoviesPage;
