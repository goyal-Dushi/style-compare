import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkThemeContext from '../context/DarkThemeContext';

export default function ThemeButton() {
  const { darkTheme, handleTheme } = useContext(DarkThemeContext);

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleTheme} color={'inherit'}>
      {darkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
