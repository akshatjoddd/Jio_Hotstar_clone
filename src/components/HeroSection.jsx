import React from 'react' 
import useFetch from './useFetch' 
const apiKey = import.meta.env.VITE_API_KEY
const HeroSection = () => { 
    const movie=useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&&with_genres=28`)  
    const randomNumber = Math.floor(Math.random() * movie.length)
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), transparent), 
                        url(https://image.tmdb.org/t/p/original${movie[randomNumber]?.backdrop_path})`,
            }}
            > 
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
                <div id="HeroMovieData">
                    <h1 style={{fontSize:"60px"}}>{movie[randomNumber]?.title}</h1>
                    <p style={{fontSize:"20px"}}>{movie[randomNumber]?.overview}</p> 
                    <button className="hero-btns">Watch Now</button>
                    <button className="hero-btns">Watchlist</button>
                </div>
            </div>
        </div>
  )
}

export default HeroSection
