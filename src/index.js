import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let posts = [
  { id: 1, message: "Hi, how are you?", like: 515 },
  { id: 2, message: "It's my first post", like: 25 },
  { id: 3, message: "Hi, You good?", like: 35 },
  { id: 4, message: "So nice to be here", like: 100 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
