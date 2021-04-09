import React, { useContext } from "react";
import axios from "axios";
// import { PostContext } from "../context/PostContext";

const Post = ({ id, title, body }) => {
  // const [posts, setPosts] = useContext(PostContext);

  function handleDelete({ id }) {
    // console.log("https://jsonplaceholder.typicode.com/posts/1" + id);
    // axios({
    //   method: "delete",
    //   url: "https://jsonplaceholder.typicode.com/posts/" + id,
    // })
    //   .then((respone) => {
    //     console.log(respone);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <button onClick={handleDelete} id={id}>
        Delete
      </button>
      <button oncli>Update</button>
    </div>
  );
};

export default Post;
