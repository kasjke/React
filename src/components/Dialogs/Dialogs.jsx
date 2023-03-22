import React from "react";
import w from "./Dialogs.module.css";
import Message from "./../Dialogs/Message/Message";
import DialogItem from "./../Dialogs/DialogItems/DialogItems";

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Tanya" },
  ];
  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "message" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Are you ok?" },
    { id: 5, message: "yes,good!" },
  ];
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={w.dialogs}>
      <div className={w.dialogsitems}>{dialogsElements}</div>
      <div className={w.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
