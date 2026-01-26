/* @contexts/ThemeContext/types.ts */

// src
import { Theme, ThemeMode } from "@constants";

type Props = {
    theme: Theme;
    themeMode: ThemeMode;
    isThemeLoading: boolean;
    themeError: string;
    changeTheme: (theme: string) => void;
    changeThemeMode: (themeMode: string) => void;
};

export type { Props };