import MovieRow from "./components/MovieRow"  
import HeroSection from "./components/HeroSection"  
const apiKey = import.meta.env.VITE_API_KEY
import "./App.css"
function App(){
  return (
    <div>  
      <HeroSection/>
      <MovieRow 
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&&with_genres=28`}
        genre="Action" 
      /> 
      <MovieRow 
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&&with_genres=53`}
        genre="Thriller" 
      /> 
      <MovieRow 
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&&with_genres=10749`}
        genre="Romance" 
      /> 
      <MovieRow 
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&&with_genres=99`}
        genre="Documentary" 
      />  
      
    </div>
  )
}
export default App