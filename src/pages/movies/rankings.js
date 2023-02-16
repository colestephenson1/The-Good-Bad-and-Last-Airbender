import React from 'react';
import Layout from '../../components/Layout/Layout'
import MovieFormattedForRanking from '../../components/MovieFormattedForRanking/MovieFormattedForRanking';
import { useEffect, useState }from 'react';

const Rankings = () => {

  const [movieComponents, setMovieComponents] = useState([]);

  useEffect(() => {
    fetchMovies()
  }, [movieComponents, setMovieComponents])

  

  const fetchMovies = async() => {
    const resData = await fetch('https://gbla-api.vercel.app/movies')
    const data = await resData.json();
    setMovieComponents(data.sort((a, b) => b.rating - a.rating).map(movie => {
      return (
        <MovieFormattedForRanking
          movie={movie}
          key={movie.id}
        />
      )
    }))
  }


 

  return (
    <Layout>
        <section>
         {movieComponents}
        </section>
    </Layout>
  )
}



export default Rankings