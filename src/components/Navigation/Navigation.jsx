import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function activeLink({ isActive }) {
  if (isActive) return css.active__nav_link;
}

export default function Navigation() {
  return (
    <nav className={css.header__nav}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}
