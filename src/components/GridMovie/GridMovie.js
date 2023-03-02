import React from 'react';
import Link from 'next/link';
import css from '../../styles/GridMovie.module.css';

const GridMovie = ({movie}) => {
    
    const {poster, title, rating, youtube} = movie;

  return (
    <div className={css.grid_movie}>
        <img src={poster} className={css.poster}/>
        <Link href={`/movies/${youtube}`}><h3 className={css.grid_movie_title}>{title} &#11088;{rating}/10</h3></Link>
    </div> 
  )
}

export default GridMovie