import { creaateContext, createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => { }
})