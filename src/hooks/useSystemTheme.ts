/* @hooks/useSystemTheme.ts */
// return theme object based on system theme

// react imports
import { useColorScheme } from "react-native";

// src imports
import { ThemeType, themes } from "@constants"

function useSystemTheme(): ThemeType {
    return useColorScheme() === "light" ? themes.light : themes.dark;
}

export default useSystemTheme;