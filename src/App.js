import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar, MoviesList, CardView } from "./component/";
import { getAllMovies } from "./redux/actions/movieActions";

import "./App.css";

// Link to fetch all movies : https://api.themoviedb.org/3/movie/popular
// Link to get a details of movie : https://api.themoviedb.org/3/movie/{movie_id}
// Link to get a search in lis of items : https://api.themoviedb.org/3/search/movie
// link to get image : http://image.tmdb.org/t/p/w500/{image_id}

/*
options use in api : 
api_key is Reqyired 
language is required 
and {query} for search api is required
and {img_id} for image api
and {movie_id} for details of movie api is required
*/

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route path="/moviesdb" element={<MoviesList />} />
          <Route path="/movie/:id" element={<CardView />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
