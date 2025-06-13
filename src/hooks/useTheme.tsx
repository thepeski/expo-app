/* @hooks/useTheme.tsx */
// provide access to theme context variables & methods

// react imports
import { useContext, useState, useEffect } from "react";

// src imports
import {
    ThemesKeyType,
    themes,
    ThemeModesKeyType,
    themeModes,
    ThemeType,
    storageKeys
} from "@constants";
import { ThemeContext } from "@contexts";
import { Logger } from "@dev";
import { storage } from "@services";

// local imports
import useSystemTheme from "./useSystemTheme";

function useTheme() {
    return useContext(ThemeContext);
}

// check if string matches theme name
function isValidThemesKey(name: string): name is ThemesKeyType {
    return name in themes;
}

// check if string matches theme mode
function isValidThemeModesKey(mode: string): mode is ThemeModesKeyType {
    return mode in themeModes;
}

// return valid theme
async function resolveUserTheme(): Promise<ThemeType> {
    const storedUserTheme = await storage.get(storageKeys.userTheme) ?? themes.light.name;

    return isValidThemesKey(storedUserTheme) ? themes[storedUserTheme] : themes.light;
}

// return valid theme mode
async function resolveThemeMode(): Promise<string> {
    const storedThemeMode = await storage.get(storageKeys.themeMode) ?? themeModes.system;

    return isValidThemeModesKey(storedThemeMode) ? storedThemeMode : themeModes.system;
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const logger = new Logger("useTheme.tsx");

    const [theme, setTheme] = useState<ThemeType>(themes.light);
    const [themeMode, setThemeMode] = useState(themeModes.system);
    const [isThemeLoading, setIsThemeLoading] = useState(true);
    const [themeError, setThemeError] = useState<string | null>(null);
    const systemTheme = useSystemTheme();

    // resolve theme on mount
    useEffect(() => {
        void (async () => {
            try {

                // resolve theme & theme mode
                const userTheme = await resolveUserTheme();
                const resolvedThemeMode = await resolveThemeMode();

                // resolve effective theme
                const effectiveTheme = resolvedThemeMode === themeModes.system ?
                    systemTheme : userTheme;

                setTheme(effectiveTheme);
                setThemeMode(resolvedThemeMode);
                setIsThemeLoading(false);

                logger.info(`set theme on mount (theme: ${effectiveTheme.name})`);
                logger.info(`resolved theme mode on mount (mode: ${resolvedThemeMode})`);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setThemeError(error);
            }
        })();
    }, []);

    // listen for system theme changes
    useEffect(() => {
        if (themeMode === themeModes.system) {
            setTheme(systemTheme);

            logger.info(`changed theme (theme: ${systemTheme})`);
        }
    }, [systemTheme]);

    // change theme
    async function changeTheme(newThemeName: string) {

        // skip if theme invalid
        if (!isValidThemesKey(newThemeName)) {
            logger.warn(`invalid theme (theme: ${newThemeName})`);

            return;
        }

        try {

            // store & set theme if changed
            if (theme.name !== newThemeName) {
                await storage.set(storageKeys.userTheme, newThemeName);

                setTheme(themes[newThemeName]);

                logger.info(`changed theme (theme: ${newThemeName})`);
            }

            // store & set theme mode to user
            if (themeMode !== themeModes.user) {
                await storage.set(storageKeys.themeMode, themeModes.user);

                setThemeMode(themeModes.user);

                logger.info(`changed theme mode (mode: ${themeModes.user})`);
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setThemeError(error);
        }
    }

    // change theme mode
    async function changeThemeMode(newThemeMode: string) {

        // resolve theme mode name
        const resolvedThemeMode = isValidThemeModesKey(newThemeMode) ?
            newThemeMode : themeModes.system;

        // skip if theme mode already active
        if (themeMode === resolvedThemeMode) {
            logger.info(`theme mode already active (mode: ${themeMode})`);

            return;
        }

        // set system theme mode
        if (resolvedThemeMode === themeModes.system) {
            try {

                // store new theme mode
                await storage.set(storageKeys.themeMode, resolvedThemeMode);

                setThemeMode(themeModes.system);

                logger.info(`changed theme mode (mode: ${resolvedThemeMode})`);

                // set theme if changed
                if (theme.name !== systemTheme.name) {
                    setTheme(systemTheme);

                    logger.info(`changed theme (theme: ${systemTheme.name})`);
                }
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setThemeError(error);
            }
        }
        // set user theme mode
        else {
            try {

                // store new theme mode
                await storage.set(storageKeys.themeMode, resolvedThemeMode);

                setThemeMode(themeModes.user);

                logger.info(`changed theme mode (mode: ${resolvedThemeMode})`);

                // resolve stored theme
                const resolvedTheme = await resolveUserTheme();

                // set theme if changed
                if (theme.name !== resolvedTheme.name) {
                    setTheme(resolvedTheme);

                    logger.info(`changed theme (theme: ${resolvedTheme.name})`);
                }
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setThemeError(error);
            }
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                themeMode,
                isThemeLoading,
                themeError,
                changeTheme,
                changeThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { useTheme, ThemeProvider };