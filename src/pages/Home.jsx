  import { useEffect, useState } from "react";
  import "../styles/Loading.css";
  import "../styles/SearchFrom.css";
  import MovieCard from "../components/MovieCard";
  import { getPopularMovies, searchMovies } from "../services/api";

  function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load popular movies on initial mount
    useEffect(() => {
      const loadPopularMovies = async () => {
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        } catch (err) {
          setError("Failed to load movies...");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
      e.preventDefault();

      if (!searchQuery.trim()) return;

      try {
        setLoading(true);

        const searchResults = await searchMovies(searchQuery);

        setMovies(searchResults);
      } catch (err) {
        console.log(err);
        setError("Failed to search movies...");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="container">
        <form onSubmit={handleSearch} className="searchFrom">
          <input
            type="text"
            placeholder="Search for movies..."
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="searchBtn">
            Search
          </button>
        </form>

        {error && <div className="errorMessage">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="loader-spinner"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movieGrid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    );
  }

  export default Home;
