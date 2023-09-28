import React, { useRef, useState } from "react";
import "./articlesearch.css"

const ArticleSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchAuthorName, setSearchAuthorName] = useState("");
  const [searchCategory, setSearchCategory] = useState(null);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo
  }

  return (
    //  TODO Add search prompts - by keyword, author, category, updateddate
    <form className="searchForm" onSubmit={e => handleSubmit(e)}>
      <label htmlFor="searchByKeyword">Search articles by keyword</label>
      <input
        autoFocus
        ref={inputRef}
        id="searchByKeyword"
        type="text"
        placeholder="Keyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <label htmlFor="searchByAuthor">Search articles by author name</label>
      <input
        id="searchByAuthor"
        type="text"
        placeholder="Author name"
        value={searchAuthorName}
        onChange={(e) => setSearchAuthorName(e.target.value)}
      />
      <label htmlFor="searchByCategory">Search articles by category</label>
      <input
        id="searchByCategory"
        type="text"
        placeholder="Category"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>Search</button>
    </form>
  );
};

export default ArticleSearch;
