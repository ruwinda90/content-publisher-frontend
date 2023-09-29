import React, { useState, useEffect } from "react";
import ArticleList from "../components/articlelist/ArticleList";
import ArticleSearch from "../components/articlesearch/ArticleSearch";
import PaginationData from "../components/paginationdata/PaginationData";
import api from "../api/apiRequest";

const ArticlePage = ({ userWriterId }) => {
  const [articleList, setArticleList] = useState([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);
  const [isArticlesApiError, setIsArticlesApiError] = useState(false);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get("/articles");
        setArticleList(response.data); // todo - add a transform later.
      } catch (err) {
        setIsArticlesApiError(true);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setIsArticlesLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [isCategoryApiError, setIsCategoryApiError] = useState(false);
  useEffect(() => {
    const DEFAULT_CATEGORY = { id: 0, categoryName: "All categories" }; // todo - investigate this.

    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategoryList([...response.data, DEFAULT_CATEGORY]); // todo - add a transform later.
      } catch (err) {
        setIsCategoryApiError(true);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setIsCategoryLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="articlePageComp">
      <h1>Article List</h1>
      {!isCategoryLoading && isCategoryApiError && (
        <p>Error while fetching categories. Try reloading the page.</p>
      )}
      {!isCategoryLoading && !isCategoryApiError && (
        <ArticleSearch categoryList={categoryList} />
      )}
      <PaginationData />
      <div className="listArea">
        {isArticlesLoading && <p>Loading latest articles please wait...</p>}
        {!isArticlesLoading && isArticlesApiError && (
          <p>Error while fetching articles. Try reloading the page.</p>
        )}
        {!isArticlesLoading &&
          !isArticlesApiError &&
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
