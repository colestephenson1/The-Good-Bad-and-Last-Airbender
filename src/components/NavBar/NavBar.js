import React from 'react';
import Link from 'next/link';
import css from '../../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div className={css.navbar} id="navbar">
        <Link href="/"><h1 className={css.app_title}>The Good, The Bad, and The Last Airbender</h1></Link>
        <section className={css.navbar_options}>
            <Link href='/moviesByGenre/Action'><p className={css.navbar_option}>Action</p></Link>
            <Link href='/moviesByGenre/Comedy'><p className={css.navbar_option}>Comedy</p></Link>
            <Link href='/moviesByGenre/Drama'><p className={css.navbar_option}>Drama</p></Link>
            <Link href='/moviesByGenre/Fantasy'><p className={css.navbar_option}>Fantasy</p></Link>
            <Link href='/moviesByGenre/Horror'><p className={css.navbar_option}>Horror</p></Link>
            <Link href='/moviesByGenre/Mystery'><p className={css.navbar_option}>Mystery</p></Link>
            <Link href='/moviesByGenre/Thriller'><p className={css.navbar_option}>Thriller</p></Link>
            <Link href='/movies/rankings'><p className={css.navbar_option}>The Rankings</p></Link>
        </section>
    </div>
  )
};

export default NavBar;