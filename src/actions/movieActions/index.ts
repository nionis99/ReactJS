import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';
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

export const fetchMovies = (): ThunkResult<void> => async (dispatch) => {
  dispatch({ type: MoviesActions.FETCH_MOVIES });
  try {
    const { data }: AxiosResponse<Movies> = await api.get('/movies');
    dispatch({ type: MoviesActions.FETCH_MOVIES_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: MoviesActions.FETCH_MOVIES_FAIL });
  }
};

export const fetchMovie =
  (id: number): ThunkResult<void> =>
  async (dispatch) => {
    dispatch({ type: MoviesActions.FETCH_MOVIE });
    try {
      const { data }: AxiosResponse<Movie> = await api.get(`/movies/${id}`);
      dispatch({ type: MoviesActions.FETCH_MOVIE_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: MoviesActions.FETCH_MOVIE_FAIL });
    }
  };

export const addMovie =
  (movie: Movie): ThunkResult<void> =>
  async (dispatch) => {
    dispatch({ type: MoviesActions.ADD_MOVIE });
    try {
      const { data }: AxiosResponse<Movie> = await api.post(`/movies`, movie);
      dispatch({ type: MoviesActions.ADD_MOVIE_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: MoviesActions.ADD_MOVIE_FAIL });
    }
  };

export const editMovie =
  (editedMovie: Movie): ThunkResult<void> =>
  async (dispatch) => {
    dispatch({ type: MoviesActions.EDIT_MOVIE });
    try {
      const response: AxiosResponse<Movie> = await api.put(`/movies`, editedMovie);
      dispatch({ type: MoviesActions.EDIT_MOVIE_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: MoviesActions.EDIT_MOVIE_FAIL });
    }
  };

export const deleteMovie =
  (deletedId: number): ThunkResult<void> =>
  async (dispatch) => {
    dispatch({ type: MoviesActions.DELETE_MOVIE });
    try {
      await api.delete(`/movies/${deletedId}`);
      dispatch({ type: MoviesActions.DELETE_MOVIE_SUCCESS, payload: deletedId });
    } catch (e) {
      dispatch({ type: MoviesActions.DELETE_MOVIE_FAIL });
    }
  };
