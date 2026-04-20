
import useFetch from "./useFetch";
import "./Search.css"
const apiKey = import.meta.env.VITE_API_KEY;
const Search = ({ query }) => {


const url = query
  ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  : null;

  const movies = useFetch(url);

  return (
    <div className="searchContainer">
    <h2>Results for: {query}</h2>

    <div className="searchGrid">
        {movies?.map((movie) => (
          <div key={movie.id} className="searchCard">

            <img src={
            movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
            alt={movie.title}/>
            <div className="title">
                <p>{movie.title}</p>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Search;