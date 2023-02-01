import React from 'react';
import css from '../../styles/HomePage.module.css';
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={css.homepage}>
        <section className={css.intro_section}>
            <img className={css.handsome_mf} src="https://avatars.githubusercontent.com/u/102827145?v=4"/>
            <Link href="#secondary_section" scroll={false}><h2 className={css.intro_scroll_link}>Hi! My name is Cole. I love to code. &#8595;</h2></Link>
        </section>
        <section id="secondary_section" className={css.intro_section2}>
            <p>I also am a giant movie nerd, and I'm planning to watch 150 movies in 2023.</p>
        </section>
    </div>
  )
}

export default HomePage