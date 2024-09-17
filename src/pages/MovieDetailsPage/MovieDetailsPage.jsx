import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { detailsMovies } from '../../Services/themoviedb-api';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Loader from '../../components/Loader/Loader';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const detailsRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoader(true);
        const data = await detailsMovies(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, [movieId]);
  return (
    <>
      <Loader isVisible={loader} />
      {movie && (
        <div className={css.movie__details_content}>
          <Link to={detailsRef.current} className={css.details__btn}>
            <IoIosArrowRoundBack className={css.icon} /> Go Back
          </Link>
          <div className={css.movie__detail_header}>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : 'https://picsum.photos/id/353/200/300'
              }
              alt={movie.title}
              className={css.movie__details_img}
            />
            <div className={css.movie__details_text_content}>
              <h2 className={css.movie__details_title}>{movie.title}</h2>
              <p className={css.movie__details_text}>
                User score :{' '}
                <span>{`${Math.ceil(movie.vote_average * 10)}%`}</span>
              </p>
              <p className={css.movie__details_text}>
                Overview : <span>{movie.overview}</span>
              </p>
              <p className={css.movie__details_text}>
                Genres :{' '}
                <span>{movie.genres.map(({ name }) => name).join(', ')}</span>
              </p>
              <p className={css.movie__details_text}>
                Status : <span>{movie.status}</span>
              </p>
            </div>
          </div>
          <div className={css.movie__detail_footer}>
            <div className={css.info__content}>
              <h3 className={css.info__title}>Additional Information</h3>
              <Link to="cast" state={{ movieId }} className={css.details__btn}>
                Cast
              </Link>
              <Link
                to="reviews"
                state={{ movieId }}
                className={css.details__btn}>
                Reviews
              </Link>
            </div>
            <Suspense fallback={<Loader isVisible={true} />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
