import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Checkin = ({ checkInFilteredData }) => {
  // paginate
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = checkInFilteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(checkInFilteredData.length / itemsPerPage);
  //
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % checkInFilteredData.length;
    setItemOffset(newOffset);
  };
  //......//

  let dataTable = <></>;

  if (currentItems.length > 0) {
    dataTable = currentItems.map((data, idx) => {
      return (
        <tbody key={idx}>
          <tr>
            <td>{idx + 1}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.checkin}</td>
          </tr>
        </tbody>
      );
    });
  }
  //
  return (
    <>
      <h1>Checkin</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Checkin</th>
          </tr>
        </thead>
        {dataTable}
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Checkin;
