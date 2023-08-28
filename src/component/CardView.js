import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { getMovieDetails } from "../redux/actions/movieActions";
import Slide from "react-reveal";

const CardView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMovieDetails(atob(id)));
  }, []);
  console.log(details);

  return details ? (
    <Slide right>
      <Row>
        <Col xs="12" md="3">
          <div className="big-img">
            <img
              src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
              alt=""
            ></img>
          </div>
        </Col>
        <Col xs="12" md="9" className="my-5">
          <div className="movie d-flex flex-column w-100 h-100 text-center justify-content-center">
            <div className="item py-2">
              <div className="title">اسم الفيلم</div>
              <div>{details.original_title}</div>
            </div>
            <div className="item py-2">
              <div className="title">تاريخ الانتاج</div>
              <div>{details.release_date}</div>
            </div>
            <div className="item py-2">
              <div className="title">عدد المقيمين</div>
              <div>{details.vote_count}</div>
            </div>
            <div className="item py-2">
              <div className="title">التقييم</div>
              <div>{details.vote_average}</div>
            </div>
          </div>
        </Col>
        <Col xs="12 my-5">
          <h3>القصة : </h3>
          <p className="fs-5 my-2 font-bold">{details.overview} </p>
        </Col>
        <Col xs="12 my-5 d-flex justify-content-center">
          <Link to="/">
            <button className="btn-view p-2 mx-2 btn">عودة للرئيسية</button>
          </Link>
          <a href={`https://www.imdb.com/title/${details.imdb_id}`}>
            <button className="btn-view p-2 mx-2 btn imdb">IMDB</button>
          </a>
        </Col>
      </Row>
    </Slide>
  ) : (
    ""
  );
};

export default CardView;
