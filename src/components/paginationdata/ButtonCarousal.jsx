import React from "react";

const ButtonCarousal = ({ currentpage, totalPages }) => {
  const nButtons = 7;

  return (
    <div>
      <button>{"<<"}</button>
      {[...Array(nButtons)].map((item, index) => {
        let startLabel =
          currentpage > totalPages - Math.floor(nButtons / 2)
            ? totalPages - (nButtons - 1)
            : currentpage > Math.floor(nButtons / 2) + 1
            ? currentpage - Math.floor(nButtons / 2)
            : 1;

        return <button key={startLabel + index}>{startLabel + index}</button>;
      })}
      <button>{">>"}</button>
    </div>
  );
};

export default ButtonCarousal;
