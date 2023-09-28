import React from "react";
import Article from "../article/Article";

const ArticleList = ({ articles, userWriterId }) => {
  return (
    <>
      {articles.map((article) => (
        <Article
          key={article.id}
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
