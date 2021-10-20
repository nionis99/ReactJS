import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Footer from 'layout/Footer';
import { Movie } from 'reducers/movieReducers/types';
import useQuery from 'hooks/useQuery';

interface MoviePageParamsProps {
  searchValue?: string;
}

const MoviesPage = () => {
  const dispatch = useDispatch();
  const { currentQuery } = useQuery();
  const genreFilter = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');
  const { searchValue = '' } = useParams<MoviePageParamsProps>();
  const { totalAmount, getMoviesLoading, data: movies, getMoviesError } = useStateSelector((state) => state.movies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);
  const onSearchIconClick = () => setSelectedMovie(undefined);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  useEffect(() => {
    dispatch(fetchMovies(sortByValue, genreFilter, searchValue));
  }, [dispatch, sortByValue, genreFilter, searchValue]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {selectedMovie ? (
        <MovieDetailsHeader movie={selectedMovie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader openAddMovie={onOpenAddMovieForm} defaultSearchValue={searchValue} />
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
