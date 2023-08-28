import { ALL_MOVIES, SEARCH_MOVIE, MOVIE_DETAILS } from "../type/movieType";

const initialState = { movies: [], pages: 1, details: [] };

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_MOVIES:
      return { movies: action.movies, pages: action.pages };
    case SEARCH_MOVIE:
      return { movies: action.movies, pages: action.pages };
    case MOVIE_DETAILS:
      return {
        movies: state.movies,
        pages: state.pages,
        details: action.details,
      };
    default:
      return state;
  }
};
