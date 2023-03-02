import React from 'react';
import Link from 'next/link';
import css from '../../styles/MovieFormattedForRanking.module.css';

const MovieFormattedForRanking = ({movie, count}) => {

    const {poster, title, rating, youtube, release_year} = movie;

  return (
    <div className={css.movie_formatted_for_ranking}>
        <h3>{count}.</h3>
        <img src={poster} className={css.poster}/>
        <Link href={`/movies/${youtube}`}><h3 className={css.title}>{title} ({release_year})</h3></Link>
        <h3 className={css.rating}>&#11088;{rating}/10</h3>
    </div>
  )
}

export default MovieFormattedForRanking