import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

// context for color theme
import { ThemeContext } from '../context/ThemeContext';

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex flex-col font-inter
      ${
        theme === 'light'
          ? 'bg-primary text-secondary'
          : 'bg-secondary text-primary'
      }
      `}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
