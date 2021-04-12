import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
const Nav = () => {
  return (
    <Typography>
      <nav>
        <h1 className="app-logo">Logo</h1>
        <ul className="nav-Links">
          <li>
            <Link className="nav-link-styles" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link-styles" to="/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="nav-link-styles" to="/read">
              Read
            </Link>
          </li>
          <li>
            <Link className="nav-link-styles" to="/liked">
              Liked Posts
            </Link>
          </li>
          <li>
            <Link className="nav-link-styles" to="/disliked">
              Disliked Posts
            </Link>
          </li>
        </ul>
      </nav>
    </Typography>
  );
};
export default Nav;
