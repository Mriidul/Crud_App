import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "./Post";
import { PostContext } from "../context/PostContext";

const PostList = () => {
  const [posts, setPosts] = useContext(PostContext);
  return (
    <div className="postContainer">
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            id={post.id}
            userId={post.userId}
            body={post.body}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default PostList;
