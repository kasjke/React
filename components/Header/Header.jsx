import s from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMX6bmuK4kRGretEZEnEbj6WA7ldb1PN7Fig&usqp=CAU"
        alt="#"
      />
    </header>
  );
};

export default Header;
