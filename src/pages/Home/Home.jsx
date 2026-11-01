import { useState, useEffect } from 'react';
import { getTrending } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => setMovies(data.results))
      .catch(error => console.error(error.message));
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
