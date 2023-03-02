import React from 'react'
import Link from 'next/link'
import css from '../../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={css.navbar}>
        <Link href="/"><h1>The Good, The Bad, and The Last Airbender</h1></Link>
        <section className={css.navbar_options}>
            <Link href='/moviesByGenre/Action'><h3 className={css.navbar_option}>Action</h3></Link>
            <Link href='/moviesByGenre/Comedy'><h3 className={css.navbar_option}>Comedy</h3></Link>
            <Link href='/moviesByGenre/Drama'><h3 className={css.navbar_option}>Drama</h3></Link>
            <Link href='/moviesByGenre/Fantasy'><h3 className={css.navbar_option}>Fantasy</h3></Link>
            <Link href='/moviesByGenre/Horror'><h3 className={css.navbar_option}>Horror</h3></Link>
            <Link href='/moviesByGenre/Mystery'><h3 className={css.navbar_option}>Mystery</h3></Link>
            <Link href='/moviesByGenre/Thriller'><h3 className={css.navbar_option}>Thriller</h3></Link>
            <Link href='/movies/rankings'><h3 className={css.navbar_option}>The Rankings</h3></Link>
        </section>
    </div>
  )
}

export default NavBar