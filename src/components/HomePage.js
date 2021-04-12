import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const [posts, setPosts] = useContext(PostContext);

  return (
    <Typography>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <h1>{post.id}</h1>
              <h3>{post.title}</h3>
              <Link
                to={{
                  pathname: "/read",
                  state: {
                    id: post.id,
                  },
                }}
              >
                <Button variant="text" color="primary">
                  View
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </Typography>
  );
};

export default HomePage;
