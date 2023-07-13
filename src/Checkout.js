import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Checkout = ({ checkOutFilteredData }) => {
  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = checkOutFilteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(checkOutFilteredData.length / itemsPerPage);
  //
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % checkOutFilteredData.length;
    setItemOffset(newOffset);
  };
  //

  // rendering
  let dataTable = <></>;
  if (currentItems.length > 0) {
    dataTable = currentItems.map((data, idx) => {
      return (
        <tbody key={idx}>
          <tr>
            <td>{idx + 1}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.checkout}</td>
          </tr>
        </tbody>
      );
    });
  }
  //
  return (
    <div>
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Checkout</th>
          </tr>
        </thead>
        {dataTable}
      </table>
      {/* pagination */}
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
      {/*  */}
    </div>
  );
};

export default Checkout;
