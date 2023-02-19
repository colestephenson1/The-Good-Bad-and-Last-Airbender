import React from 'react';
import Header from '../Header/Header';
// import css from '../../styles/Layout.module.css';

const Layout = ( {children} ) => {
    return (
      <div>
        <Header/>
        {children}
      </div>
  )
}

export default Layout