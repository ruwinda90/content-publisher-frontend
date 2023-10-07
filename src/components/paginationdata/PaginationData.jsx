import React from "react";
import "./paginationdata.css";
import ButtonCarousal from "./ButtonCarousal";
import PaginationForm from "./PaginationForm";

const PaginationData = ({ currentpage, totalPages, itemsPerPage }) => {
  
  return (
    <div className="paginationComp">
        <ButtonCarousal currentpage={currentpage} totalPages={totalPages}/>
        <PaginationForm />
    </div>
  );
};

PaginationData.defaultProps = {
  currentpage: 3,
  totalPages: 20,
  itemsPerPage: 10,
};

export default PaginationData;
