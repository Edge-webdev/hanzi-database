import React from "react";

const Paginate = ({
  charsPerPage,
  totalChars,
  currentPage,
  paginate,
  previousPage,
  nextPage,
  firstPage,
  lastPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        <div className="page-buttons">
          <li onClick={firstPage} className="page-number">
            First
          </li>
          <li onClick={previousPage} className="page-number">
            Prev
          </li>
        </div>
        <div className="page-numbers">
          {pageNumbers.map((number) =>
            !(number > currentPage + 2 || number < currentPage - 2) ? (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={
                  "page-number " + (number === currentPage ? "active" : "")
                }
              >
                {number}
              </li>
            ) : null
          )}
        </div>
        <div className="page-buttons">
          <li onClick={nextPage} className="page-number">
            Next
          </li>
          <li onClick={lastPage} className="page-number">
            Last
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Paginate;
