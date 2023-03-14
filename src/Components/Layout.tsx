import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

// context for color theme
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';

export default function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div
        className={`h-screen flex flex-col font-inter
      ${
        theme === 'light'
          ? 'bg-primary text-secondary'
          : 'bg-secondary text-secondary'
      }
      `}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
