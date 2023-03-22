import React from "react";
import w from "./Message.module.css";

const Message = (props) => {
  return <div className={w.dialog}>{props.message}</div>;
};

export default Message;
