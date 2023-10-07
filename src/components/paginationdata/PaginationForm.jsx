import React, { useState } from "react";
import "./paginationdata.css";

const PaginationForm = () => {
  
    const [pageSize, setPageSize] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const pageSizesData = [
    { id: 1, size: 10 },
    { id: 2, size: 25 },
    { id: 3, size: 50 },
  ];
  return (
    <div className="paginationFormComp">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="changePageSize">Change page size</label>
        <select
          name="changePageSize"
          id="changePageSize"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          {pageSizesData.map((item) => (
            <option key={item.id} value={item.size}>
              {`${item.size} items per page`}
            </option>
          ))}
        </select>
        <button type="submit">Change page size</button>
      </form>
    </div>
  );
};

export default PaginationForm;
