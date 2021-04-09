import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Post from "./Post";
import { PostContext } from "../context/PostContext";

const PostList = () => {
  const [posts, setPosts] = useContext(PostContext);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts  ")
  //     .then(function (response) {
  //       // handle success
  //       setPosts(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // });

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            id={post.id}
            userId={post.userId}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default PostList;
