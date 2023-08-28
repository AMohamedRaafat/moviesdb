import React from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { CardMovie, Paginate } from "./";
const MoviesList = () => {
  const { movies } = useSelector((state) => state);
  const mapMovies =
    movies.length >= 1 ? (
      movies?.map((mov) => {
        return <CardMovie key={mov.id} mov={mov} />;
      })
    ) : (
      <h3 className="text-center">لا يوجد اي افلام</h3>
    );
  return (
    <Row>
      {mapMovies}
      {movies.length > 19 ? <Paginate /> : ""}
    </Row>
  );
};

export default MoviesList;
