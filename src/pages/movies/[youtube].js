import React from 'react'

const MovieDetails = ({movie}) => {
    console.log(movie)
  return (
   <></> 
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