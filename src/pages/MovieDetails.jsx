import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=84b54718&i=${id}`);
            const data = await response.json();
            setMovie(data);
            console.log(data);
        };

        fetchMovie();
    }, [id]);

  return (
    	<div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot} </p>
	</div>
  )
}

export default MovieDetails
