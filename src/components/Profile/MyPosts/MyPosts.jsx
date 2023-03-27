import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
