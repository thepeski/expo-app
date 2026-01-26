/* @hooks/useSystemTheme/useSystemTheme.tsx */
// select colour theme based on system settings

// react
import { useColorScheme } from "react-native";

// src
import { themes } from "@constants";

// local
import { Props } from "./types";

function useSystemTheme(): Props {
    return useColorScheme() === "light" ? themes.light : themes.dark;
}

export { useSystemTheme };