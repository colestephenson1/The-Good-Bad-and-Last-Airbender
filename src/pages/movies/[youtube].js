import React from 'react';
import Layout from '../../components/Layout/Layout';
import css from "../../styles/MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
    const { title, director, lead_actors, youtube, poster, release_year, runtime, rating, review } = movie;
  return (
      <Layout>
        <section className={css.movie_details_box}>
          <h2>{title}</h2>
          <iframe src={`https://www.youtube.com/embed/${youtube}`} className={css.trailer}></iframe>
          <section className={css.greater_details_box}>
            <img src={poster} className={css.movie_poster}/>
            <section className={css.info_box}>
              <text>
                Lead Actors:
                {lead_actors.reduce((actors, actor) => {
                  return lead_actors.indexOf(actor) === lead_actors.length -1 ? actors + ` ${actor}` : actors + ` ${actor},`
                }, "" )}
              </text>
              <text>
                Director: {director}
              </text>
              <text>
                Release Year: {release_year}
              </text>
              <text>
                Runtime: {runtime}
              </text>
              <text>
                {review} 
              </text>
              <text>
                Rating: {rating}/10
              </text>
            </section>
          </section>
        </section>
      </Layout>  
    )
}

export const getServerSideProps = async(context) => {
    const resData = await fetch(`https://gbla-api.vercel.app/findmovie/${context.params.youtube}`)
    const selectedMovie = await resData.json();

      return {
        props: {
          movie: selectedMovie
      }
    } 
  }

export default MovieDetails