import React from "react";
import ArticleCard from "../articlecard/ArticleCard";

const ArticleList = ({ articles, userWriterId }) => {
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
          userWriterId={userWriterId}
          writerId={article.writer.id}
          writerName={article.writer.name}
        />
      ))}
    </>
  );
};

export default ArticleList;
