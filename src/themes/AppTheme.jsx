import React, { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import DarkThemeContext from '../context/DarkThemeContext';

export default function AppTheme({ children }) {
  const { darkTheme } = useContext(DarkThemeContext);

  const themeMode = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
