import { useEffect } from 'react';
import css from './MovieCast.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovies } from '../../Services/themoviedb-api';
import Loader from '../Loader/Loader';

export default function MovieCast() {
  const [dataInfo, setDataInfo] = useState([]);
  const [loader, setLoader] = useState(false);
  const {movieId}=useParams()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoader(true);
        const data = await creditsMovies(movieId);
        setDataInfo(data.cast);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <>
      <Loader isVisible={loader} />
      <div className={css.characters__info}>
        <ul className={css.characters__list}>
          {!loader && dataInfo.length > 0 ? (
            dataInfo.map(({ id, character, profile_path, name }) => (
              <li className={css.characters__list_item} key={id}>
                <img
                  className={css.characters__img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://picsum.photos/id/331/200/300'
                  }
                  alt={character || 'Character'}
                />
                <p className={css.characters__text}>
                  {' '}
                  Character : <span>{character || 'Unknown character'}</span>
                </p>
                <p className={css.characters__text}>
                  Name : <span> {name || 'Unknown actor'}</span>
                </p>
              </li>
            ))
          ) : (
            <p>No cast information available.</p>
          )}
        </ul>
      </div>
    </>
  );
}
