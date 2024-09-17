import { IoSearch } from 'react-icons/io5';
import css from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../Services/themoviedb-api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Notify from '../../components/Notify/Notify';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');

  const query = searchParams.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.movie.value.trim();
    if (!searchQuery) {
      return setMessage('The search field cannot be empty.');
    } else {
      searchParams.set('query', searchQuery);
      setSearchParams(searchParams);
      event.target.reset()
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoader(true);
        const data = await searchMovies(query);
        return setMovies(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <Loader isVisible={loader} />
      <Notify message={message} />
      <div className={css.movies}>
        <form className={css.search__movie} onSubmit={handleSubmit}>
          <input type="text" className={css.search__input} name="movie" autoComplete='off'/>
          <button type="submit" className={css.search__btn}>
            <IoSearch className={css.icon} />
          </button>
        </form>
        {query && <MovieList movies={movies} />}
      </div>
    </>
  );
}
