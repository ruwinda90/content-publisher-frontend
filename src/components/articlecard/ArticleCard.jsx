import React from "react";
import "./articlecard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({
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
      <p className="authorName">By {writerName}</p>
      <p className="date">Last updated on: {updatedAt.split(".")[0]}</p>
      <p>
        {summary.length <= 255 ? summary : `${summary.substring(0, 255)}...`}
      </p>
        <Link to={`/article/${id}`}>
          <button>View</button>
        </Link>
      {userWriterId === writerId && (
        <>
          <button className="editButton">Edit</button>
          <button className="deleteButton">Delete</button>
        </>
      )}
    </div>
  );
};

export default ArticleCard;
