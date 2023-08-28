import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const CardMovie = ({ mov }) => {
  const imgUrl = "http://image.tmdb.org/t/p/w500/";
  return (
    <Col xs="6" md="4" lg="2" className="my-2">
      <Zoom>
        <Link to={`/movie/${mov.id}`}>
          <div className="card-movie">
            <div className="img">
              <img
                src={imgUrl + mov.poster_path}
                className="w-100"
                alt=""
              ></img>
            </div>
            <div className="card-overlay d-flex w-100 flex-column align-items-center justify-content-center">
              <p className="movieName">{mov.original_title}</p>
              <p className="movieprod">تاريخ الاصدار : {mov.release_date}</p>
              <p className="movieproducer">عدد المقيمين : {mov.vote_count}</p>
              <p className="moviecat">متوسط التقييم : {mov.vote_average}</p>
            </div>
          </div>
        </Link>
      </Zoom>
    </Col>
  );
};

export default CardMovie;
