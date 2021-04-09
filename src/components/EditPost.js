import React, { useState } from "react";
import axios from "axios";

const EditPost = (props) => {
  const [title, setUpdatedTitle] = useState("");
  const [body, setUpdatedBody] = useState("");
  const [userId, setUpdatedUserId] = useState("");

  function handleBodyChange(e) {
    setUpdatedBody(e.target.value);
  }
  function handleTitleChange(e) {
    setUpdatedTitle(e.target.value);
  }
  function handleUserIdChange(e) {
    setUpdatedUserId(e.target.value);
  }
  function handleClick(id) {
    axios({
      method: "patch",
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      data: {
        title: title,
        body: body,
        userId: userId,
      },
    })
      .then((respone) => {
        console.log(respone);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  }
  return (
    <div>
      <h1>Update</h1>
      <input
        type="text"
        placeholder="Change User Id"
        onChange={handleUserIdChange}
        value={userId}
      />
      <input
        type="text"
        placeholder="Change Title Text"
        onChange={handleTitleChange}
        value={title}
      />
      <input
        type="text"
        placeholder="Change Body Text"
        onChange={handleBodyChange}
        value={body}
      />
      <button
        onClick={() => {
          handleClick(props.location.state);
        }}
      >
        Set Edited Value
      </button>
    </div>
  );
};

export default EditPost;
