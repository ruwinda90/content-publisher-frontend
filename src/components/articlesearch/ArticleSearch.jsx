import React, { useState } from "react";
import "./articlesearch.css"

const ArticleSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [searchAuthorName, setSearchAuthorName] = useState(null);
  const [searchCategory, setSearchCategory] = useState(null);

  return (
    // <div style={{ color: "red" }}>
    //   Add search prompts - by keyword, author, category, updateddate
    //   <></>
    // </div>
    <form className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="searchByKeyword">Search articles by keyword</label>
      <input
        autoFocus
        id="searchByKeyword"
        type="text"
        placeholder="Keyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <label htmlFor="searchByAuthor">Search articles by author name</label>
      <input
        autoFocus
        id="searchByAuthor"
        type="text"
        placeholder="Author name"
        value={searchAuthorName}
        onChange={(e) => setSearchAuthorName(e.target.value)}
      />
      <label htmlFor="searchByCategory">Search articles by category</label>
      <input
        autoFocus
        id="searchByCategory"
        type="text"
        placeholder="Category"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default ArticleSearch;
