/* @contexts/ThemeContext/ThemeContext.ts */
// define theme context

// react
import { createContext } from "react";

// src
import { themes, themeModes } from "@constants";

// local
import { Props } from "./types";

const ThemeContext = createContext<Props>({
    theme: themes.light,
    themeMode: themeModes.system,
    isThemeLoading: true,
    themeError: "",
    changeTheme: () => { },
    changeThemeMode: () => { }
});

export { ThemeContext };