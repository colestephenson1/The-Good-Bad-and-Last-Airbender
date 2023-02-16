import React from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <Link href='/'><img className='logo'/></Link>
        <section className={styles.navbar_options}>
            <h3>Action</h3>
            <h3>Comedy</h3>
            <h3>Drama</h3>
            <h3>Fantasy</h3>
            <h3>Horror</h3>
            <h3>Mystery</h3>
            <h3>Thriller</h3>
            <Link href={'/movies/rankings'}><h3>The Rankings</h3></Link>
        </section>
    </div>
  )
}

export default NavBar