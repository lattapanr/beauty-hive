import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  const endOffset = itemOffset + itemsPerPage;
  const currentItemsRange = `${itemOffset + 1}-${
    endOffset > pageCount ? pageCount : endOffset
  }`;

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
    onPageChange(selectedPage);
  };

  return (
    <div>
      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Pagination;
