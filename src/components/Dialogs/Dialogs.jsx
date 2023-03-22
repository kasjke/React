import React from "react";
import w from "./Dialogs.module.css";
import Message from "./../Dialogs/Message/Message";
import DialogItem from "./../Dialogs/DialogItems/DialogItems";

const Dialogs = (props) => {
  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "message" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Are you ok?" },
    { id: 5, message: "yes,good!" },
  ];
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  console.log('ddsfsdfds')

  return (
    <div className={w.dialogs}>
      <div className={w.dialogsitems}>{dialogsElements}</div>
      <div className={w.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
