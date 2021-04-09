import React, { useState } from "react";
import axios from "axios";

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
    // alert("submitted");
    // axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   data: {
    //     title,
    //     body,
    //     userId,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  return (
    <div>
      <input
        value={userId}
        type="text"
        placeholder="Give UserId"
        onChange={handleUserId}
      />
      <input
        value={title}
        type="text"
        placeholder="Give Title of Post"
        onChange={handleTitle}
      />
      <input
        value={body}
        type="text"
        placeholder="Give body of the post"
        onChange={handleBody}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
};

export default AddPost;
