import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './Movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    searchMovies(query)
      .then(data => setMovies(data.results))
      .catch(error => console.error(error.message));
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          defaultValue={query}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default Movies;
