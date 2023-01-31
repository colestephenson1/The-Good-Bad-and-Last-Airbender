import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const Layout = ( {children} ) => {
    return (
      <div>
        <Header/>
        <NavBar/>
        {children}
      </div>
  )
}

export default Layout