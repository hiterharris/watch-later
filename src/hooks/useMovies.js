import { useState, useEffect } from 'react';

export default function useMovies() {
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .then(data => setmovies(data.results))
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    return { movies };
}
