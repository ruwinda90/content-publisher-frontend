import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
  return (
    <div className="navComp">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article">Articles</Link></li>
        <li><Link to="/writer">Be a Writer</Link></li> {/* TODO */}
        <li><Link to="/publish">Publish</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  )
}

export default Nav