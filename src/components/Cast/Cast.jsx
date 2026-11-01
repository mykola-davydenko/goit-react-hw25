import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.error(error.message));
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We don't have any cast info for this movie</p>;
  }

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.credit_id} className={css.item}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
              alt={actor.name}
            />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
