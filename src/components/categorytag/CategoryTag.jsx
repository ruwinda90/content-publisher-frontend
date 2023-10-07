import React from "react";
import "./categorytag.css";

const CategoryTag = ({ categoryId, categoryName, bgColor = "aquamarine" }) => {
  return <span style={{ backgroundColor: bgColor }}>{categoryName}</span>;
};

export default CategoryTag;
