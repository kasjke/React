import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://st.violity.com/auction/big/auctions/13/3/48/7/130348766.jpg"
        alt="#"
      />
      {props.message}
      <div> likes : {props.like} </div>
    </div>
  );
};

export default Post;
