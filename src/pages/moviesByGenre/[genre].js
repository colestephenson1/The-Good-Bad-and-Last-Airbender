import React from 'react';
import GridMovie from '../../components/GridMovie/GridMovie';
import Layout from '../../components/Layout/Layout';
import css from '../../styles/MoviesByGenre.module.css';

const FilteredMovies = ({ movies }) => {
    const filteredMovies = movies.sort((a,b) => b.rating - a.rating).map(movie => {
        return(
            <GridMovie 
                movie={movie}
                key={movie.id}
            />
        )
    })
  return (
    <Layout>
      <section className={css.movies_box}>
        {filteredMovies}
      </section>
    </Layout>
  )
}


export const getServerSideProps = async(context) => {
    const resData = await fetch(`https://gbla-api.vercel.app/movies/${context.params.genre}`)
    const data = await resData.json();
  
      return {
        props: {
          movies: data
      }
    } 
}

export default FilteredMovies;