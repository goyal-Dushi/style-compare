import React, { useEffect, useState, useMemo } from 'react';
import DarkThemeContext from './DarkThemeContext';

export default function DarkThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const themeMode = localStorage.getItem('LibCompareTheme');
    const boolValue = themeMode === 'true';
    setDarkTheme(boolValue);
  }, []);

  const handleTheme = () => {
    localStorage.setItem('LibCompareTheme', !darkTheme);
    setDarkTheme(!darkTheme);
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
