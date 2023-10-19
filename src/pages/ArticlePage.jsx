import React, { useState, useEffect } from "react";
import ArticleList from "../components/articlelist/ArticleList";
import ArticleSearch from "../components/articlesearch/ArticleSearch";
import PaginationData from "../components/paginationdata/PaginationData";
import { api } from "../api/apiRequest";
import axios from "axios";
import useProtectedApi from "../hooks/useProtectedApi";

const ArticlePage = () => {
  const [articleList, setArticleList] = useState([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);
  const [isArticlesApiError, setIsArticlesApiError] = useState(false);

  const protectedApi = useProtectedApi();

  useEffect(() => { 
    let isMount = true;
    const source = axios.CancelToken.source();

    const fetchArticles = async () => {
      try { 
        const response = await protectedApi.get("/view/content?categoryId=1&page=1&pageSize=20", {
          cancelToken: source.token,
        });
        if (isMount) setArticleList(response.data.data.contentList); // todo - add a transform later.
      } catch (err) { 
        if (isMount) {
          setIsArticlesApiError(true);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      } finally {
        if (isMount) setIsArticlesLoading(false);
      }
    };
    fetchArticles();

    const cleanUp = () => {
      // Clean up function.
      isMount = false;
      source.cancel();
    };

    return cleanUp;
  }, []);

  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [isCategoryApiError, setIsCategoryApiError] = useState(false);

  useEffect(() => {
    const DEFAULT_CATEGORY = { id: 0, categoryName: "All categories" }; // todo - investigate this.
    let isMount = true;
    const source = axios.CancelToken.source(); 

    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories", {
          cancelToken: source.token,
        });
        if (isMount) setCategoryList([...response.data, DEFAULT_CATEGORY]); // todo - add a transform later.
      } catch (err) {
        if (isMount) {
          setIsCategoryApiError(true);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      } finally {
        if (isMount) setIsCategoryLoading(false); 
      }
    };
    fetchCategories();

    const cleanUp = () => {
      // Clean up function.
      isMount = false;
      source.cancel();
    };

    return cleanUp;
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
            <ArticleList articles={articleList} />
          ) : (
            <p>No articles found!</p>
          ))}
      </div>
    </div>
  );
};

export default ArticlePage;
