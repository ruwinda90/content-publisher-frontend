import React from "react";
import "./article.css";

const Article = ({
  id,
  topic,
  summary,
  createdAt,
  updatedAt,
  userWriterId,
  writerId,
  writerName,
}) => {
  return (
    <div className="articleComp">
      <h2>{topic}</h2>
      <p style={{ color: "mediumseagreen" }}>By {writerName}</p>
      <p style={{ fontSize: "14px", color: "green" }}>
        Last updated on: {updatedAt.split(".")[0]}
      </p>
      <p>
        {summary.length <= 255 ? summary : `${summary.substring(0, 255)}...`}
      </p>
      <button className="viewButton">View</button>
      {userWriterId === writerId && (
        <>
          <button className="editButton">Edit</button>
          <button className="deleteButton">Delete</button>
        </>
      )}
    </div>
  );
};

export default Article;
