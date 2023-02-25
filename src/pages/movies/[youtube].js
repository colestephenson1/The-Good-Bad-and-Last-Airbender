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
            <iframe src={`https://www.youtube.com/embed/${youtube}`} className={css.trailer}></iframe>
            <Link href="#greater-details-box"><h2>&#8595;</h2></Link>
          </section>
          <section id="greater-details-box"className={css.greater_details_box}>
            <img src={poster} className={css.movie_poster}/>
            <section className={css.info_box}>
              <h3>
                {title}
              </h3>
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
                Runtime: {runtime} minutes
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