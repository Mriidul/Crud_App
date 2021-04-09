import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = ({ id, title, body }) => {
  function handleDelete(id) {
    console.log("https://jsonplaceholder.typicode.com/posts/" + id);
    axios({
      method: "delete",
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLike(id) {}
  function handleDislike(id) {}
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
      <button
        onClick={() => {
          handleLike(id);
        }}
      >
        Like
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <Link
        to={{
          pathname: "/update",
          state: {
            id: id,
          },
        }}
      >
        <button>Update</button>
        <button
          onClick={() => {
            handleDislike(id);
          }}
        >
          Disike
        </button>
      </Link>
    </div>
  );
};

export default Post;
