import { useState } from "react";
import MovieRow from "./components/MovieRow";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <Navbar setQuery={setQuery} />

      {query ? (
        <Search query={query} />
      ) : (
        <div>
          <HeroSection />

          <MovieRow
            url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`}
            genre="Action"
          />

          <MovieRow
            url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=53`}
            genre="Thriller"
          />

          <MovieRow
            url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`}
            genre="Romance"
          />

          <MovieRow
            url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`}
            genre="Documentary"
          />
        </div>
      )}
    </div>
  );
}

export default App;
