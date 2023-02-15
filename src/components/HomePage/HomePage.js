import React, { useEffect } from 'react';
import css from '../../styles/HomePage.module.css';
import Link from "next/link";

const HomePage = ({movies}) => {

    const string = "I also love movies!";
    const string2 = "I'm planning to watch 150 of them in 2023.";
    const string3 = "This app has all my thoughts and ratings as I watch them.";

     
    const clickableMovies = movies.slice(0, 3).map(movie => {

        return(
            <Link href={`/movies/${movie.youtube}`} key={movie.youtube}><img key={movie.poster} className={css.tertiary_intro_movie_poster} src={movie.poster}/></Link>
        )
    })  


  return (
    <div className={css.homepage}>
        <section id="primary_section" className={css.intro_section} key={'primarySection'}>
            <img className={css.handsome_mf} key={'handsomeMF'} src="https://avatars.githubusercontent.com/u/102827145?v=4"/>
            <Link href="#secondary_section" scroll={false}><h2 className={css.intro_scroll_link} key={'secondaryLink'}>Hi! My name is Cole. I love to code. &#8595;</h2></Link>
        </section>
        <section id="secondary_section" className={css.intro_section2} key={'secondarySection'}>
            <section className={css.intro_section2_text_box} key={'secondarySectionTextBox'}>
                <Link href="#tertiary_section" scroll={false} key={'tertiaryLink'}>
                    <h2 key={'string1'}>{string}</h2>
                    <h2 key={'string2'}>{string2}</h2>
                    <h2 key={'string3'}>{string3}</h2>
                    <h2 key={'arrowDown'}>&#8595;</h2>
                </Link>
            </section>
            <img className={css.movie_poster} key={'pfPoster'} src="https://i5.walmartimages.com/asr/06ec9422-7ea9-42ee-b7da-499dd3e1ce2f.9f0ef34df5ae1895cb0d1b4e083b8496.jpeg"/>
        </section>
        <section id="tertiary_section" className={css.intro_section3} key={'tertiarySection'}>
            <Link href='#header' key={'linkToTop'}><h2>Here's three movies to get you started. Click one, or click this &#8593; to head back to the top. You can choose a genre, or go to the rankings.</h2></Link>
            <section className={css.movie_posters_box_intro_tertiary} key={'moviePostersBox'}>
                {clickableMovies}
            </section>
        </section>
    </div>
  )
}

export default HomePage