import "../styles/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorites, addToFavorites, removeFromFavorites } =
    useMovieContext();

  const favorite = isFavorites(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <section title={movie.title}>
      <div className="imgSection">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-overlay">
        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
          title="Add to favorites"
        >
          <i class="ri-heart-3-fill"></i>
        </button>
      </div>

      <div className="info">
        <h3 className="movieName">{movie.title}</h3>
        <p className="movieName">{movie.release_date?.split("-")[0]}</p>
      </div>
    </section>
  );
}

export default MovieCard;
