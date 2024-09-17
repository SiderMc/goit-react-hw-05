import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movie__list}>
      {movies &&
        movies.map(({ id, title, poster_path }) => (
          <li className={css.movie__list_item} key={id}>
            <Link to={`/movies/${id}`} state={location}>
              <img
                className={css.movie__list_img}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://picsum.photos/id/353/200/300'
                }
                alt={title}
              />
              <h2 className={css.movie__list_title}>{title}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
}
