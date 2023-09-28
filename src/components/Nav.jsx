import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article">Articles</Link></li>
        <li><Link to="/writer">Be a Writer</Link></li> {/* TODO */}
        <li><Link to="/about">About us</Link></li>
      </ul>
    </div>
  )
}

export default Nav