import React, { useState, useEffect } from "react";
import CategoryTag from "../components/categorytag/CategoryTag";
import useProtectedApi from "../hooks/useProtectedApi";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ArticleView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [isArticleApiError, setIsArticleApiError] = useState(false);
  const [apiErrorCode, setApiErrorCode] = useState(null);

  const protectedApi = useProtectedApi();
  const userWriterId = useSelector(state => state.auth.data.userWriterId);

  useEffect(() => {
    let isMount = true;
    const source = axios.CancelToken.source();

    const fetchArticle = async () => {
      try {
        const response = await protectedApi.get(`/view/content/${id}`, 
         {
          cancelToken: source.token, 
        }
        );
        if (isMount) {
          console.log(JSON.stringify(response.data.data));
          setArticle(response.data.data); // todo - add a transform later.
        }
      } catch (err) {
        if (isMount) {
          setIsArticleApiError(true);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            setApiErrorCode(err.response.status);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      } finally {
        if (isMount) setIsArticleLoading(false);
      }
    };
    fetchArticle();

    const cleanUp = () => {
      // Clean up function.
      isMount = false;
      source.cancel();
    };

    return cleanUp;
  }, [id]);

  const handleDelete = async () => {
    try {
      await protectedApi.delete(`/publisher/content/${id}`); // todo - send popups notifiying the status of the action.
      navigate("/article");
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.status);
    }
  };

  return (
    <div className="articleViewComp">
      {isArticleLoading && <p>Loading data please wait...</p>}
      {!isArticleLoading && isArticleApiError && (
        <p>
          {apiErrorCode === 404
            ? "Article not found"
            : apiErrorCode === 401
            ? "Unauthorized"
            : "Error while fetching the article. Try reloading the page."}
        </p>
      )}
      {!isArticleLoading && !isArticleApiError && (
        <>
          <h1>{article.title}</h1>
          <p className="authorName">By {article.writer.name}</p>
          <p className="date">
            Last updated on: {article.updatedAt.split(".")[0]}
          </p>
          <p className="date">
            Originally published on: {article.createdAt.split(".")[0]}
          </p>
          <p style={{ marginTop: "5px", marginBottom: "5px" }}>
            Tags:{" "}
            <CategoryTag
              categoryId={article.category.id}
              categoryName={article.category.name}
            />
          </p>
          {userWriterId === article.writer.id && (
            <>
              <Link to={`/article/${id}/edit`}>
                <button className="editButton">Edit</button>
              </Link>
              <button className="deleteButton" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
          <div className="listArea">
            <h2>Summary</h2>
            <p>{article.summary}</p>
            <h2>Content</h2>
            <p>{article.details}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleView;
