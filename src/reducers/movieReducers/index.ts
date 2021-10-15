import { Reducer } from 'redux';
import { MoviesActions } from 'actions/movieActions';
import { MovieActionsTypes } from 'actions/movieActions/types';
import { Movie } from './types';

export interface MoviesState {
  data: Movie[] | [];
  totalAmount: number;
  offset: number;
  limit: number;
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: [],
  totalAmount: 0,
  offset: 0,
  limit: 0,
  loading: false,
  error: null,
};

export const moviesReducer: Reducer<MoviesState, MovieActionsTypes> = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActions.FETCH_MOVIE:
    case MoviesActions.FETCH_MOVIES:
    case MoviesActions.ADD_MOVIE: // TODO: SEPARATE LOADINGS, CAUSE UNMOUNTING CONTENT.
    case MoviesActions.EDIT_MOVIE:
    case MoviesActions.DELETE_MOVIE:
      return { ...state, loading: true };

    case MoviesActions.FETCH_MOVIE_FAIL:
    case MoviesActions.FETCH_MOVIES_FAIL:
    case MoviesActions.ADD_MOVIE_FAIL: // TODO: SEPARATE ERRORS AND ADD THEIR MESSAGES.
    case MoviesActions.EDIT_MOVIE_FAIL:
    case MoviesActions.DELETE_MOVIE_FAIL:
      return { ...state, loading: false };

    // TODO: CRUD
    case MoviesActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case MoviesActions.FETCH_MOVIE_SUCCESS:
    case MoviesActions.ADD_MOVIE_SUCCESS:
    case MoviesActions.EDIT_MOVIE_SUCCESS:
      state.data[state.data.findIndex((data) => data.id === action.payload.id)] = action.payload;
      return {
        ...state,
        loading: false,
      };
    case MoviesActions.DELETE_MOVIE_SUCCESS:
      action.payload;
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
        totalAmount: state.totalAmount - 1,
        loading: false,
      };

    default:
      return state;
  }
};
