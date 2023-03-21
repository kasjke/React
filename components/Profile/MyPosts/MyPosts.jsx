import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi, how are you?", like: 515 },
    { id: 2, message: "It's my first post", like: 25 },
  ];
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[1].like} />
      </div>
    </div>
  );
};

export default MyPosts;
