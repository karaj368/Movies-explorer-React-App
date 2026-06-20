import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
    if (movies.length === 0) {
        return <p>No movies found.</p>
    }
  return (
   
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={(movie.imdbID)} movie={movie} />
        ))}
      </div>
   
  )
}

export default MoviesList
