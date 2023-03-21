import React from "react";
import w from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={w.dialog + " " + w.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={w.dialog}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Tanya" },
  ];
  let messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "message" },
    { id: 3, message: "How are you" },
    { id: 4, message: "Are you ok?" },
    { id: 5, message: "yes,good!" },
  ];

  return (
    <div className={w.dialogs}>
      <div className={w.dialogsitems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={w.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
