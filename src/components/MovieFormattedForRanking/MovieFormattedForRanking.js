import React from 'react';
import Link from 'next/link';

const MovieFormattedForRanking = ({movie}) => {

    const {poster, title, rating, youtube} = movie;

  return (
    <div>
        <img src={poster}/>
        <Link href={`/movies/${youtube}`}><h3>{title}</h3></Link>
        <h3>{rating}</h3>
    </div>
  )
}

export default MovieFormattedForRanking