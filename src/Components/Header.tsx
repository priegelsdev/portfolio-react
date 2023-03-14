import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`${
        theme === 'light'
          ? 'bg-secondary text-primary'
          : 'bg-primary text-seconday'
      }`}
    >
      <nav className="flex justify-around items-center font-bold py-2 md:py-9 mx-2 md:mx-20 lg:mx-60">
        <NavLink to="/">home</NavLink>
        <NavLink to="about">about</NavLink>
        <Link to="/" className="text-3xl">
          PhR
        </Link>
        <NavLink to="projects">projects</NavLink>
        <button onClick={toggleTheme} className="font-medium">
          {theme === 'light' ? '🌞' : 'moon'}
        </button>
      </nav>
    </header>
  );
}
