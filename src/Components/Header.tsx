import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`drop-shadow-lg ${
        theme === 'dark'
          ? 'bg-secondary text-primary'
          : 'bg-primary text-seconday'
      }`}
    >
      <nav className="flex justify-around items-center font-bold py-2 md:py-9 mx-2 md:mx-20 lg:mx-60">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `text-lg bg-gradient-to-r bg-[length:100%_3px] bg-bottom bg-no-repeat to-blue-400 ${
                  theme === 'light' ? 'from-secondary' : 'from-primary'
                }`
              : 'hover:animate-float'
          }
        >
          home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? `text-lg bg-gradient-to-r bg-[length:100%_3px] bg-bottom bg-no-repeat to-blue-400 ${
                  theme === 'light' ? 'from-secondary' : 'from-primary'
                }`
              : 'hover:animate-float'
          }
        >
          about
        </NavLink>
        <Link to="/" className="text-3xl hover:animate-float">
          PhR
        </Link>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive
              ? `text-lg bg-gradient-to-r bg-[length:100%_3px] bg-bottom bg-no-repeat to-blue-400 ${
                  theme === 'light' ? 'from-secondary' : 'from-primary'
                }`
              : 'hover:animate-float'
          }
        >
          projects
        </NavLink>
        <button
          onClick={toggleTheme}
          className="font-medium hover:animate-float"
        >
          {theme === 'light' ? '🌞' : '🌝'}
        </button>
      </nav>
    </header>
  );
}
