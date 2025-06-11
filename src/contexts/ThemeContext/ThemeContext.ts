/* @contexts/ThemeContext/ThemeContext.ts */
// define theme context

// react imports
import { createContext } from "react";

// src imports
import { themes } from "@constants";

// local imports
import ThemeContextType from "./types";

const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    themeMode: "system",
    isThemeLoading: true,
    themeError: null,
    changeTheme: async () => { },
    changeThemeMode: async () => { },
});

export default ThemeContext;