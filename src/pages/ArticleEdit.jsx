import React, { useState, useEffect, useRef } from "react";
import api from "../api/apiRequest";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ArticleEdit = () => {
  const { id } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  const [newTitle, setNewTitle] = useState(null);
  const [newSummary, setNewSummary] = useState(null);
  const [newContent, setNewContent] = useState(null);

  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [isArticleApiError, setIsArticleApiError] = useState(false);
  const [apiErrorCode, setApiErrorCode] = useState(null);

  const [article, setArticle] = useState(null); // TODO - use Redux and improve this.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {};
    requestBody.id = id;
    if (newTitle !== article.title) requestBody.title = newTitle;
    if (newSummary !== article.summary) requestBody.summary = newSummary;
    if (newContent !== article.content) requestBody.content = newContent;

    try {
      const response = await api.patch(`/articles/${id}`, requestBody); // TODO - add pop-ups
      navigate(`/article/${id}`);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    let isMount = true;
    const source = axios.CancelToken.source();

    const fetchArticle = async () => {
      try {
        const response = await api.get(`/articles/${id}`, {
          cancelToken: source.token,
        });
        if (isMount) {
          setArticle(response.data); // todo - add a transform later.
          setNewTitle(response.data.title);
          setNewSummary(response.data.summary);
          setNewContent(response.data.content);
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
      isMount = false;
      source.cancel();
    };

    return cleanUp;
  }, [id]);

  return (
    <div className="articleEditComp">
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
        <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>
          <h1>Heading:</h1>
          <label htmlFor="newTitle">Edit post title</label>
          <input // TODO - style these input fields properly
            autoFocus
            className="titleSlot"
            ref={inputRef}
            id="newTitle"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)} // TODO - add client-side pop-up validations
          />
          <h1>Summary:</h1>
          <label htmlFor="newSummary">Edit post summary</label>
          <input
            className="summarySlot"
            id="newSummary"
            type="text"
            value={newSummary}
            onChange={(e) => setNewSummary(e.target.value)}
          />
          <h1>Content:</h1>
          <label htmlFor="newContent">Edit post content</label>
          <input
            className="contentSlot"
            id="newContent"
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            className="editButton"
            type="submit"
            onClick={() => inputRef.current.focus()}
            disabled={
              newTitle === article.title &&
              newSummary == article.summary &&
              newContent === article.content
            }
          >
            Edit
          </button>
        </form>
      )}
    </div>
  );
};

export default ArticleEdit;
