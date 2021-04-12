import React, { createContext, useState } from "react";

export const DislikedPagesContext = createContext();

export const DislikedIdProvider = (props) => {
  const [dislikedPostId, setDislikedPostId] = useState([""]);

  return (
    <DislikedPagesContext.Provider value={[dislikedPostId, setDislikedPostId]}>
      {props.children}
    </DislikedPagesContext.Provider>
  );
};
