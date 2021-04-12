import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { LikedPagesContext } from "../context/LikedPagesContext";
import { DislikedPagesContext } from "../context/DislikedPageContext";
import { Typography } from "@material-ui/core";

const Post = ({ id, title, body }) => {
  const [likedPostId, setLikedPostId] = useContext(LikedPagesContext);
  const [dislikedPostId, setDislikedPostId] = useContext(DislikedPagesContext);
  // const [liked, setLiked] = useState("Like");
  // const [disliked, setDisliked] = useState("Dislike");

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

  function handleLike(id) {
    const alreadyExists = likedPostId.includes(id);
    if (!alreadyExists) {
      setLikedPostId((prevValue) => {
        return [...prevValue, id];
      });
      setDislikedPostId((prevValue) => {
        return prevValue.filter((value) => {
          return value !== id;
        });
      });
    }

    console.log(likedPostId);
    // setLiked("Liked");
    // setDisliked("Dislike");
  }
  function handleDislike(id) {
    const alreadyExists = likedPostId.includes(id);
    if (alreadyExists) {
      setDislikedPostId((prevValue) => {
        return [...prevValue, id];
      });
      setLikedPostId((prevValue) => {
        return prevValue.filter((value) => {
          return value !== id;
        });
      });
    }
    console.log(likedPostId);
    // setLiked("Like");
    // setDisliked("Disliked");
  }
  return (
    <Typography>
      <div>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button
          style={{ margin: "0px 10px" }}
          color="primary"
          onClick={() => {
            handleLike(id);
          }}
        >
          like
        </Button>
        <Button
          style={{ margin: "0px 10px" }}
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </Button>
        <Link
          to={{
            pathname: "/update",
            state: {
              id: id,
            },
          }}
        >
          <Button style={{ margin: "0px 10px" }}>Edit</Button>
        </Link>
        <Button
          style={{ margin: "0px 10px" }}
          color="secondary"
          onClick={() => {
            handleDislike(id);
          }}
        >
          dislike
        </Button>
      </div>
    </Typography>
  );
};

export default Post;
