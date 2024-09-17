import css from './NotFoundPage.module.css';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={css.not__found_content}>
      <Link to="/" className={css.back__btn}>
        <IoIosArrowRoundBack className={css.icon} /> Go Back
      </Link>
      <h1 className={css.not__found_title}>Page Not Found</h1>
    </div>
  );
}
