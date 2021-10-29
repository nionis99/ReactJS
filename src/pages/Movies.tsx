import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchMovie, fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import useQuery from 'hooks/useQuery';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import { ROUTES } from 'utils/Constants';

interface MoviePageParamsProps {
  searchValue?: string;
}

const MoviesPage = () => {
  const dispatch = useDispatch();
  const {
    totalAmount,
    getMoviesLoading,
    data: movies,
    movie,
    getMoviesError,
  } = useStateSelector((state) => state.movies);
  const { searchValue = '' } = useParams<MoviePageParamsProps>();
  const { currentQuery } = useQuery();
  const {
    replace,
    location: { pathname },
  } = useHistory();
  const genreFilter = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');
  const movieId = currentQuery.get('movie');
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);

  const onSearchIconClick = () => replace(ROUTES.search);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);
  const onMovieClick = (movieId: string) => {
    replace({ pathname, search: `?movie=${movieId}` });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchMovies(sortByValue, genreFilter, searchValue));
  }, [dispatch, sortByValue, genreFilter, searchValue]);

  useEffect(() => {
    if (movieId) dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {movieId && movie ? (
        <MovieDetailsHeader movie={movie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader openAddMovie={onOpenAddMovieForm} defaultSearchValue={searchValue} />
      )}
      <Content
        totalMovies={totalAmount}
        getMoviesLoading={getMoviesLoading}
        getMoviesError={getMoviesError}
        movies={movies}
        onMovieClick={onMovieClick}
      />
      <Footer />
    </>
  );
};

export default MoviesPage;
