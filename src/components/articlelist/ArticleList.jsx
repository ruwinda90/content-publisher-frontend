import React from "react";
import ArticleCard from "../articlecard/ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          topic={article.title}
          summary={article.summary}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
          writerId={article.writer.id}
          writerName={article.writer.name}
        />
      ))}
    </>
  );
};

export default ArticleList;
