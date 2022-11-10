import { useMovies } from '../../hooks';
import { trimTitle } from '../../helpers';
import './PopularMovies.css'

export default function PopularMovies() {
    const { movies } = useMovies();
    return (
      <div className='PopularMovies'>
        <h2 className='header-title'>Popular Movies</h2>
          {movies?.map((movie, index) => {
            return (
              <div key={index} className='movie'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className='movie-poster'
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                  alt='movie poster'
                />
                <h4 className='movie-title'>{trimTitle(movie.original_title)}</h4>
              </div>
            );
          })}
      </div>
    );
  }
  