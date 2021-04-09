import React, { useState } from "react";
import axios from "axios";

const EditPost = () => {
  const [title, setUpdatedTitle] = useState("");
  const [body, setUpdatedBody] = useState("");

  function handleBodyChange(e) {
    setUpdatedBody(e.target.value);
  }
  function handleTitleChange(e) {
    setUpdatedTitle(e.target.value);
  }

  return (
    <div>
      <h1>Update</h1>
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
    </div>
  );
};

export default EditPost;
