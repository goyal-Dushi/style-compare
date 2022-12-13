import React, { useEffect, useState, useMemo } from 'react';
import DarkThemeContext from './DarkThemeContext';

export default function DarkThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState('light');

  useEffect(() => {
    const themeMode = localStorage.getItem('LibCompareTheme');
    setDarkTheme(themeMode || darkTheme);
  }, []);

  const handleTheme = () => {
    const newThemeMode = darkTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('LibCompareTheme', newThemeMode);
    setDarkTheme(newThemeMode);
  };

  const dataContext = useMemo(() => ({
    darkTheme,
    setDarkTheme,
    handleTheme,
  }));

  return (
    <DarkThemeContext.Provider value={dataContext}>
      {children}
    </DarkThemeContext.Provider>
  );
}
