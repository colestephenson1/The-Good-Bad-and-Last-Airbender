import React from 'react'
import Layout from '../Layout/Layout';

const GridMovie = ({movie}) => {
    
    const {poster, title, rating} = movie;

  return (
    <div>
        <img src={poster}/>
        <text>{title} {rating}</text>
    </div> 
  )
}

export default GridMovie