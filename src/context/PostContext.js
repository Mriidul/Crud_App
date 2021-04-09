import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostProvider value={[posts, setPosts]}>{props.children}</PostProvider>
  );
};
