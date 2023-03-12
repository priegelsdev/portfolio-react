import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-secondary text-primary">
      <nav className="flex justify-around items-center font-bold py-2 md:py-9 mx-2 md:mx-20 lg:mx-60">
        <NavLink to="/">home</NavLink>
        <NavLink to="about">about</NavLink>
        <Link to="/" className="text-3xl">
          PhR
        </Link>
        <NavLink to="projects">projects</NavLink>
        <button className="font-medium">🌞</button>
      </nav>
    </header>
  );
}
