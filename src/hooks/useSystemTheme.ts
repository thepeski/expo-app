/* @hooks/useSystemTheme.ts */
// return theme object based on system theme

// src imports
import { ThemeType, themes } from "@constants"
import useSystemIsLight from "./useSystemIsLight"

function useSystemTheme(): ThemeType {
    return useSystemIsLight() ? themes.light : themes.dark;
}

export default useSystemTheme;