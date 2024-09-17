import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { trendingMovies } from '../../Services/themoviedb-api';
import css from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoader(true);
        const data = await trendingMovies();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Loader isVisible={loader} />
      <div className={css.section__content}>
        <h1 className={css.section__title}>Trending movies today</h1>
        {!loader && <MovieList movies={movies} />}
      </div>
    </>
  );
}
