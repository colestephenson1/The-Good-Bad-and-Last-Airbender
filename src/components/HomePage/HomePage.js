import React from 'react';
import css from '../../styles/HomePage.module.css';
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const HomePage = ({movies}) => {

    const string = "I also love movies!";
    const string2 = "I'm planning to watch 150 of them in 2023.";
    const string3 = "This app has all my thoughts and ratings as I watch them.";

     
    const clickableMovies = movies.slice(0, 3).map(movie => {

        return(
            <Link href={`/movies/${movie.youtube}`} key={movie.youtube}><img key={movie.poster} className={css.tertiary_intro_movie_poster} src={movie.poster} alt={`${movie.title} poster`}/></Link>
        )
    });  


  return (
    <div className={css.homepage}>
        <section id="primary_section" className={css.intro_section}>
            <img className={css.handsome_mf} src="https://avatars.githubusercontent.com/u/102827145?v=4" alt="picture of Cole"/>
            <section className={css.primary_text_box}>
                <Link href="#secondary_section" scroll={false}><h2 className={css.intro_scroll_link}>Hi! My name is Cole. I love to code. &#8595;</h2></Link>
                <section className={css.links}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/cole-stephenson-99688a240/"
                        aria-label="Cole Stephenson LinkedIn Website">
                            <AiFillLinkedin className={css.external_link} />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/colestephenson1"
                        aria-label="Cole Stephenson LinkedIn Website">
                            <AiFillGithub className={css.external_link}/>
                    </a>   
                </section>
            </section>
        </section>
        <section id="secondary_section" className={css.intro_section2}>
            <section className={css.intro_section2_text_box}>
                <Link href="#tertiary_section" scroll={false} className='secondary_link'>
                    <h2>{string}</h2>
                    <h2>{string2}</h2>
                    <h2>{string3}</h2>
                    <h2>&#8595;</h2>
                </Link>
            </section>
            <img className={css.movie_poster} src="https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg" alt="Pulp Fiction poster"/>
        </section>
        <section id="tertiary_section" className={css.intro_section3}>
            <Link href='#header' key={'linkToTop'}><h2 className={css.tertiary_link}>Here's three movies to get you started. Click one, or click this &#8593; to head back to the top. You can choose a genre, or go to the rankings.</h2></Link>
            <section className={css.movie_posters_box_intro_tertiary}>
                {clickableMovies}
            </section>
        </section>
    </div>
  )
};

export default HomePage;