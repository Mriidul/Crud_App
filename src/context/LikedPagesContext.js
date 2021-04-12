import React, { createContext, useState } from "react";

export const LikedPagesContext = createContext();

export const LikedIdProvider = (props) => {
  const [likedPostId, setLikedPostId] = useState([""]);

  return (
    <LikedPagesContext.Provider value={[likedPostId, setLikedPostId]}>
      {props.children}
    </LikedPagesContext.Provider>
  );
};
