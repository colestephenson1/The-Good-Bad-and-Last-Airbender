import React from 'react';
import styles from "../../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div id="header" className={styles.header}>
        <Link href="/"><h1>The Good, The Bad, and The Last Airbender</h1></Link>
    </div>
  )
}

export default Header;