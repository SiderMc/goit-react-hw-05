import { useEffect, useState } from 'react';
import { reviewsMovies } from '../../Services/themoviedb-api';
import css from './MovieReviews.module.css';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  const { state } = useLocation();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoader(true);
        const data = await reviewsMovies(state.movieId);
        setReviews(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoader(false);
      }
    };

    fetchReviews();
  }, [state]);
  return (
    <>
      <Loader isVisible={loader} />
      <div className={css.reviews}>
        {!loader && reviews.length === 0 && (
          <p className={css.reviews__empty}>
            We don't have any reviews for this movie.
          </p>
        )}
        <ul className={css.reviews__list}>
          {!loader &&
            reviews.map(({ author, id, content }) => (
              <li className={css.reviews__list_item} key={id}>
                <p className={css.reviews__text_author}>{author}</p>
                <p className={css.reviews__text}>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
