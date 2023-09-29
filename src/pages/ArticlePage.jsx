import React, { useState, useEffect } from "react";
import ArticleList from "../components/articlelist/ArticleList";
import ArticleSearch from "../components/articlesearch/ArticleSearch";
import PaginationData from "../components/paginationdata/PaginationData";
import api from "../api/apiRequest";

const ArticlePage = ({ userWriterId }) => {
  const categoryList = [
    { id: 0, categoryName: "All categories" },
    { id: 1, categoryName: "Hiking" },
    { id: 2, categoryName: "Content publishing" },
    { id: 3, categoryName: "Tutorials" },
  ];

  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isApiError, setIsApiError] = useState(false);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("/articles");
        setArticleList(response.data); // todo - add a transform later.
      } catch (err) {
        setIsApiError(true);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="articlePageComp">
      <h1>Article List</h1>
      <ArticleSearch categoryList={categoryList} />
      <PaginationData />
      <div className="listArea">
        {isLoading && <p>Loading latest articles please wait...</p>}
        {!isLoading && isApiError && (
          <p>Error while fetching articles. Try reloading the page.</p>
        )}
        {!isLoading &&
          !isApiError &&
          (articleList.length ? (
            <ArticleList articles={articleList} userWriterId={userWriterId} />
          ) : (
            <p>No articles found!</p>
          ))}
      </div>
    </div>
  );
};

export default ArticlePage;
