import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <h1>Edit</h1>
      <div className="createPostContainer">
        <TextField
          type="text"
          className="createFields"
          id="outlined-basic"
          variant="outlined"
          label="Change UserId"
          onChange={handleUserIdChange}
          value={userId}
        />
        <TextField
          type="text"
          className="createFields"
          id="outlined-basic"
          variant="outlined"
          label="Change Title Text"
          onChange={handleTitleChange}
          value={title}
        />
        <TextField
          id="outlined-basic"
          className="createFields"
          variant="outlined"
          type="text"
          label="Change Body Text"
          onChange={handleBodyChange}
          value={body}
        />
        <Button
          variant="contained"
          color="primary"
          className="createFields"
          onClick={() => {
            handleClick(props.location.state);
          }}
        >
          Set Edited Value
        </Button>
      </div>
    </div>
  );
};

export default EditPost;
