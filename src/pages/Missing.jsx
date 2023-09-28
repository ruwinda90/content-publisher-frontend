import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div>
      <p>Could not find the page you requested</p>
      <Link to="/">
        <p>Click here to visit home page</p>
      </Link>
    </div>
  );
};

export default Missing;
