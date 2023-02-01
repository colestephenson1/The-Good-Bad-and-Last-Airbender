import React, { useEffect } from 'react';
import css from '../../styles/HomePage.module.css';
import Link from "next/link";

const HomePage = () => {

    const string = "I also love movies!";
    const string2 = "I'm planning to watch 150 of them in 2023.";
    const string3 = "This app has all my thoughts and ratings as I watch them.";

  return (
    <div className={css.homepage}>
        <section id="primary_section" className={css.intro_section}>
            <img className={css.handsome_mf} src="https://avatars.githubusercontent.com/u/102827145?v=4"/>
            <Link href="#secondary_section" scroll={false}><h2 className={css.intro_scroll_link}>Hi! My name is Cole. I love to code. &#8595;</h2></Link>
        </section>
        <section id="secondary_section" className={css.intro_section2}>
            <section className={css.intro_section2_text_box}>
                <Link href="#tertiary_section" scroll={false}>
                    <h2>{string}</h2>
                    <h2>{string2}</h2>
                    <h2>{string3}</h2>
                    <h2>&#8595;</h2>
                </Link>
            </section>
            <img className={css.movie_poster} src="https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg"/>
        </section>
        <section id="tertiary_section" className={css.intro_section3}>
            <h2>Hello</h2>
        </section>
    </div>
  )
}

export default HomePage