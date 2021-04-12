import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PostProvider } from "./context/PostContext";
import { LikedIdProvider } from "./context/LikedPagesContext";
import { DislikedIdProvider } from "./context/DislikedPageContext";

ReactDOM.render(
  <React.StrictMode>
    <DislikedIdProvider>
      <LikedIdProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </LikedIdProvider>
    </DislikedIdProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
