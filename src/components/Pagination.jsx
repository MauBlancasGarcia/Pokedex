import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  OffsetPokemons,
  selectTotalPages,
  updateCurrentPage,
} from "../features/page/pageSlice";

function Pagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);

  function handlePageChange(data) {
    let number = data.selected;
    dispatch(updateCurrentPage(number));
    dispatch(OffsetPokemons());
  }

  return (
    <ReactPaginate
      previousLabel={"previus"}
      nextLabel={"next"}
      pageCount={totalPages}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
    ></ReactPaginate>
  );
}

export default Pagination;
