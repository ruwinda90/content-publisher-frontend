import React from "react";
import CategoryTag from "../components/categorytag/CategoryTag";

const ArticleView = ({
  topic,
  summary,
  content,
  createdAt,
  updatedAt,
  userWriterId,
  writerId,
  writerName,
  categoryId,
  categoryName,
}) => {
  return (
    <div className="articleViewComp">
      <h1>{topic}</h1>
      <p className="authorName">By {writerName}</p>
      <p className="date">Last updated on: {updatedAt.split(".")[0]}</p>
      <p className="date">Originally published on: {createdAt.split(".")[0]}</p>
      <p style={{ marginTop: "5px", marginBottom: "5px" }}>
        Tags:{" "}
        <CategoryTag categoryId={categoryId} categoryName={categoryName}/>
      </p>
      {userWriterId === writerId && (
        <>
          <button className="editButton">Edit</button>
          <button className="deleteButton">Delete</button>
        </>
      )}
      <div className="listArea">
        <h2>Summary</h2>
        <p>{summary}</p>
        <h2>Content</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleView;

ArticleView.defaultProps = {
  topic: "How to use our platform",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  createdAt: "2022-11-13 11:48:22.562",
  updatedAt: "2022-11-13 11:48:22.562",
  userWriterId: 1,
  writerId: 1,
  writerName: "Rick Astley",
  categoryId: 3,
  categoryName: "Tutorials",
};
