import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link href='/'><img className='logo'/></Link>
        <section className='navbarOptions'>
            <h3>Action</h3>
            <h3>Adeventure</h3>
        </section>
    </div>
  )
}

export default NavBar