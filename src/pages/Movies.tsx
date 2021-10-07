import React, { useState } from 'react';
import SearchHeader from 'layout/SearchHeader';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader';
import Footer from 'layout/Footer';
import Movie from 'types/Movie';

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();

  const onSearchIconClick = () => setSelectedMovie(undefined);

  return (
    <>
      {selectedMovie ? (
        <MovieDetailsHeader movie={selectedMovie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchHeader />
      )}
      <div className="w-full h-2.5" />
      <Content onSelectedClick={setSelectedMovie} />
      <Footer />
    </>
  );
};

export default MoviesPage;
