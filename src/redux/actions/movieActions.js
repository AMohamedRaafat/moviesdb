import {
  ALL_MOVIES,
  API_URL,
  API_KEY,
  SEARCH_URL,
  SEARCH_MOVIE,
  MOVIE_DETAILS,
  MOVIE_URL,
} from "../type/movieType";

import axios from "axios";
// to call a API in Redux you must use middleware to do it
// Steps to how to do it
// 1. go to the store File and impoer applymiddleware(); from 'redux
// 2. then add it to the store as a parameter after reducer
// 3. then install redux-thunk and impoty thiunk from redux-thunk
// 4. add thunk to the applyMiddleware functino to be applyMiddleWare(thunk)
// 5. then in action you must call api in the other function you return it as a Higher Order Function it must be Asynchronous Function

export const getAllMovies = (currentpage) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${API_URL}&page=${currentpage ? currentpage : 1}`
    );
    dispatch({
      type: ALL_MOVIES,
      movies: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const searchMovieName = (searchValue) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${SEARCH_URL}&query=${searchValue}&language=ar`
    );
    dispatch({
      type: SEARCH_MOVIE,
      movies: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${MOVIE_URL}/${id}?api_key=${API_KEY}&language=ar`
    );
    dispatch({ type: MOVIE_DETAILS, details: res.data });
  };
};
