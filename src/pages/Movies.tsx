import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import useMoviePageContext from 'contexts/MoviePageProvider';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import { Movie } from 'reducers/movieReducers/types';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { sortBy, filter } = useMoviePageContext();
  const { totalAmount, getMoviesLoading, data: movies, getMoviesError } = useStateSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);
  const onSearchIconClick = () => setSelectedMovie(undefined);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  useEffect(() => {
    dispatch(fetchMovies(sortBy, filter));
  }, [dispatch, sortBy, filter]);

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
        getMoviesError={getMoviesError}
        movies={movies}
      />
      <Footer />
    </>
  );
};

export default MoviesPage;
