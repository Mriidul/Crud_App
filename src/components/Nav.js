import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-Links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/read">Read</Link>
        </li>
        <li>
          <Link to="/liked">Liked Posts</Link>
        </li>
        <li>
          <Link to="/disliked">Disliked Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
