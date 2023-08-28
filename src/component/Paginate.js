import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieActions";
const Paginate = ({ pageChange }) => {
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    const page = data.selected + 1;
    dispatch(getAllMovies(page));
  };
  const { pages } = useSelector((state) => state);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pages}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center py-2"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName="page-link"
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginate;
