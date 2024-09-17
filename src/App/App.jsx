import 'modern-normalize';
import css from './App.module.css';
import Navigation from '../components/Navigation/Navigation';
import AppRoutes from './App.routes';

export default function App() {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.container}>
          <Navigation />
        </div>
      </header>
      <section className={css.section}>
        <div className={css.container}>
          <AppRoutes/>
        </div>
      </section>
    </div>
  );
}
