import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader({ isVisible }) {
  return (
    <>
      {isVisible && (
        <div className={css.loader}>
          <div className={css.loader__overlay}></div>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            colors={['#009b4d', '#009b4d']}
            ariaLabel="hourglass-loading"
            wrapperClass={css.spinner}
          />
        </div>
      )}
    </>
  );
}
