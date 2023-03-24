import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/dialogs"> Dialogs </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/News"> News </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/Music"> Music </NavLink>
      </div>
      <div className={s.itemS}>
        <NavLink to="/Settings"> Settings </NavLink>
      </div>
      <div className={s.friends}>
        <NavLink to="/Friends">Friends </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
