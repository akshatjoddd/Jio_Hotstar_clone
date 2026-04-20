import React, { useEffect, useState } from 'react' 
import useFetch from './useFetch'
const MovieRow = ({ url,genre }) => {  
    const movie=useFetch(url)
    return (
        <div className="row">
            <h2>{genre}</h2>
            <div className="main">
                {movie.map(x => (
                <div className="movieimg" key={x.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${x.backdrop_path}`} />
                    <div className="overlay">
                    <p>{x.title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )

}

export default MovieRow