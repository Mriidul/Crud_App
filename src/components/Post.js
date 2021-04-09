import React, { useContext } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";

const Post = () => {
  const [posts, setPosts] = useContext(PostContext);

  function handleDelete({ id }) {
    console.log("https://jsonplaceholder.typicode.com/posts/1" + id);
    axios({
      method: "delete",
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
    })
      .then((respone) => {
        console.log(respone);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>{posts.id}</h1>
      <h2>{posts.title}</h2>
      <h3>{posts.body}</h3>
      <button onClick={handleDelete} id={posts.id}>
        Delete
      </button>
      <button oncli>Update</button>
    </div>
  );
};

export default Post;
