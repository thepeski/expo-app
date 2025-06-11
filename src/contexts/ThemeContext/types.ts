/* @contexts/ThemeContext/types.ts */

// src imports
import { ThemeType } from "@constants";

type ThemeContextType = {
    theme: ThemeType;
    themeMode: string;
    isThemeLoading: boolean;
    themeError: string | null;
    changeTheme: (newTheme: string) => Promise<void>;
    changeThemeMode: (newThemeMode: string) => Promise<void>;
};

export default ThemeContextType;