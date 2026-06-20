import { useState, useEffect, useRef } from "react";
import MoviesList from "../components/MoviesList";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const fetchMovies = async (query) => {
        setLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?apikey=84b54718&s=${query}`)
        const data = await response.json();
        setMovies(data.Search || []);
        console.log(data.Search);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies("Avengers");
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (query) {
            fetchMovies(query);
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="searchForm">
                <input ref={inputRef} className="searchInput" placeholder="Search for a movie..."  />
                <button type="submit">Search 🔎</button>
            </form>
                {loading ? <p className="text-center">Loading...</p> :  <MoviesList movies={movies} />}
           
        </div>
    );
}

export default Home;
