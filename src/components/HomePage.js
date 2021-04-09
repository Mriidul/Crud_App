import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useContext(PostContext);

  return (
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
              <button>View</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
