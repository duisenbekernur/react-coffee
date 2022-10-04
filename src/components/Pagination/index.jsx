import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export default function Pagination({ onChangePagination }){

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePagination(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel="<"
    />
  );
};
