import React from "react";
import w from "./Dialogs.module.css";
import Message from "./../Dialogs/Message/Message";
import DialogItem from "./../Dialogs/DialogItems/DialogItems";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={w.dialogs}>
      <div className={w.dialogsitems}>{dialogsElements}</div>
      <div className={w.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
