/* @hooks/useTheme/types.ts */

// react
import { Dispatch, SetStateAction } from "react";

// src
import { Theme, ThemeMode, themes } from "@constants";

type OnMount = {
    systemTheme: typeof themes["light"] | typeof themes["dark"];
    setTheme: Dispatch<SetStateAction<Theme>>;
    setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
    setIsThemeLoading: Dispatch<SetStateAction<boolean>>;
    setThemeError: Dispatch<SetStateAction<string>>;
};

type Listener = {
    theme: Theme;
    themeMode: ThemeMode;
    systemTheme: typeof themes["light"] | typeof themes["dark"];
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export { OnMount, Listener };