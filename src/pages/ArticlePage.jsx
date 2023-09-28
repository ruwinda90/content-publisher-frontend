import React from "react";
import ArticleList from "../components/articlelist/ArticleList";

const ArticlePage = ({ userWriterId }) => {
  const articleList = [
    {
      id: 1,
      title: "How to use our platform",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2022-11-13 11:48:22.562",
      updatedAt: "2022-11-13 12:17:43.765",
      writer: {
        id: 1,
        name: "Rick Astley",
      },
    },
    {
      id: 2,
      title: "Whats special about our platform",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2023-09-13 11:48:22.562",
      updatedAt: "2023-09-23 12:00:43.000",
      writer: {
        id: 3,
        name: "Martin Fowler",
      },
    },
    {
      id: 4,
      title: "Beginner's guide on content writing",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2023-09-13 11:48:22.562",
      updatedAt: "2023-09-23 12:00:43.000",
      writer: {
        id: 70,
        name: "Agatha Warren",
      },
    },
    {
      id: 4,
      title: "10 reasons to go hiking immediately",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2023-08-10 11:48:22.562",
      updatedAt: "2023-09-23 12:00:43.000",
      writer: {
        id: 10,
        name: "Han Solo",
      },
    },
    {
      id: 5,
      title: "10 reasons to go hiking immediately",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2023-08-10 11:48:22.562",
      updatedAt: "2023-09-23 12:00:43.000",
      writer: {
        id: 10,
        name: "Han Solo",
      },
    },
  ];

  return (
    <div className="articlePageComp">
      <h1>Article List</h1>
      <div style={{ color: "red" }}>Add search prompts - by keyword, author, category, updateddate</div>
      <div style={{ color: "red" }}>Add Pagination panels - previous, current, next</div>
      <div className="listArea">
        {articleList.length ? (
          <ArticleList articles={articleList} userWriterId={userWriterId} />
        ) : (
          <p>No articles found!</p>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
