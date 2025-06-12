/* @hooks/useTheme.tsx */
// provide theme state variables & methods

// react imports
import { useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";

// src imports
import { ThemeType, ThemesType, ThemeModesType, storage, themes, themeModes } from "@constants";
import { ThemeContext } from "@contexts";
import { Logger } from "@dev";
import { getStorageToken, setStorageToken } from "@services";

// local imports
import useSystemTheme from "./useSystemTheme";

function useTheme() {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const logger = new Logger("useTheme.tsx");

    const [theme, setTheme] = useState<ThemeType>(themes.light);
    const [themeMode, setThemeMode] = useState("system");
    const [isThemeLoading, setIsThemeLoading] = useState(true);
    const [themeError, setThemeError] = useState<string | null>(null);
    const systemTheme = useSystemTheme();

    // check if string matches available themes
    function isValidThemeName(name: string): name is ThemesType {
        return name in themes;
    }

    // check if string matches available theme modes
    function isValidThemeMode(mode: string): mode is ThemeModesType {
        return mode in themeModes;
    }

    // return valid theme object
    async function getResolvedTheme(): Promise<ThemeType> {
        const storedTheme = await getStorageToken(storage.theme) ?? themes.light.name;

        return isValidThemeName(storedTheme) ? themes[storedTheme] : themes.light;
    }

    // return valid theme mode name
    async function getResolvedThemeMode(): Promise<string> {
        const storedThemeMode = await getStorageToken(storage.themeMode) ?? themeModes.system;

        return isValidThemeMode(storedThemeMode) ? storedThemeMode : themeModes.system;
    }

    // resolve theme on mount
    useEffect(() => {
        async function resolveTheme() {
            try {

                // resolve stored theme & theme mode
                const resolvedTheme = await getResolvedTheme();
                const resolvedThemeMode = await getResolvedThemeMode();

                // resolve effective theme
                const effectiveTheme = resolvedThemeMode === themeModes.system ?
                    systemTheme : resolvedTheme;

                setTheme(effectiveTheme);
                setThemeMode(resolvedThemeMode);
                setIsThemeLoading(false);

                logger.info(`effective theme on mount: ${effectiveTheme.name}`);
                logger.info(`resolved theme mode on mount: ${resolvedThemeMode}`);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setThemeError(error);
            }
        }

        resolveTheme();
    }, []);

    // listen for system theme changes
    useEffect(() => {

        // do not listen if system mode not set
        if (themeMode !== themeModes.system) return;

        // set up listener
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {

            // resolve effective system theme name
            const resolvedThemeName = typeof colorScheme === "string" ?
                colorScheme : themes.light.name;

            if (isValidThemeName(resolvedThemeName)) {
                setTheme(themes[resolvedThemeName]);

                logger.info(`changed system theme to: ${resolvedThemeName}`);
            } else {
                setTheme(systemTheme);

                logger.warn(`invalid system theme: ${resolvedThemeName}`);
            }
        });

        logger.info("listening for system theme changes");

        // clean up listener
        return () => {
            subscription.remove();

            logger.info("finished listening for system theme changes");
        };
    }, [themeMode]);

    // change theme
    async function changeTheme(newThemeName: string) {

        // return if theme invalid
        if (!isValidThemeName(newThemeName)) {
            logger.warn(`invalid theme name: ${newThemeName}`);

            return;
        }

        try {

            // store & set theme if changed
            if (theme.name !== newThemeName) {
                await setStorageToken(storage.theme, newThemeName);

                setTheme(themes[newThemeName]);

                logger.info(`changed theme to: ${newThemeName}`);
            }

            // store & set theme mode to user
            if (themeMode !== themeModes.user) {
                await setStorageToken(storage.themeMode, themeModes.user);

                setThemeMode(themeModes.user);

                logger.info(`changed theme mode to: ${themeModes.user}`);
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setThemeError(error);
        }
    }

    // change theme mode
    async function changeThemeMode(newThemeMode: string) {

        // resolve theme mode name
        const resolvedThemeMode = isValidThemeMode(newThemeMode) ?
            newThemeMode : themeModes.system;

        // do not change theme mode if already set
        if (themeMode === resolvedThemeMode) {
            logger.info(`theme mode ${themeMode} already active`);

            return;
        }

        // set system theme mode
        if (resolvedThemeMode === themeModes.system) {
            try {

                // store new theme mode
                await setStorageToken(storage.themeMode, resolvedThemeMode);

                setThemeMode(themeModes.system);

                logger.info(`changed theme mode to: ${resolvedThemeMode}`);

                // set theme if changed
                if (theme.name !== systemTheme.name) {
                    setTheme(systemTheme);

                    logger.info(`changed theme to: ${systemTheme.name}`);
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
                await setStorageToken(storage.themeMode, resolvedThemeMode);

                setThemeMode(themeModes.user);

                logger.info(`changed theme mode to: ${resolvedThemeMode}`);

                // resolve stored theme
                const resolvedTheme = await getResolvedTheme();

                // set theme if changed
                if (theme.name !== resolvedTheme.name) {
                    setTheme(resolvedTheme);

                    logger.info(`changed theme to: ${resolvedTheme.name}`);
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