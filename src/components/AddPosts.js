import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [userId, setUserId] = useState("");

  function handleBody(e) {
    setBody(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleUserId(e) {
    setUserId(e.target.value);
  }
  function submitData() {
    alert("submitted");
    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title,
        body,
        userId,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="createPostContainer">
      <TextField
        className="createFields"
        id="outlined-basic"
        variant="outlined"
        value={userId}
        type="text"
        label="Give UserId"
        onChange={handleUserId}
      />
      <TextField
        className="createFields"
        id="outlined-basic"
        variant="outlined"
        value={title}
        type="text"
        label="Give Title of Post"
        onChange={handleTitle}
      />
      <TextField
        className="createFields"
        id="outlined-basic"
        variant="outlined"
        value={body}
        type="text"
        label="Give body of the post"
        onChange={handleBody}
      />
      <Button
        className="createFields"
        variant="contained"
        color="primary"
        onClick={submitData}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddPost;
