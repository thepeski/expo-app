/* @contexts/ThemeContext.ts */
// define theme context

// react imports
import { createContext } from "react";

// src imports
import { ThemeType, themes, themeModes } from "@constants";

type ThemeContextType = {
    theme: ThemeType;
    themeMode: string;
    isThemeLoading: boolean;
    themeError: string | null;
    changeTheme: (newTheme: string) => void;
    changeThemeMode: (newThemeMode: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    themeMode: themeModes.system,
    isThemeLoading: true,
    themeError: null,
    changeTheme: () => { },
    changeThemeMode: () => { },
});

export default ThemeContext;