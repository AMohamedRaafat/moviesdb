import React from "react";
import { useDispatch } from "react-redux";
import { getAllMovies, searchMovieName } from "../redux/actions/movieActions";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchByName = (searchValue) => {
    if (searchValue === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(searchMovieName(searchValue));
    }
  };
  return (
    <div className="navbar px-5">
      <Container>
        <Row className="w-100 justify-content-center align-items-center">
          <Col sm="2">
            <Link to="/">
              <img src={logo} className="img-logo" alt="" />
            </Link>
          </Col>
          <Col sm="10">
            <div className="search d-flex align-items-center">
              <input
                type="text"
                className="input"
                placeholder="ابحث"
                onChange={(e) => searchByName(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
