import React from 'react';
import Layout from '../../components/Layout/Layout'
import MovieFormattedForRanking from '../../components/MovieFormattedForRanking/MovieFormattedForRanking';
import { useEffect, useState }from 'react';
import css from '../../styles/Rankings.module.css';

const Rankings = () => {

  const [movieComponents, setMovieComponents] = useState([]);

  useEffect(() => {
    fetchMovies()
  }, [movieComponents, setMovieComponents])

  

  const fetchMovies = async() => {
    const resData = await fetch('https://gbla-api.vercel.app/movies')
    const data = await resData.json();
    let count = 0;
    setMovieComponents(data.sort((a, b) => b.rating - a.rating).map(movie => {
      count ++
      return (
        <MovieFormattedForRanking
          movie={movie}
          key={movie.id}
          count={count}
        />
      )
    }))
  }

  return (
    <Layout>
      <section className={css.rankings_box}>
        <h2 className={css.rankings_greeting}>All Movies Ranked</h2>
        {movieComponents}
      </section>
    </Layout>
  )
}



export default Rankings;