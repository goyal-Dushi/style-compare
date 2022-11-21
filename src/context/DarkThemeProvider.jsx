import { useEffect } from 'react';
import { useState } from 'react';
import { DarkThemeContext } from './DarkThemeContext';


export const DarkThemeProvider = ({ children }) => {

    const [ darkTheme, setDarkTheme ] = useState( false );

    useEffect( () => {
        const themeMode = localStorage.getItem( 'LibCompareTheme' );
        const boolValue = ( themeMode == 'true' ) ? true : false;
        setDarkTheme( boolValue );
    }, []);
    

    const handleTheme = () => {
        localStorage.setItem( 'LibCompareTheme', !darkTheme );
        setDarkTheme( !darkTheme );
    }
    

    const dataContext = {
        darkTheme,
        setDarkTheme,
        handleTheme,
    }

    return ( 
        <DarkThemeContext.Provider value={ dataContext } >
            { children }
        </DarkThemeContext.Provider >
    );
}