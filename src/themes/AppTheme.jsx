import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import DarkThemeContext from './context/DarkThemeContext';
import { stylingSnippets } from './stylingSnippets';

export default function AppTheme({ children }) {
  const { darkTheme } = useContext(DarkThemeContext);

  const themeMode = createTheme({
    palette: {
      mode: darkTheme,
    },
  });

  useEffect(() => {
    stylingSnippets();
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}
