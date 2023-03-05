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
  });

  return (
    <Layout>
      <section className={css.movies_box}>
        {filteredMovies}
      </section>
    </Layout>
  )
};


export const getStaticPaths = async() => {

  const resData = await fetch('https://gbla-api.vercel.app/movies')
  const data = await resData.json()

  const dynamicGenres = data.reduce((allGenres, movie) => {
    movie.genres.forEach(genre => {
      if (!allGenres.includes(genre)) {
        allGenres.push(genre)
      }
    })
    return allGenres;
  }, []);


  const paths = dynamicGenres.map(genre => {
    return {
      params: {genre: genre}
    }
  });

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async(context) => {

  const resData = await fetch(`https://gbla-api.vercel.app/movies/${context.params.genre}`);
  const data = await resData.json();

    return {
      props: {
        movies: data
    }
  } 
};

export default FilteredMovies;