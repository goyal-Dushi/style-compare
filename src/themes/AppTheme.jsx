import { useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

import { DarkThemeContext } from '../context';


export const AppTheme = ({ children }) => {

    const { darkTheme } = useContext( DarkThemeContext ) || false;

    const modeTheme = createTheme({
        palette: {
            mode: darkTheme ? 'dark' : 'light',
        }
    });


    return (
        <ThemeProvider theme={ modeTheme }>

            <CssBaseline />

            { children }

        </ThemeProvider>
    );
}