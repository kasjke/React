import s from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://eslpro.imgix.net/tour/wp-content/uploads/2022/04/game-logo-sc2.png?auto=format%2Ccompress&w=1024&h=1024"
        alt="#"
      />
    </header>
  );
};

export default Header;
