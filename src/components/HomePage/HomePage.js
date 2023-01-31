import React from 'react'
import css from '../../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.homepage}>
        <img className={css.handsome_mf} src="https://avatars.githubusercontent.com/u/102827145?v=4"/>
        <h2>Hi! My name is Cole.</h2>
    </div>
  )
}

export default HomePage