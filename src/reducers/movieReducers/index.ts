import _ from 'lodash';
import { Reducer } from 'redux';
import { MoviesActions } from 'actions/movieActions';
import { MovieActionsTypes } from 'actions/movieActions/types';
import { Movie } from './types';

export interface MoviesState {
  data: Movie[] | [];
  total: number;
  offset: number;
  limit: number;
  loading: boolean;
  error: String | null;
}

const initialState = {
  data: [],
  total: 0,
  offset: 0,
  limit: 0,
  loading: false,
  error: null,
};

export const moviesReducer: Reducer<MoviesState, MovieActionsTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case MoviesActions.FETCH_MOVIE:
    case MoviesActions.FETCH_MOVIES:
    case MoviesActions.ADD_MOVIE:
    case MoviesActions.EDIT_MOVIE:
    case MoviesActions.DELETE_MOVIE:
      return { ...state, loading: true };

    case MoviesActions.FETCH_MOVIE_FAIL:
    case MoviesActions.FETCH_MOVIES_FAIL:
    case MoviesActions.ADD_MOVIE_FAIL:
    case MoviesActions.EDIT_MOVIE_FAIL:
    case MoviesActions.DELETE_MOVIE_FAIL:
      return { ...state, loading: false };

    case MoviesActions.FETCH_MOVIES_SUCCESS:
    case MoviesActions.FETCH_MOVIE_SUCCESS:
    case MoviesActions.ADD_MOVIE_SUCCESS:
    case MoviesActions.EDIT_MOVIE_SUCCESS:
    case MoviesActions.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        data: [...state.data],
        loading: false,
      };

    default:
      return state;
  }
};