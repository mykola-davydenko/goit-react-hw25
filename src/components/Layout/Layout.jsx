import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

function Layout() {
  const getClass = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <div>
      <header className={css.header}>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getClass}>
          Movies
        </NavLink>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
