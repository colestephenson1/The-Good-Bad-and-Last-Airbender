import React from 'react';
import css from "../../styles/Header.module.css";
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <div id="header" className={css.header}>
        <NavBar/>
    </div>
  )
};

export default Header;