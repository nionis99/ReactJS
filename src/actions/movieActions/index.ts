import { ThunkAction } from 'redux-thunk';
import { RootActions, RootState } from 'store';
import { Movie, Movies } from 'reducers/movieReducers/types';
import api from '../api';

type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum MoviesActions {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL',
  FETCH_MOVIE = 'FETCH_MOVIE',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAIL = 'FETCH_MOVIE_FAIL',
  ADD_MOVIE = 'ADD_MOVIE',
  ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS',
  ADD_MOVIE_FAIL = 'ADD_MOVIE_FAIL',
  EDIT_MOVIE = 'EDIT_MOVIE',
  EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS',
  EDIT_MOVIE_FAIL = 'EDIT_MOVIE_FAIL',
  DELETE_MOVIE = 'DELETE_MOVIE',
  DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS',
  DELETE_MOVIE_FAIL = 'DELETE_MOVIE_FAIL',
}

export const fetchMovies =
  (sortBy: string | null, filter: string | null): ThunkResult<void> =>
  (dispatch) => {
    console.log({ filter });
    const query = `?sortBy=${sortBy || 'genres'}&sortOrder=desc&${filter ? '&filter=' + filter : ''}`;
    console.log(query);
    dispatch({ type: MoviesActions.FETCH_MOVIES });
    return api
      .get<Movies>(`/movies${query}`)
      .then(({ data }) => dispatch({ type: MoviesActions.FETCH_MOVIES_SUCCESS, payload: data }))
      .catch(({ response: { data } }) => dispatch({ type: MoviesActions.FETCH_MOVIES_FAIL, error: data.messages }));
  };

export const fetchMovie =
  (id: number): ThunkResult<void> =>
  (dispatch) => {
    dispatch({ type: MoviesActions.FETCH_MOVIE });
    return api
      .get<Movie>(`/movies/${id}`)
      .then(({ data }) =>
        dispatch({
          type: MoviesActions.FETCH_MOVIE_SUCCESS,
          payload: data,
        }),
      )
      .catch(({ response: { data } }) => dispatch({ type: MoviesActions.FETCH_MOVIE_FAIL, error: data.messages }));
  };

export const addMovie =
  (movie: Movie, closeModal: () => void): ThunkResult<void> =>
  (dispatch) => {
    dispatch({ type: MoviesActions.ADD_MOVIE });
    return api
      .post<Movie>(`/movies`, movie)
      .then(({ data }) => {
        dispatch({ type: MoviesActions.ADD_MOVIE_SUCCESS, payload: data });
        closeModal();
      })
      .catch(({ response: { data } }) => dispatch({ type: MoviesActions.ADD_MOVIE_FAIL, error: data.messages }));
  };

export const editMovie =
  (editedMovie: Movie, closeModal: () => void): ThunkResult<void> =>
  (dispatch) => {
    dispatch({ type: MoviesActions.EDIT_MOVIE });
    return api
      .put<Movie>(`/movies`, editedMovie)
      .then(({ data }) => {
        dispatch({ type: MoviesActions.EDIT_MOVIE_SUCCESS, payload: data });
        closeModal();
      })
      .catch(({ response: { data } }) => dispatch({ type: MoviesActions.EDIT_MOVIE_FAIL, error: data.messages }));
  };

export const deleteMovie =
  (deletedId: number, closeModal: () => void): ThunkResult<void> =>
  (dispatch) => {
    dispatch({ type: MoviesActions.DELETE_MOVIE });
    return api
      .delete(`/movies/${deletedId}`)
      .then(() => {
        dispatch({ type: MoviesActions.DELETE_MOVIE_SUCCESS, payload: deletedId });
        closeModal();
      })
      .catch(({ response: { data } }) => dispatch({ type: MoviesActions.DELETE_MOVIE_FAIL, error: data.messages }));
  };
