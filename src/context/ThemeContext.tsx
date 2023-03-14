import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  // set state and default to light theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
