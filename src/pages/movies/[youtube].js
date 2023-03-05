import React from 'react';
import Layout from '../../components/Layout/Layout';
import css from "../../styles/MovieDetails.module.css";
import Link from "next/link";

const MovieDetails = ({ movie }) => {

    const { title, director, lead_actors, youtube, poster, release_year, runtime, rating, review } = movie;

  return (
      <Layout>
        <section className={css.movie_details_box} >
          <section className={css.trailer_and_link}>
            <iframe src={`https://www.youtube.com/embed/${youtube}`} className={css.trailer} title={`${title} trailer`}></iframe>
            <Link href="#greater-details-box"><h2 className={css.link_to_details}>&#8595;</h2></Link>
          </section>
          <section id="greater-details-box"className={css.greater_details_box}>
            <img src={poster} className={css.movie_poster} alt={`${title} poster`}/>
            <section className={css.info_box}>
              <h3>
                {title}
              </h3>
              <p>
                Lead Actors:
                {lead_actors.reduce((actors, actor) => {
                  return lead_actors.indexOf(actor) === lead_actors.length -1 ? actors + ` and ${actor}` : actors + ` ${actor},`
                }, "" )}
              </p>
              <p>
                Director: {director}
              </p>
              <p>
                Release Year: {release_year}
              </p>
              <p>
                Runtime: {runtime} minutes
              </p>
              <p>
                {review} 
              </p>
              <p>
                Rating: {rating}/10
              </p>
            </section>
          </section>
        </section>
      </Layout>  
    )
};

export const getStaticPaths = async() => {
  const resData = await fetch('https://gbla-api.vercel.app/movies')
  const data = await resData.json();
  const paths = data.map(movie => {
    return {
      params: {youtube: movie.youtube}
    }
  })

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async(context) => {
  const resData = await fetch(`https://gbla-api.vercel.app/findmovie/${context.params.youtube}`)
  const selectedMovie = await resData.json();

    return {
      props: {
        movie: selectedMovie
    }
  } 
};

export default MovieDetails;